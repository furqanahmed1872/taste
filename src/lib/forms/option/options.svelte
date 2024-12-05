<script>
 
 import { arr} from './data.js';
 let clickedBar = "";

  

  function handleClick(bar) {
    clickedBar = bar;
  }
</script>

<div
  class="grid grid-cols-2 grid-rows-6 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4 mx-auto h-fit"
>
  <!-- Black Box -->
  <div
    class="relative row-span-10 bg-white opacity-50 text-black rounded-3xl font-poiret text-4xl font-semibold justify-center items-center grid p-8 text-center overflow-hidden"
  >
    <!-- Text -->
    <div class="relative z-10 flex flex-col items-center">
      “Select Time period for Movies”
    </div>
  </div>

  <!-- Sliding Bars -->
  <div class="row-span-6 my-7 grid gap-4 overflow-hidden relative">
    {#each arr as label, i}
      <button
        class="sliding-bar bg-[#0B4F6C] font-poiret text-2xl text-center p-3 rounded-e-xl bg-opacity-50 hover:bg-opacity-100"
        on:click={() => handleClick(label)}
        style="width: {clickedBar === label ? '100%' : '85%'}
      
          "
      >
        {label}
      </button>
    {/each}
  </div>
</div>
