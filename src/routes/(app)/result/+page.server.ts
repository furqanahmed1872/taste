import type { PageServerLoad } from "./$types.js";
import { PRIVATE_OPENAI_API_KEY } from "$env/static/private";
import OpenAI from "openai";

export const load: PageServerLoad = async () => {
 

  return { base64Audio, num };
};
