import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async () => {
  async function getPopularMovies() {
    const url = "https://movies-tv-shows-database.p.rapidapi.com/";
    const queryParams = "?year=2024&page=1";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-rapidapi-ua": "RapidAPI-Playground",
      "x-rapidapi-key": "0175d1666dmsh7c5e22e02a615eep125e7ejsnb243d97d107f",
      "x-rapidapi-host": "movies-tv-shows-database.p.rapidapi.com",
    };

    try {
      const response = await fetch(`${url}${queryParams}`, {
        method: "GET",
        headers,
      });

      console.log("Response Status:", response.status, response.statusText);
      console.log("Response Headers:", Array.from(response.headers.entries()));

      const rawData = await response.text();
      console.log("Raw Response Body:", rawData);

      if (!rawData) {
        console.warn("Empty response body received.");
        return { movies: [] }; // Return fallback empty data
      }

      const data = JSON.parse(rawData);
      return data;
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      throw error;
    }
  }

  try {
    const movies = await getPopularMovies();
    return { movies };
  } catch (error) {
    return { movies: [], error: error.message };
  }
};

// const apiKey = "d37728e5";
// const year = 2023;
// const fetchMoviesAndSave = async (apiKey, year) => {
//   try {
//     const baseUrl = "http://www.omdbapi.com/";

//     let currentPage = 1;
//     let movies = [];
//     let allMoviesFetched = false;
//     let s = ''

//     // Fetch the first list of movies
//     while (!allMoviesFetched) {
//       const response = await fetch(
//         `${baseUrl}?apikey=${apiKey}&y=${year}&page=${currentPage}`
//       );
//       const data = await response.json();

//       if (data.Response === "True") {
//         movies.push(...data.Search);
//         currentPage++;
//         if (movies.length >= data.totalResults) allMoviesFetched = true;
//       } else {
//         allMoviesFetched = true;
//       }
//     }

//     console.log(`Fetched ${movies.length} movies from OMDb.`);

//     // Fetch full details for each movie and save to Supabase
//     for (const movie of movies) {
//       const movieDetailsResponse = await fetch(
//         `${baseUrl}?apikey=${apiKey}&i=${movie.imdbID}`
//       );
//       const movieDetails = await movieDetailsResponse.json();

//       if (movieDetails.Response === "True") {
//         const { data, error } = await supabase.from("IMDBmovies").insert([
//           {
//             title: movieDetails.Title || "Unknown",
//             year: movieDetails.Year || "Unknown",
//             genre: movieDetails.Genre || "Unknown",
//             director: movieDetails.Director || "Unknown",
//             actors: movieDetails.Actors || "Unknown",
//             writer: movieDetails.Writer || "Unknown",
//             plot: movieDetails.Plot || "Unknown",
//             released: movieDetails.Released || "Unknown",
//             runtime: movieDetails.Runtime || "Unknown",
//             language: movieDetails.Language || "Unknown",
//             country: movieDetails.Country || "Unknown",
//             rotten:
//               movieDetails.Ratings && movieDetails.Ratings[1]
//                 ? movieDetails.Ratings[1].Source
//                 : "Unknown",
//             voting: movieDetails.imdbVoting || "Unknown",
//             type: movieDetails.Type || "Unknown",
//             rating: movieDetails.imdbRating || "Unknown",
//             poster: movieDetails.Poster || "Unknown",
//             awards: movieDetails.Awards || "Unknown",
//           },
//         ]);

//         if (error) {
//           console.error(
//             `Error saving movie ${movieDetails.Title}:`,
//             error.message
//           );
//         } else {
//           console.log(`Saved movie: ${movieDetails.Title}`);
//         }
//       } else {
//         console.error(
//           `Failed to fetch details for IMDbID ${movie.imdbID}:`,
//           movieDetails.Error
//         );
//       }
//     }

//     console.log("All movies processed and saved.");
//   } catch (error) {
//     console.error("Error during fetching or saving movies:", error.message);
//   }
// };

// fetchMoviesAndSave(apiKey, year);

// let { data: IMDBmovies, error } = await supabase.from("IMDBmovies").select("*").gte('rating', 9).limit(10);
// console.log(IMDBmovies);
// return { IMDBmovies };

// Filters
// .eq('column', 'Equal to')
// .gt('column', 'Greater than')
// .lt('column', 'Less than')
// .gte('column', 'Greater than or equal to')
// .lte('column', 'Less than or equal to')
// .like('column', '%CaseSensitive%')
// .ilike('column', '%CaseInsensitive%')
// .is('column', null)
// .in('column', ['Array', 'Values'])
// .neq('column', 'Not equal to')
