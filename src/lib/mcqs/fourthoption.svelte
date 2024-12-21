<script>
             import { onMount, onDestroy } from "svelte";
  import { filters } from "$lib/store";
  export let handleNext;

  
  let clickedBars = [];

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

  function handleClick4(bar) {
    if (bar === "Doesn't matter") {
      if (!clickedBars.includes(bar)) {
        // If "Doesn't matter" is selected and not already in the array, add it
        clickedBars = [bar];
      }
    } else {
      if (clickedBars.includes("Doesn't matter")) {
        // If "Doesn't matter" is already selected, remove it when selecting another option
        clickedBars = [bar];
      } else {
        if (clickedBars.includes(bar)) {
          // If the bar is already selected, remove it
          clickedBars = clickedBars.filter((item) => item !== bar);
        } else {
          // If there are already 5 items, remove the first item before adding the new one
          if (clickedBars.length >= 5) {
            clickedBars.shift();
          }
          clickedBars = [...clickedBars, bar];
        }
      }
    }
    filters.update((currentFilters) => ({
      ...currentFilters,
      genre: bar,
    }));
    console.log($filters);
  }
</script>

<div
class="grid grid-cols-3 grid-rows-10 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4 mx-auto"
>
<div class="row-span-10 my-4 grid gap-2 overflow-hidden relative">
  {#each arr4 as label, i}
    <button
      class="animated-bar bg-[#0B4F6C] font-poiret text-xl text-center p-2"
      on:click={() => handleClick4(label)}
      style="
    margin-right: {clickedBars.includes(label) ? '10%' : '0%'};
      margin-left: {clickedBars.includes(label) ? '10%' : '0%'};
    border-top-left-radius: {clickedBars.includes(label)
        ? '0.6rem'
        : '0.3rem'};
    border-bottom-left-radius: {clickedBars.includes(label)
        ? '0.6rem'
        : '0.3rem'};
    border-top-right-radius: {clickedBars.includes(label)
        ? '0.6rem'
        : '0rem'};
    border-bottom-right-radius: {clickedBars.includes(label)
        ? '0.6rem'
        : '0rem'};
   
    background-color:{clickedBars.includes(label) ? 'white' : '#0B4F6C'};
    color:{clickedBars.includes(label) ? '#0B4F6C' : 'white'}
   
    "
    >
      {label}
    </button>
  {/each}
</div>

<!-- Black Box -->
<div
  class="row-span-10 bg-white opacity-70 text-black rounded-3xl font-poiret text-4xl font-semibold justify-center items-center grid p-8 text-center"
>
  “Select Genre”

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

<!-- Container for Red Bars -->

<div class="row-span-10 my-4 grid gap-2 overflow-hidden relative">
  <!-- Animated Bars -->
  {#each arr5 as label, i}
    <button
      class="animated-bar bg-[#0B4F6C] font-poiret text-xl text-center p-2"
      on:click={() => handleClick4(label)}
      style="
    margin-right: {clickedBars.includes(label) ? '10%' : '0%'};
      margin-left: {clickedBars.includes(label) ? '10%' : '0%'};
    border-top-left-radius: {clickedBars.includes(label)
        ? '0.6rem'
        : '0rem'};
    border-bottom-left-radius: {clickedBars.includes(label)
        ? '0.6rem'
        : '0rem'};
    border-top-right-radius: {clickedBars.includes(label)
        ? '0.6rem'
        : '0.3rem'};
    border-bottom-right-radius: {clickedBars.includes(label)
        ? '0.6rem'
        : '0.3rem'};
    
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