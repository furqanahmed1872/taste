<script>
  import { onMount } from "svelte";
  import { moviesStore } from "./store"; // Adjust the path as needed
  import { get } from "svelte/store";
  let allMovies;
  let genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  onMount(async () => {
    try {
      let allMovies = get(moviesStore); // Get current value of the store

      for (let i = 1; i < 2; i++) {
        const res = await fetch(`/api/tmdb?year=2024&page=${i}`);
        if (res.ok) {
          const data = await res.json();
          if (data.results && Array.isArray(data.results)) {
            console.log(data);
            moviesStore.update((movies) => [...movies, ...data.results]);
          } else {
            console.error("Unexpected data format:", data);
          }
        } else {
          console.error("Failed to fetch:", await res.json());
        }
      }
      console.log($moviesStore);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

  function getGenreNames(genreIds) {
    return genreIds
      .map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : "Unknown";
      })
      .join(", ");
  }
</script>

<h1 class="text-3xl font-semibold text-center my-8">Movie List</h1>

<div class="grid grid-cols-3 gap-6">
  {#if $moviesStore}
    {#each $moviesStore as movie}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          class="w-full h-auto"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{movie.title}</h2>
          <p class="text-sm text-gray-600 mb-4">{movie.overview}</p>
          <p class="text-xs text-gray-500">
            Release Date: {movie.release_date}<br />
            Vote Average: {movie.vote_average}<br />
            Genres: {getGenreNames(movie.genre_ids)}
          </p>
        </div>
      </div>
    {/each}
  {:else}
    Still loading
  {/if}
</div>
