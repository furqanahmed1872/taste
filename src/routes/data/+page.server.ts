import { supabase } from "$lib/supabaseClient";
import { movie, genres } from "./store"; // Adjust the path as needed
import type { PageServerLoad, Actions } from "./$types.js";

export const load: PageServerLoad = async () => {
  function getGenreNames(genreIds) {
    return genreIds
      .map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : "Unknown";
      })
      .join(", ");
  }
  let filterData = movie.map((m) => {
    return {
      title: m.original_title,
      poster: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
      background: `https://image.tmdb.org/t/p/w500${m.backdrop_path}`,
      rating: m.vote_average.toFixed(1),
      date: m.release_date,
      genre: getGenreNames(m.genre_ids),
      storyline: m.overview,
      adult: m.adult,
      votingcount: m.vote_count,
      popularity: m.popularity,
      language: m.original_language,
      year: "1991",
    };
  });
  console.log(filterData.length);
  // const { data, error } = await supabase
  //   .from("Movies")
  //   .insert(filterData)
  //   .select();

  // if (error) {
  //   console.error("Error inserting data:", error);
  // }

  return {};
};
