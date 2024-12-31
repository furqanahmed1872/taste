// src/routes/api/whisper/+server.ts
import type { RequestHandler } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";
import { PRIVATE_OPENAI_API_KEY } from "$env/static/private";
import { PRIVATE_SUPABASE_SERVICE_ROLE_KEY } from "$env/static/private";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";
import { json } from "@sveltejs/kit";
import OpenAI from "openai";
import { handleUserInput } from "$lib/functions/voice";

const voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"] as const;

export const POST: RequestHandler = async ({ request, locals }) => {
  const supabase = createClient(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SUPABASE_SERVICE_ROLE_KEY
  );
  const openai = new OpenAI({ apiKey: PRIVATE_OPENAI_API_KEY });
  const formData = await request.formData();
  const audioFile = formData.get("file");
  const selectedVoice = formData.get("selectedVoice");

  if (!(audioFile instanceof Blob)) {
    return new Response(JSON.stringify({ error: "Invalid file upload" }), {
      status: 400,
    });
  }
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

  const response = handleUserInput(transcription);

  if (response.status === "missing_details") {
    console.log(response.prompt);
    if (response.prompt) {
      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: selectedVoice as (typeof voices)[number],
        input: response.prompt,
      });
      const buffer = Buffer.from(await mp3.arrayBuffer());
      const base65Audio = buffer.toString("base64");

      return json({
        base65Audio,
        extractedDetails: response.extractedDetails,
      });
    }
  } else {
    return json({
      details: response.details,
    });
  }
};
