import type { PageServerLoad } from "./$types.js";
import { PRIVATE_OPENAI_API_KEY } from "$env/static/private";
import OpenAI from "openai";

export const load: PageServerLoad = async () => {
  const openai = new OpenAI({ apiKey: PRIVATE_OPENAI_API_KEY });

  const voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"] as const;
  const voiceGreetings: Record<(typeof voices)[number], string> = {
    alloy: "Hi, I’m Alloy, your assistant for finding movies.",
    echo: "Hello, Echo here! Ready to recommend some great shows?",
    fable: "Greetings, I’m Fable. Let’s discover your next favorite movie.",
    onyx: "Hi, I’m Onyx. Tell me what you’d like to watch today.",
    nova: "Hello, I’m Nova. Let’s explore some amazing films together.",
    shimmer: "Hi, I’m Shimmer, your personal entertainment guide.",
  };

  let num = Math.floor(Math.random() * voices.length)

  // Retrieve the unique greeting for the selected voice
  const greetingnote = voiceGreetings[voices[num]];

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: voices[num],
    input: greetingnote,
  });
  const buffer = Buffer.from(await mp3.arrayBuffer());
  const base64Audio = buffer.toString("base64");

  return { base64Audio, num};
};

// "your personal movie taste budder!, here to help you find the perfect movie or series to recommend. Just tell me what you're in the mood for, like: Genre(e.g., action, comedy, drama, horror), year(1990 t0 2025), Mood or theme(e.g., feel - good, thrilling, romantic, dystopian), Rating like IMDB, Anything you've enjoyed recently for similar recommendations. The more details you provide, the better I can suggest something you'll love.What are you in the mood to watch today ? ";
