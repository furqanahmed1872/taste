// src/lib/functions/voice.ts

function extractMovieDetails(input: string) {
  const yearRegex = /\b(19|20)\d{2}\b/;
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
  const genreRegex = new RegExp(genres.join("|"), "i");

  const typeKeywords = {
    movie: ["movie", "film"],
    tv: ["tv", "series", "show"],
  };

  const yearMatch = input.match(yearRegex);
  const year = yearMatch ? yearMatch[0] : null;

  const genreMatch = input.match(genreRegex);
  const genre = genreMatch ? genreMatch[0].toLowerCase() : null;

  const storyline = input.includes("like")
    ? input.split("like").pop().trim()
    : null;

  let type = null;
  for (const [key, keywords] of Object.entries(typeKeywords)) {
    if (keywords.some((keyword) => input.toLowerCase().includes(keyword))) {
      type = key;
      break;
    }
  }

  return { year, genre, storyline, type };
}

export function handleUserInput(input: string) {
  const extractedDetails = extractMovieDetails(input);

  const missing = {
    year: !extractedDetails.year,
    genre: !extractedDetails.genre,
    storyline: !extractedDetails.storyline,
    type: !extractedDetails.type,
  };

  // Check if all fields are complete
  const allComplete = Object.values(missing).every((isMissing) => !isMissing);

  if (allComplete) {
    return {
      status: "complete",
      details: extractedDetails,
    };
  }

  // Generate a prompt for missing details
  let missingPrompt = "Could you provide more details? Specifically:\n";
  if (missing.year)
    missingPrompt += "- What year or range of years are you interested in?\n";
  if (missing.genre)
    missingPrompt +=
      "- What genre would you like? For example: action, comedy, drama, etc.\n";
  if (missing.storyline)
    missingPrompt +=
      "- Can you describe the storyline or plot you're looking for?\n";
  if (missing.type)
    missingPrompt += "- Are you looking for a movie or a TV series?\n";

  return { status: "missing_details", prompt: missingPrompt, extractedDetails };
}
