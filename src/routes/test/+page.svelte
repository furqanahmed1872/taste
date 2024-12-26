<script>
  let movies = [
    { title: 'Deadpool & Wolverine', releaseDate: '2024-07-26', poster: 'https://i.pinimg.com/736x/b3/ee/52/b3ee52ed41150dac43e8252192b0fb88.jpg' },
    { title: 'Kraven the Hunter', releaseDate: '2024-08-30', poster: 'https://i.pinimg.com/736x/c3/4c/5f/c34c5feeb717b242b63e542ac4f7d9f0.jpg' },
    { title: 'Captain America: Brave New World', releaseDate: '2024-11-08', poster: 'https://i.pinimg.com/736x/a3/24/5b/a3245b50ba1c680b4119a4e2391c7e97.jpg' },
    { title: 'Daredevil Bornagain', releaseDate: '2025-12-19', poster: 'https://i.pinimg.com/736x/be/66/83/be66834187962edb75c9bd1c8dd536ca.jpg' },
    { title: 'Deadpool & Wolverine', releaseDate: '2024-07-26', poster: 'https://i.pinimg.com/736x/b3/ee/52/b3ee52ed41150dac43e8252192b0fb88.jpg' },
    { title: 'Kraven the Hunter', releaseDate: '2024-08-30', poster: 'https://i.pinimg.com/736x/c3/4c/5f/c34c5feeb717b242b63e542ac4f7d9f0.jpg' }
  ];
</script>

<div class="fixed inset-0 bg-cover bg-center" style="background-image: url('../back.jpg');"></div>

<!-- Color Overlay -->
<div class="fixed inset-0 bg-gradient-to-r from-[#000000] via-[#140000] to-[#000000] opacity-95 transition-opacity"></div>

<!-- Main Content -->
<div class="relative z-10 text-white h-screen flex flex-col">
  <!-- Header Section -->
  <div class="relative text-4xl z-10 bg-gradient-to-r from-[#fff0] h-fit via-[#fff] font-semibold flex justify-center font-poiret text-black opacity-70 w-full text-center p-4">
    <a href="/">
      <img src="../logo.png" alt="Logo" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90" />
    </a>
    <div class="relative z-10 flex items-center justify-center">
      <b style="color: #fff0; user-select: none;">---------</b> 
    </div>
  </div>

  <main class="p-8 relative">
    <h1 class="text-5xl  mb-10 text-center uppercase ">Upcoming Movies</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
      {#each movies as movie}
        <div class="group relative bg-black hover: rounded-xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:ring-4 hover:ring-lightblue">
          <div class="overflow-hidden rounded-t-xl">
            <!-- Movie Poster -->
            <img src={movie.poster} alt={movie.title} class="w-full aspect-[2/3] object-cover group-hover:opacity-100 transition-opacity duration-300">
          </div>
          <!-- Title hidden on hover -->
          <div class="p-4 text-center">
            <h2 class="text-white font-poiret font-bold text-lg tracking-wide  transition-colors">{movie.title}</h2>
          </div>
          <!-- Show button on hover -->
          <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button class="px-4 py-2 bg-red-900 text-black text-sm font-bold rounded-md shadow-md transition-colors">View Details</button>
          </div>
        </div>
      {/each}
    </div>
  </main>
</div>
