<script>
  import Choice from "$lib/forms/choice/choice.svelte";
 
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



</style>


<div class="fixed inset-0 bg-cover bg-center " style="background-image: url('../back.jpg');"></div>

<!-- Color Overlay -->
<div class="fixed inset-0 bg-gradient-to-r from-[#051721] via-black to-[#210505] opacity-95 transition-opacity  "></div>

<!-- Main Content -->
<div class="relative z-10 text-white h-screen {isGrid ? 'grid ' : 'flex flex-col'}">
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
      "Discover Your <b class="text-[#fff0]">---------</b>Movie Taste!"
    </div>
  </div>
  
<Choice />

</div>