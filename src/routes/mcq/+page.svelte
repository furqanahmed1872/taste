<script>
  import { onMount } from "svelte";

  const movieImages = [
    "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
  ];
  const seriesImages = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50f59dfe-f3de-4253-98ed-41972905ee82/dd6bow4-323638cf-0887-4228-9a06-8094141440c8.jpg/v1/fill/w_734,h_1088,q_70,strp/daredevil___series__final_season____poster_by_omrkse10_dd6bow4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjUwMCIsInBhdGgiOiJcL2ZcLzUwZjU5ZGZlLWYzZGUtNDI1My05OGVkLTQxOTcyOTA1ZWU4MlwvZGQ2Ym93NC0zMjM2MzhjZi0wODg3LTQyMjgtOWEwNi04MDk0MTQxNDQwYzguanBnIiwid2lkdGgiOiI8PTE2ODgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8Lahrw8C-nEVLdsRuNJ4cxg-rmHkPL1uvrKKaW8IdGU",
    "https://resizing.flixster.com/lpJkDxnEFNQT1OWJjnmYfvpAHJ0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI2NjgyOS53ZWJw",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1fde52184551123.6553f66dbce60.jpg",
    "https://www.bram.us/wordpress/wp-content/uploads/2016/10/e06e8043706275.57f99a2e465fb.jpg",
    "https://postercinema.eu/cdn/shop/files/better-call-saul_eigg6itp.jpg?v=1706690442",
    "https://cdn.europosters.eu/image/750/posters/the-boys-sunburst-i101099.jpg",
  ];

  let movieIndex = 0;
  let seriesIndex = 0;

  let clickedDiv = null;

  function updatePosters() {
    const moviePoster = document.getElementById("movies-poster");
    const seriesPoster = document.getElementById("series-poster");

    moviePoster.style.backgroundImage = `url('${movieImages[movieIndex]}')`;
    seriesPoster.style.backgroundImage = `url('${seriesImages[seriesIndex]}')`;

    movieIndex = (movieIndex + 1) % movieImages.length;
    seriesIndex = (seriesIndex + 1) % seriesImages.length;
  }

  function handleDivClick(divType) {
    clickedDiv = divType;
  }

  onMount(() => {
    const intervalId = setInterval(updatePosters, 1000);
    return () => clearInterval(intervalId);
  });
</script>


<style>



</style>


<div class="fixed inset-0 bg-cover bg-center " style="background-image: url('../back.jpg');"></div>

<!-- Color Overlay -->
<div class="fixed inset-0 bg-gradient-to-r from-[#051721] via-black to-[#210505] opacity-95 transition-opacity  "></div>

<!-- Main Content -->
<div class="relative z-10 flex flex-col text-white h-screen ">
  <!-- Logo -->


  <!-- Main Text -->
  <div class="relative  text-4xl z-10 bg-gradient-to-r from-[#fff0] h-fit via-sky-50 font-semibold flex justify-center font-poiret text-black opacity-70 w-full text-center p-4">
    <!-- Centered Logo -->
    <img
      src="../logo.png"
      alt="Logo"
      class="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90"
    />
    <!-- Text -->
    <div class="relative z-10 flex items-center justify-center">
      "Discover Yo <b class="text-[#fff0]">---------</b>Movie Taste!"
    </div>
  </div>
  

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
  
    <!-- Series -->
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
    href="/mcq/1"
    class="bg-custom-dark font-poiret text-3xl  p-4 w-fit mx-auto rounded-xl opacity-80 my-4 transition-opacity duration-500 ease-in-out">
      Next
    </a>
  {/if} 

</div>