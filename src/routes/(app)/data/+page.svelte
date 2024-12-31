<script>
  export let data;
  let { IMDBmovies } = data;
</script>

<h1 class="text-3xl font-semibold text-center my-8">Movie List</h1>

<div class="grid grid-cols-6 gap-6">
  {#if IMDBmovies}
    {#each IMDBmovies as movie}
      <a
        href="/movies/{movie.title}"
        class="bg-white rounded-lg shadow-lg overflow-hidden ease-in-out hover:scale-105"
      >
        <img
          src={movie.poster}
          alt={movie.title}
          class="w-full h-auto"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{movie.title}</h2>
          <!-- <p class="text-sm text-gray-600 mb-4">{movie.storyline}</p> -->
          <p class="text-xs text-gray-500">
            Release Date: {movie.date}<br />
            rating: {movie.rating}<br />
            Genres: {movie.genre}
          </p>
        </div>
      </a>
    {/each}
  {:else}
    Still loading
  {/if}
</div>
