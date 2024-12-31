<script>
  import { onMount, onDestroy } from "svelte";
  import { filters } from "$lib/stores/store";
  export let handleNext;
  let firstoption = "";

  let arr = [
    "Released 5 years ago",
    "Released 10 years ago",
    "Released 15 years ago",
    "Released 20 years ago",
    "Doesn't matter",
  ];

  function handleClick(bar) {
    firstoption = bar;
    let year = parseInt(bar.match(/\d+/)[0], 10);
    if(!year) year = 2000
    filters.update((currentFilters) => ({
      ...currentFilters,
      year: year,
    }));
    console.log($filters);
  }
</script>

<div
  class="grid grid-cols-2 grid-rows-6 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4 mx-auto h-fit"
>
  <div
    class="relative row-span-10 bg-white opacity-70 text-black rounded-3xl font-poiret text-4xl font-semibold justify-center items-center grid p-8 text-center overflow-hidden"
  >
    <div class="relative z-10 flex flex-col items-center">
      “Select Time period for Movies”
    </div>
  </div>

  <div class="row-span-6 my-7 grid gap-4 overflow-hidden relative">
    {#each arr as label, i}
      <button
        class="sliding-bar bg-[#0B4F6C] font-poiret text-2xl text-center p-3 rounded-e-xl ease-in-out hover:scale-125"
        on:click={() => handleClick(label)}
        style="
            width: {firstoption === label ? '100%' : '85%'};
            background-color: {firstoption === label ? 'white' : '#0B4F6C'};
            color: {firstoption === label ? '#0B4F6C' : 'white'};
          "
      >
        {label}
      </button>
    {/each} 
  </div>
</div>

<div class="mx-auto">
  {#if firstoption}
  <button 
  on:click={handleNext}
  class="relative inline-flex items-center justify-center p-6 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#0B4F6C] group-hover:translate-x-0 ease">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Next</span>
    <span class="relative invisible">Next</span>
  </button>
  
  {/if}
</div>
