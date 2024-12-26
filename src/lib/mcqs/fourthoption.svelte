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
<div class="grid grid-cols-3 grid-rows-10 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4 mx-auto">

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
          class="bg-custom-dark inset-0 opacity-100 w-fit h-fit font-poiret text-2xl p-4 rounded-lg hover:opacity-100"
        >
          NEXT
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