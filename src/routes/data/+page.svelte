<script>
    import { onMount } from 'svelte';
    import { moviesStore } from './store'; // Adjust the path as needed
    import { get } from 'svelte/store';

    onMount(async () => {
        let allMovies = get(moviesStore); // Get current value of the store

        for (let i = 1; i < 2; i++) {
            const res = await fetch(`/api/tmdb?year=1990&page=${i}`);
            if (res.ok) {
                const data = await res.json();
                // Update the store with new data
                moviesStore.update((movies) => [...movies, ...data]);
            } else {
                console.error('Failed to fetch:', await res.json());
            }
        }
        console.log(allMovies);
    });
</script>

<h1 class="text-3xl font-semibold text-center my-8">Movie List</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#if $moviesStore.length> 0}
        
    {#each $moviesStore as movie}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={movie.poster_path} alt={movie.title} class="w-full h-auto" />
            <div class="p-4">
                <h2 class="text-xl font-semibold mb-2">{movie.title}</h2>
                <p class="text-sm text-gray-600 mb-4">{movie.overview}</p>
                <p class="text-xs text-gray-500">
                    Release Date: {movie.release_date}<br />
                    Vote Average: {movie.vote_average}
                </p>
            </div>
        </div>
    {/each}
  {:else}
  Still loading
    {/if}
</div>