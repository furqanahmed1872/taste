<script>
  import { onMount } from "svelte";

  let isGrid = false; // Tracks layout change
  let clickedDiv = null;

  const movieImages = [
    "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
  ];
  const seriesImages = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50f59dfe-f3de-4253-98ed-41972905ee82/dd6bow4-323638cf-0887-4228-9a06-8094141440c8.jpg",
    "https://resizing.flixster.com/lpJkDxnEFNQT1OWJjnmYfvpAHJ0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI2NjgyOS53ZWJw",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1fde52184551123.6553f66dbce60.jpg",
    "https://www.bram.us/wordpress/wp-content/uploads/2016/10/e06e8043706275.57f99a2e465fb.jpg",
  ];

  let movieIndex = 0;
  let seriesIndex = 0;

  function updatePosters() {
    document.getElementById("movies-poster").style.backgroundImage = `url('${movieImages[movieIndex]}')`;
    document.getElementById("series-poster").style.backgroundImage = `url('${seriesImages[seriesIndex]}')`;
    movieIndex = (movieIndex + 1) % movieImages.length;
    seriesIndex = (seriesIndex + 1) % seriesImages.length;
  }

  function handleDivClick(divType) {
    clickedDiv = divType;
  }

  function handleNext() {
    isGrid = true; // Switch to grid layout
  }

  onMount(() => {
    const intervalId = setInterval(updatePosters, 1000);
    return () => clearInterval(intervalId);
  });
</script>

<style>
  .bg-custom-dark {
    background-color: #051721;
  }
</style>

<!-- Background Image -->
<div class="fixed inset-0 bg-cover bg-center" style="background-image: url('../back.jpg');"></div>

<!-- Color Overlay -->
<div class="fixed inset-0 bg-gradient-to-r from-[#051721] via-black to-[#210505] opacity-95"></div>

<!-- Main Content -->
<div class="relative z-10 text-white h-screen {isGrid ? 'grid grid-cols-2' : 'flex flex-col'}">
  <!-- Main Text -->
  <div class="relative text-4xl bg-gradient-to-r from-[#fff0] font-semibold flex justify-center text-black opacity-70 w-full text-center p-4">
    <img
      src="../logo.png"
      alt="Logo"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90"
    />
    <div class="relative z-10 flex items-center justify-center">
      "Discover Your <b class="text-[#fff0]">---------</b> Movie Taste!"
    </div>
  </div>

  <!-- Posters Section -->
  <div class="w-full flex z-10 justify-center gap-4 my-10 h-full">
    <!-- Movie Poster -->
    <button
      id="movies-poster"
      class="h-full md:w-1/5 w-full rounded-xl bg-cover bg-center cursor-pointer transition-transform duration-500"
      style="background-image: url('https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UX1000_.jpg');"
      on:click={() => handleDivClick('movies')}
    >
      <div
        class="h-full w-full bg-black rounded-xl text-center flex items-center justify-center text-6xl font-bold"
        style="opacity: {clickedDiv === 'movies' ? 1 : 0.6}"
      >
        Movies
      </div>
    </button>

    <!-- Series Poster -->
    <button
      id="series-poster"
      class="h-full md:w-1/5 w-full rounded-xl bg-cover bg-center cursor-pointer transition-transform duration-500"
      style="background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50f59dfe-f3de-4253-98ed-41972905ee82/dd6bow4-323638cf-0887-4228-9a06-8094141440c8.jpg');"
      on:click={() => handleDivClick('series')}
    >
      <div
        class="h-full w-full bg-black rounded-xl text-center flex items-center justify-center text-6xl font-bold"
        style="opacity: {clickedDiv === 'series' ? 1 : 0.6}"
      >
        Series
      </div>
    </button>
  </div>

  <!-- Next Button -->
  {#if clickedDiv}
    <a
     href=""
      class="bg-custom-dark text-3xl p-4 w-fit mx-auto rounded-xl opacity-80 my-4"
      on:click={handleNext}
    >
      Next
    </a>
  {/if}
</div>
