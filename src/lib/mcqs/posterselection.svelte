<script>
  import { onMount, onDestroy } from "svelte";
  import { filters } from "$lib/stores/store";
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
on:click={handleNext}
class="relative inline-flex items-center justify-center p-6 px-6 py-3 w-fit mx-auto my-3 overflow-hidden font-medium text-rose-900 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#0B4F6C] group-hover:translate-x-0 ease">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Next</span>
  <span class="relative invisible">Next</span>
</button>
{/if}
