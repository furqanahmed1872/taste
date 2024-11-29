// src/routes/api/whisper/+server.ts
import type { RequestHandler } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";
import { PRIVATE_OPENAI_API_KEY } from "$env/static/private";
import { PRIVATE_SUPABASE_SERVICE_ROLE_KEY } from "$env/static/private";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";
import { json } from "@sveltejs/kit";
import OpenAI from "openai";

export const POST: RequestHandler = async ({ request }) => {
  const supabase = createClient(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SUPABASE_SERVICE_ROLE_KEY
  );
  const openai = new OpenAI({ apiKey: PRIVATE_OPENAI_API_KEY });
  const formData = await request.formData();
  const audioFile = formData.get("file");

  if (!(audioFile instanceof Blob)) {
    return new Response(JSON.stringify({ error: "Invalid file upload" }), {
      status: 400,
    });
  }
  try {
    let details: {
      missing: any;
      year?: any;
      genre?: any;
      storyline?: any;
      type?: any;
    };
    const whisperResponse = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PRIVATE_OPENAI_API_KEY}`,
        },
        body: formData,
      }
    );

    if (!whisperResponse.ok) {
      const errorData = await whisperResponse.json();
      return new Response(JSON.stringify({ error: errorData }), {
        status: whisperResponse.status,
      });
    }

    const whisperData = await whisperResponse.json();
    const transcription = whisperData.text;
    console.log(transcription);
    // const response = await fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${PRIVATE_OPENAI_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       {
    //         role: "system",
    //         content: `
    //       You are an AI assistant designed to help users discover movies and TV series based on their preferences.
    //       Your task is to focus solely on extracting four key details from the user's input:
    //       1. Year (e.g., 2020, 1995)
    //       2. Genre (e.g., Comedy, Drama, Action)
    //       3. Storyline (keywords describing the plot, e.g., "space adventure", "romantic comedy", "detective mystery")
    //       4. movies or tv series
    //        If the user provides all three of these details (Year, Genre, and Storyline, movie or tv series), generate a Supabase API query to fetch matching movie or series results from the database.
    //       If any of these details are missing or unclear, ask the user to provide the specific missing factor(s).
    //       Be careful to ensure the details are complete before proceeding with any API queries. If all details are present, do not ask for more information — proceed to query the Supabase database.
    //       Your tone should be friendly and conversational.
    //     `,
    //       },
    //       {
    //         role: "user",
    //         content: transcription, // User's transcribed voice input
    //       },
    //     ],
    //   }),
    // });

    function extractMovieDetails(input) {
      // Regular expressions to match year, genre, and potential storyline keywords
      const yearRegex = /\b(19|20)\d{2}\b/; // Matches years between 1900-2099
      const genres = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "History",
        "Horror",
        "Music",
        "Mystery",
        "Romance",
        "Science Fiction",
        "TV Movie",
        "Thriller",
        "War",
        "Western",
      ];

      const genreRegex = new RegExp(genres.join("|"), "i"); // Case-insensitive match for any genre

      // Predefined keywords to help identify movie or TV series
      const typeKeywords = {
        movie: ["movie", "film"],
        tv: ["tv", "series", "show"],
      };

      // Extract year
      const yearMatch = input.match(yearRegex);
      const year = yearMatch ? yearMatch[0] : null;

      // Extract genre
      const genreMatch = input.match(genreRegex);
      const genre = genreMatch ? genreMatch[0].toLowerCase() : null;

      // Extract storyline keywords (we'll assume the last part of the sentence is a possible storyline description)
      const storyline = input.split("like").pop().trim() || null; // Everything after "like" could be the storyline

      // Determine movie or TV series
      let type = null;
      for (const [key, keywords] of Object.entries(typeKeywords)) {
        if (keywords.some((keyword) => input.toLowerCase().includes(keyword))) {
          type = key;
          break;
        }
      }

      return {
        year,
        genre,
        storyline,
        type,
        missing: {
          year: !year,
          genre: !genre,
          storyline: !storyline,
          type: !type,
        },
      };
    }

    function handleUserInput(input) {
      details = extractMovieDetails(input);

      // If any details are missing, generate AI prompt
      if (
        details.missing.year ||
        details.missing.genre ||
        details.missing.storyline ||
        details.missing.type
      ) {
        let missingPrompt = "Could you provide more details? Specifically:\n";

        if (details.missing.year) {
          missingPrompt +=
            "- What year or range of years are you interested in?\n";
        }
        if (details.missing.genre) {
          missingPrompt +=
            "- What genre would you like? For example: action, comedy, drama, etc.\n";
        }
        if (details.missing.storyline) {
          missingPrompt +=
            "- Can you describe the storyline or plot you're looking for?\n";
        }
        if (details.missing.type) {
          missingPrompt += "- Are you looking for a movie or a TV series?\n";
        }

        return {
          status: "missing_details",
          prompt: missingPrompt,
        };
      }
    }

    const response = handleUserInput(transcription);

    if (response.status === "missing_details") {
      console.log(response.prompt);
      if (response.prompt) {
        const mp3 = await openai.audio.speech.create({
          model: "tts-1",
          voice: "alloy",
          input: response.prompt,
        });
        const buffer = Buffer.from(await mp3.arrayBuffer());
        const base65Audio = buffer.toString("base64");

        const { data: fileList, error: listError } = await supabase.storage
          .from("audio-bucket")
          .list("", { search: "speech.mp3" });

        if (fileList) {
          const { error: deleteError } = await supabase.storage
            .from("audio-bucket")
            .remove(["speech.mp3"]);
        }
        const { data: audio, error } = await supabase.storage
          .from("audio-bucket")
          .upload("speech.mp3", buffer, {
            contentType: "audio/mp3",
          });

        if (error) {
          console.error("Error uploading file:", error);
          return json(
            { message: "Error uploading audio file" },
            { status: 500 }
          );
        }

        return json({
          base65Audio,
        });
      }
    }

    return json({
      details,
    });
  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    return json({ message: "Error fetching from AI" }, { status: 500 });
  }
};
