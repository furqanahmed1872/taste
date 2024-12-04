<script>
  import { page } from "$app/stores";

  export let data;
  let { movies } = data;
  let movieName = $page.params.slug;

  let movie = movies.find((m) => (m.title = movieName));
</script>

<div
  href="/movies/{movie.title}"
  class="bg-white rounded-lg shadow-lg overflow-hidden"
>
  <img
    src={`https://image.tmdb.org/t/p/w500${movie.background}`}
    alt={movie.title}
    class="w-full h-auto"
  />
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-2">{movie.title}</h2>
    <p class="text-sm text-gray-600 mb-4">{movie.storyline}</p>
    <p class="text-xs text-gray-500">
      Release Date: {movie.date}<br />
      Vote Average: {movie.rating}<br />
      Genres: {movie.genre}
    </p>
  </div>
</div>
