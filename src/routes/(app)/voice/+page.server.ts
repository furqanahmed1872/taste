import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async () => {
  let greetingnote: any;
  try {
    const response = await fetch("/api/voice-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        welcomingnote:
          "Hi, I’m StreamMate, your personal movie taste budder!, here to help you find the perfect movie or series to recommend. Just tell me what you're in the mood for, like: Genre (e.g., action, comedy, drama, horror), year (1990 t0 2025), Mood or theme (e.g., feel-good, thrilling, romantic, dystopian), Rating like IMDB, Anything you've enjoyed recently for similar recommendations. The more details you provide, the better I can suggest something you'll love. What are you in the mood to watch today?",
      }),
    });

    const data = await response.json();

    if (response.ok && data.audio) {
      greetingnote = new Audio(`${data.audio}?t=${Date.now()}`);
      greetingnote.play().catch((err) => {
        console.error("Error playing audio:", err);
      });
    } else {
      console.error("Error:", data.error);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return { greetingnote };
};
