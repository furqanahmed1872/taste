<script>
  import { arrone, arrtwo } from './data.js';

  let clickedBars = []; // Array to store selected bars

  function handleClick(bar) {
    if (bar === "Doesn't matter") {
      if (!clickedBars.includes(bar)) {
        clickedBars = [bar];
      }
    } else {
      if (clickedBars.includes("Doesn't matter")) {
        clickedBars = [bar];
      } else {
        if (clickedBars.includes(bar)) {
          clickedBars = clickedBars.filter((item) => item !== bar);
        } else {
          if (clickedBars.length >= 3) {
            clickedBars.shift();
          }
          clickedBars = [...clickedBars, bar];
        }
      }
    }
  }
</script>



<div
  class="grid grid-cols-3 grid-rows-10 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4 mx-auto"
>
  <div class="row-span-10 my-4 grid gap-2 overflow-hidden relative">
    {#each arr as label, i}
      <button
        class="animated-bar bg-[#0B4F6C] font-poiret text-xl text-center p-2"
        on:click={() => handleClick(label)}
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
  </div>

  <!-- Container for Red Bars -->

  <div class="row-span-10 my-4 grid gap-2 overflow-hidden relative">
    <!-- Animated Bars -->
    {#each arrtwo as label, i}
      <button
        class="animated-bar bg-[#0B4F6C] font-poiret text-xl text-center p-2"
        on:click={() => handleClick(label)}
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
