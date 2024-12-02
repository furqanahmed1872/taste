<script>
  import { onDestroy, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { get } from "svelte/store";
  export let data;
  let { movies } = data;

  // Initialize the store with an empty array
  const moviesStore = writable([]);
  // onMount(async () => {
  //   try {
  //     let allMovies = get(moviesStore);

  //     for (let i = 1; i < 408; i++) {
  //       const res = await fetch(`/api/tmdb?year=2019&page=${i}`);
  //       if (res.ok) {
  //         const data = await res.json();
  //         if (data.results && Array.isArray(data.results)) {
  //           console.log(data);
  //           moviesStore.update((movies) => [...movies, ...data.results]);
  //         } else {
  //           console.error("Unexpected data format:", data);
  //         }
  //       } else {
  //         console.error("Failed to fetch:", await res.json());
  //       }
  //     }
  //     console.log($moviesStore);
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // });
</script>

<h1 class="text-3xl font-semibold text-center my-8">Movie List</h1>

<div class="grid grid-cols-4 gap-6">
  {#if movies}
    {#each movies as movie}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
          alt={movie.title}
          class="w-full h-auto"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{movie.title}</h2>
          <p class="text-sm text-gray-600 mb-4">{movie.storyline}</p>
          <p class="text-xs text-gray-500">
            Release Date: {movie.date}<br />
            Vote Average: {movie.rating}<br />
            Genres: {movie.genre}
          </p>
        </div>
      </div>
    {/each}
  {:else}
    Still loading
  {/if}
</div>
