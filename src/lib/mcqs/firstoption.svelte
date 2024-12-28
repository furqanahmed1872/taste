<script>
  import { onMount, onDestroy } from "svelte";
  import { filters } from "$lib/store";
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
      class="bg-custom-dark font-poiret h-fit text-3xl p-4 w-fit mx-auto rounded-xl opacity-80 transition-opacity duration-500 ease-in-out"
    >
      Next
    </button>
  {/if}
</div>
