<script>
  let clickedDiv = null;
  function handleDivClick(divType) {
    clickedDiv = divType;
  }
</script>

<!-- Input field -->
<button
id="movies-poster"
class="h-full md:w-1/5 w-full rounded-xl bg-cover bg-center cursor-pointer transform transition-transform duration-500 ease-in-out"
style="background-image: url('https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UX1000_.jpg');"
on:click={() => handleDivClick('movies')}
>
<div
  class="h-full w-full bg-black rounded-xl text-center flex items-center justify-center font-poiret text-6xl font-bold"
  style="opacity: {clickedDiv === 'movies' ? 100% : 85%}"
>
  Movies
</div>
</button>