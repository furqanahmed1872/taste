import { json } from "@sveltejs/kit";

function sanitizeMovieData(movies) {
  return movies.map((movie) => {
    // Check if the `overview` key exists and is a string
    if (typeof movie.overview === "string") {
      // Escape any potential symbols or sanitize the string
      movie.overview = JSON.stringify(movie.overview);
    } else {
      // If not a string, ensure it's converted to a sanitized string
      movie.overview = JSON.stringify(String(movie.overview || ""));
    }
    return movie;
  });
}

// Usage in your GET function
export async function GET({ params, fetch, url }) {
  const year = url.searchParams.get("year");
  const page = url.searchParams.get("page");

 const response = await fetch(
   `https://api.themoviedb.org/3/discover/tv?api_key=52c8b4baf59b6fc3d5b53f6a663406ab&first_air_date_year=${year}&sort_by=popularity.desc&page=${page}`
 );

  if (!response.ok) {
    return json(
      { error: "Failed to fetch data from TMDb" },
      { status: response.status }
    );
  }

  const data = await response.json();

  // Sanitize the movies array
  if (Array.isArray(data.results)) {
    data.results = sanitizeMovieData(data.results);
  }

  return json(data);
}
