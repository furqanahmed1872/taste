<script>
  import { onMount, onDestroy } from "svelte";
  import { filters } from "$lib/store";
  export let handleNext;

  let movieImages = [
    "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmU2ZS00ZjQ4LWE5MTQtZDRjN2Q0ZWM1YzJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  ];
  let seriesImages = [
    "https://preview.redd.it/drd9eqknks481.jpg?width=1080&crop=smart&auto=webp&s=00776b18b0215c23db02ed7392ec7f7a52ab3c01",
    "https://m.media-amazon.com/images/M/MV5BMzA5NjI2ZjgtZjg2YS00NjlkLTk3OGUtY2FmZGRiOTI4NjEwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
  ];

  let movieIndex = 0;
  let seriesIndex = 0;
  let intervalId;

  let clickedDiv = null;

  function handleDivClick(divType) {
    clickedDiv = divType;
    filters.update((currentFilters) => ({
      ...currentFilters,
      type: divType,
    }));
    console.log($filters);
  }

  function updatePosters() {
    movieIndex = (movieIndex + 1) % movieImages.length;
    seriesIndex = (seriesIndex + 1) % seriesImages.length;
  }

  onMount(() => {
    intervalId = setInterval(updatePosters, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="w-full flex z-10 justify-center gap-4 my-10 h-full">
  <!-- Movies Poster -->
  <button
    id="movies-poster"
    class="h-full md:w-1/5 w-full rounded-xl bg-cover bg-center cursor-pointer transform transition-transform duration-500 ease-in-out"
    style="background-image: url('{movieImages[movieIndex]}');"
    on:click={() => 
      handleDivClick("movies")
     }
  >
    <div
      class="h-full w-full bg-black rounded-xl text-center flex items-center justify-center font-poiret text-6xl font-bold"
      style="opacity: {clickedDiv === 'movies' ? 1 : 0.6}"
    >
      Movies
    </div>
  </button>

  <!-- Series Poster -->
  <button
    id="series-poster"
    class="h-full md:w-1/5 w-full rounded-xl bg-cover bg-center cursor-pointer transform transition-transform duration-500 ease-in-out"
    style="background-image: url('{seriesImages[seriesIndex]}');"
    on:click={() => 
      handleDivClick("series")
     }
  >
    <div
      class="h-full w-full bg-black rounded-xl text-center flex items-center justify-center font-poiret text-6xl font-bold"
      style="opacity: {clickedDiv === 'series' ? 1 : 0.6}"
    >
      Series
    </div>
  </button>
</div>

{#if clickedDiv}
  <button
    class="bg-custom-dark text-3xl p-4 w-fit mx-auto rounded-xl opacity-80 my-4"
    on:click={handleNext}
  >
    Next
  </button>
{/if}
