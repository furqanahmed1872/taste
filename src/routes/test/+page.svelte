<!-- import { supabase } from "$lib/supabaseClient";
import { genres, movie } from "./store"; // Adjust the path as needed
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
      poster: m.poster_path,
      background: m.backdrop_path,
      rating: m.vote_average.toFixed(1),
      date: m.release_date,
      genre: getGenreNames(m.genre_ids),
      storyline: m.overview,
      adult: m.adult,
      votingcount: m.vote_count,
      popularity: m.popularity,
      language: m.original_language,
      year: "1992",
    };
  });
  console.log(filterData.length);
  const { data, error } = await supabase
    .from("Movies")
    .insert(filterData)
    .select();

  //   const { error } = await supabase.from("Movies").delete().eq("year", "1991");

  if (error) {
    console.error("Error inserting data:", error);
  }

  return {};
}; -->
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
<div
  class="h-screen w-full bg-[url('https://w.wallhaven.cc/full/l3/wallhaven-l3d55y.jpg')] bg-cover bg-center"
>
  <div class="h-24 place-content-center items-center grid grid-cols-10">
    <div class="col-span-2"></div>
    <div class="text-[#51714b] font-poiret text-4xl font-semibold grid-cols-2">
      Jake Jonson
    </div>
    <div></div>
    <div class="col-span-4 flex flex-row justify-evenly">
      <div
        class="text-[#51714b] font-avenir text-md font-semibold hover:text-green-600"
      >
        Home
      </div>
      <div
        class="text-[#51714b] font-avenir text-md font-semibold hover:text-green-600"
      >
        portfolio
      </div>
      <div
        class="text-[#51714b] font-avenir text-md font-semibold hover:text-green-600"
      >
        videos
      </div>
      <div
        class="text-[#51714b] font-avenir text-md font-semibold hover:text-green-600"
      >
        Client
      </div>
      <div
        class="text-[#51714b] font-avenir text-md font-semibold hover:text-green-600"
      >
        Contact
      </div>
    </div>
    <div class="col-span-3"></div>
  </div>

<div class=" flex w-full justify-center items-center my-64 flex-col">

<div class="font-extrabold text-rose-50 text-xl">Travel Photographer</div>
<br>
<div class=" text-5xl font-serif text-green-950">Seening the world ,Through<br><div class="text-center">the eyes of my lens </div></div>
<button class="my-7 text-xl border p-4 px-8 hover:bg-white hover:text-black hover:border-black hover:border-solid text-yellow-50 transition duration-300 ease-in-out">Get in mood</button>
</div>



</div>

