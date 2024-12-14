<script>
    
 
  </script>
  

<div class="w-full flex  z-10 justify-center gap-4 my-10 h-full ">

    <button
      id="movies-poster"
      class="h-full md:w-1/5 w-full rounded-xl bg-cover  bg-center cursor-pointer transform transition-transform duration-500 ease-in-out"
      style="background-image: url('https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UX1000_.jpg');"
      on:click={() => handleDivClick('movies')}
    >
      <div
        class="h-full w-full bg-black rounded-xl text-center flex items-center justify-center font-poiret text-6xl font-bold"
        style="opacity: {clickedDiv === 'movies' ? 1 : 0.6}"
      >
        Movies
      </div>
    </button>
  

    <button
      id="series-poster"
      class="h-full md:w-1/5 w-full rounded-xl bg-cover bg-center cursor-pointer transform transition-transform duration-500 ease-in-out"
      style="background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50f59dfe-f3de-4253-98ed-41972905ee82/dd6bow4-323638cf-0887-4228-9a06-8094141440c8.jpg');"
      on:click={() => handleDivClick('series')}
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
  <a
   href=""
    class="bg-custom-dark text-3xl p-4 w-fit mx-auto rounded-xl opacity-80 my-4"
    on:click={handleNext}
  >
    Next
  </a>
{/if}