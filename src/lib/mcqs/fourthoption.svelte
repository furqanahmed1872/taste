<script>
  import { onMount, onDestroy } from "svelte";
  import { filters } from "$lib/store";
  export let handleNext;

  // Store clicked genres
  let clickedBars = [];

  // Genre arrays
  let arr4 = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
  ];

  let arr5 = [
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
    "Horror",
    "Doesn't matter",
  ];

  // Handle genre selection
  function handleClick4(bar) {
    if (bar === "Doesn't matter") {
      // Clear all selections and only keep "Doesn't matter"
      clickedBars = ["Doesn't matter"];
    } else {
      if (clickedBars.includes("Doesn't matter")) {
        // Remove "Doesn't matter" when other genres are selected
        clickedBars = [];
      }

      if (clickedBars.includes(bar)) {
        // Remove genre if already selected
        clickedBars = clickedBars.filter((item) => item !== bar);
      } else {
        // Allow up to 5 genres
        if (clickedBars.length >= 5) {
          clickedBars.shift(); // Remove the first one
        }
        clickedBars = [...clickedBars, bar];
      }
    }

    // Update filters and log the changes
    filters.update((currentFilters) => {
      const updatedFilters = { ...currentFilters, genre: clickedBars };
      console.log("Updated Filters:", updatedFilters);
      return updatedFilters;
    });
  }
</script>

<!-- Main Layout -->
<div
  class="grid grid-cols-3 grid-rows-10 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4 mx-auto"
>
  <!-- Genre Options - First Group -->
  <div class="row-span-10 my-4 grid gap-2 overflow-hidden relative">
    {#each arr4 as label}
      <button
        class="animated-bar bg-[#0B4F6C] font-poiret text-xl text-center p-2"
        on:click={() => handleClick4(label)}
        style="
          margin-right: {clickedBars.includes(label) ? '10%' : '0%'};
          margin-left: {clickedBars.includes(label) ? '10%' : '0%'};
          border-radius: {clickedBars.includes(label) ? '0.6rem' : '0.3rem'};
          background-color:{clickedBars.includes(label) ? 'white' : '#0B4F6C'};
          color:{clickedBars.includes(label) ? '#0B4F6C' : 'white'}
        "
      >
        {label}
      </button>
    {/each}
  </div>

  <!-- Black Box (Heading) -->
  <div
    class="row-span-10 bg-white opacity-70 text-black rounded-3xl font-poiret text-4xl font-semibold justify-center items-center grid p-8 text-center"
  >
    “Select Genre”

    <!-- NEXT Button -->
    <div class="mx-auto m-4">
      {#if clickedBars.length > 0}
      <button 
      on:click={handleNext}
      class="relative inset-0 inline-flex items-center justify-center p-6 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[#0B4F6C] group-hover:translate-x-0 ease">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Next</span>
        <span class="relative invisible">Next</span>
      </button>
      
      {/if}
    </div>
  </div>

  <!-- Genre Options - Second Group -->
  <div class="row-span-10 my-4 grid gap-2 overflow-hidden relative">
    {#each arr5 as label}
      <button
        class="animated-bar bg-[#0B4F6C] font-poiret text-xl text-center p-2"
        on:click={() => handleClick4(label)}
        style="
          margin-right: {clickedBars.includes(label) ? '10%' : '0%'};
          margin-left: {clickedBars.includes(label) ? '10%' : '0%'};
          border-radius: {clickedBars.includes(label) ? '0.6rem' : '0.3rem'};
          background-color:{clickedBars.includes(label) ? 'white' : '#0B4F6C'};
          color:{clickedBars.includes(label) ? '#0B4F6C' : 'white'}
        "
      >
        {label}
      </button>
    {/each}
  </div>
</div>
<div></div>
