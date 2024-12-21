<script>
  import { onMount, onDestroy } from "svelte";
  import { filters } from "$lib/store";
  export let handleNext;

  let movieImages = [
   "https://i.pinimg.com/736x/25/2e/b7/252eb7e60c6e3873bd808ed472bfa930.jpg",
   "https://i.pinimg.com/736x/12/5b/8d/125b8d97e03823163e879432d07ad395.jpg",
"https://i.pinimg.com/736x/85/0a/09/850a091bdd4691362e35b028acfec0d9.jpg",
"https://i.pinimg.com/736x/54/b1/06/54b10688425a69faaf840b4bc7ae66a7.jpg",
  ];
  let seriesImages = [
    "https://i.pinimg.com/736x/fe/f4/18/fef4188d791a37910793c4f6b43f7f73.jpg",
  "https://i.pinimg.com/736x/bd/55/0f/bd550fa86797380e204f79587ce1d791.jpg",
  "https://i.pinimg.com/736x/4e/07/19/4e071923f62da4c48f09f2f482c87d8c.jpg",
  "https://i.pinimg.com/736x/af/bb/53/afbb53586baebacfc403ca12b8f0d88b.jpg"
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
