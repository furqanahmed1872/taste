<script>
  // Movie data array
  let movies = [
      {
          title: "Harry Potter and the Deathly Hallows: Part 2",
          overview:
              "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
          release_date: "2011-07-12",
          vote_average: 8.1,
          poster_path: "https://image.tmdb.org/t/p/w300/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
      },
      // Add more movies here
  ];
</script>

<h1 class="text-3xl font-semibold text-center my-8">Movie List</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each movies as movie}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={movie.poster_path} alt={movie.title} class="w-full h-auto" />
          <div class="p-4">
              <h2 class="text-xl font-semibold mb-2">{movie.title}</h2>
              <p class="text-sm text-black mb-4">{movie.overview}</p>
              <p class="text-xs text-black-500">
                  Release Date: {movie.release_date}<br />
                  Vote Average: {movie.vote_average}
              </p>
          </div>
      </div>
  {/each}
</div>
