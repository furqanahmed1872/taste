<script>
  import { onMount } from "svelte";

  export let data;
  let { movies, movies2, movies3 } = data;

  let isHovered = false;
  const speed = 1; // Scrolling Speed

  let filteredMovies = movies?.filter(
    (movie) => movie.background || movie.poster
  );

  let filteredMovies2 = movies2?.filter(
    (movie) => movie.background || movie.poster
  );

  onMount(() => {
    const marquees = document.querySelectorAll(".marquee-inner");

    marquees.forEach((marquee) => {
      const marqueeContent = marquee.innerHTML;
      marquee.innerHTML += marqueeContent;

      let scrollAmount = 0;

      const startScrolling = () => {
        if (!isHovered) {
          scrollAmount -= speed;
          if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
            scrollAmount = 0;
          }
          marquee.style.transform = `translateX(${scrollAmount}px)`;
        }
        requestAnimationFrame(startScrolling);
      };

      marquee.addEventListener("mouseover", () => (isHovered = true));
      marquee.addEventListener("mouseout", () => (isHovered = false));

      startScrolling();
    });
  });
</script>

<div class="relative w-full overflow-hidden">
  <div
    class="fixed inset-0 bg-cover bg-black/50 bg-center"
    style="background-image: url('../back.jpg');"
  ></div>

  <div
    class="fixed inset-0 bg-gradient-to-r from-[#051721] via-black to-[#210505] opacity-95 transition-opacity"
  ></div>

  <div class="relative z-10 flex flex-col items-center text-white">
    <div class="flex justify-center my-2">
      <img src="../logo.png" alt="Logo" class="h-24 w-24" />
    </div>

    <div
      class="text-4xl font-medium text-black font-poiret opacity-30 bg-gradient-to-r from-[#2a0b0b]/5 from-0% to-[#01112c]/5 to-100% via-white w-full text-center p-1 mb-2"
    >
      "Upcoming Movie & Series"
    </div>

    <div
      class="text-4xl font-medium text-black font-poiret opacity-30 bg-gradient-to-r from-[#2a0b0b]/5 from-0% to-[#01112c]/5 to-100% via-white w-40 text-center p-1"
    >
      2025
    </div>

    <div
      class="marquee-inner w-full flex items-center gap-2 p-2 transition-transform will-change-transform"
    >
      {#if filteredMovies}
        {#each filteredMovies as movie}
          <div
            class="relative w-1/5 h-48 flex-shrink-0 bg-gray-800 shadow-lg ease-in-out duration-200 hover:scale-110 overflow-hidden group"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.background || movie.poster}`}
              alt={movie.title}
              class="absolute inset-0 w-full h-full object-cover z-0"
            />
            <!-- Black overlay that appears on hover -->
            <div
              class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 z-10 transition-opacity duration-300"
            ></div>
            <!-- Content overlay -->
            <div
              class="absolute inset-0 z-20 flex flex-col justify-end p-4 text-white"
            >
              <h2 class="text-lg font-semibold mb-2">{movie.title}</h2>
              <p class="text-xs text-gray-300">
                Release Date: {movie.date}<br />
                Vote Average: {movie.rating}<br />
                Genres: {movie.genre}
              </p>
            </div>
          </div>
        {/each}
      {:else}
        Still loading
      {/if}
    </div>

    <div
      class="text-4xl font-medium text-black font-poiret opacity-30 bg-gradient-to-r from-[#2a0b0b]/5 from-0% to-[#01112c]/5 to-100% via-white w-40 text-center p-1"
    >
      2026
    </div>

    <div
      class="marquee-inner w-full flex items-center gap-2 p-2 transition-transform will-change-transform"
    >
      {#if filteredMovies2}
        {#each filteredMovies2 as movie}
          <div
            class="relative w-1/5 h-48 flex-shrink-0 bg-gray-800 shadow-lg ease-in-out duration-200 hover:scale-110 overflow-hidden group"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.background || movie.poster}`}
              alt={movie.title}
              class="absolute inset-0 w-full h-full object-cover z-0"
            />
            <!-- Black overlay that appears on hover -->
            <div
              class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 z-10 transition-opacity duration-300"
            ></div>
            <!-- Content overlay -->
            <div
              class="absolute inset-0 z-20 flex flex-col justify-end p-4 text-white"
            >
              <h2 class="text-lg font-semibold mb-2">{movie.title}</h2>
              <p class="text-xs text-gray-300">
                Release Date: {movie.date}<br />
                Vote Average: {movie.rating}<br />
                Genres: {movie.genre}
              </p>
            </div>
          </div>
        {/each}
      {:else}
        Still loading
      {/if}
    </div>
  </div>
</div>
