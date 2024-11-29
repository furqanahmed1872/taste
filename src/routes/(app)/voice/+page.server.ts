import type { PageServerLoad } from "./$types.js";
import { PRIVATE_OPENAI_API_KEY } from "$env/static/private";
import OpenAI from "openai";

export const load: PageServerLoad = async ({ fetch }) => {
  const openai = new OpenAI({ apiKey: PRIVATE_OPENAI_API_KEY });
  let greetingnote =
    "Hi, I’m StreamMate, "
  // "your personal movie taste budder!, here to help you find the perfect movie or series to recommend. Just tell me what you're in the mood for, like: Genre(e.g., action, comedy, drama, horror), year(1990 t0 2025), Mood or theme(e.g., feel - good, thrilling, romantic, dystopian), Rating like IMDB, Anything you've enjoyed recently for similar recommendations. The more details you provide, the better I can suggest something you'll love.What are you in the mood to watch today ? ";

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: greetingnote,
  });
  const buffer = Buffer.from(await mp3.arrayBuffer());
  const base64Audio = buffer.toString("base64");

  return { base64Audio };
};
