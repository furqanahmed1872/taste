// src/routes/api/whisper/+server.ts
import type { RequestHandler } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";
import { PRIVATE_OPENAI_API_KEY } from "$env/static/private";
import { PRIVATE_SUPABASE_SERVICE_ROLE_KEY } from "$env/static/private";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";
import { json } from "@sveltejs/kit";
import OpenAI from "openai";

export const POST: RequestHandler = async ({ request }) => {
  const { welcomingnote } = await request.json();
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
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PRIVATE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an AI assistant designed to help users discover movies and TV series for their entertainment. Your primary goal is to provide tailored recommendations based on the user's preferences, such as genre, mood, platform, language, and favorite actors or directors. Respond in a friendly and conversational tone, offering suggestions that align with the user's input. If the user is unsure, ask clarifying questions to narrow down their interests. Additionally, provide brief descriptions or reasons why the recommendations might appeal to them. Always aim to make their entertainment experience enjoyable and engaging.",
          },
          {
            role: "user",
            content: transcription,
          },
        ],
      }),
    });

    const data = await response.json();
    if (data?.choices?.length > 0) {
      const aiResponseText = data.choices[0].message.content;
      console.log(aiResponseText);
      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: welcomingnote ? welcomingnote : aiResponseText,
      });
      const buffer = Buffer.from(await mp3.arrayBuffer());

      const { data: fileList, error: listError } = await supabase.storage
        .from("audio-bucket")
        .list("", { search: "speech.mp3" });

      if (fileList) {
        const { error: deleteError } = await supabase.storage
          .from("audio-bucket")
          .remove(["speech.mp3"]);

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
          message: aiResponseText,
          audio: `https://abgxvtnbxnynzmfbriqk.supabase.co/storage/v1/object/public/audio-bucket/speech.mp3`,
        });
      } else {
        console.error("No choices found in the API response");
        return json(
          { message: "Error: No response from the AI" },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    return json({ message: "Error fetching from AI" }, { status: 500 });
  }
};
