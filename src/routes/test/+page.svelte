<script>
  let currentIndex = 0;
  let animateTitle = false; // Controls animation toggle
  
  // Movies data
  let movies = [
    {
      title: "Kung Fu Hustle",
      poster:
        "https://images.moviesanywhere.com/6add024917fe526456f0f3e7730c6133/d3ec9846-3601-4b74-ac2e-f37c9eb2c8c4.jpg",
      summary:
        "When the hapless Sing and his dim-witted pal Bone try to scam the residents of Pig Sty Alley into thinking they're members of the dreaded Axe Gang...",
      genre: ["Action", "Comedy"],
      year: 2004,
      rating: 9.8,
    },
    {
      title: "Inception",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      summary:
        "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams...",
      genre: ["Sci-Fi", "Thriller"],
      year: 2010,
      rating: 8.8,
    },
    {
      title: "The Dark Knight",
      poster:
        "https://m.media-amazon.com/images/S/pv-target-images/8753733ac616155963cc440c3cf5367f45d7685b672c5b9c35bc7f182aec17c4.jpg",
      summary:
        "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City...",
      genre: ["Action", "Drama"],
      year: 2008,
      rating: 9.0,
    },
  ];

  // Function to change movie index and trigger animation
  function NextMovie() {
    currentIndex = (currentIndex + 1) % movies.length;
    triggerAnimation();
  }

  function PreviousMovie() {
    currentIndex = (currentIndex - 1 + movies.length) % movies.length;
    triggerAnimation();
  }

  // Trigger the animation by toggling the class
  function triggerAnimation() {
    animateTitle = false; // Reset animation
    setTimeout(() => {
      animateTitle = true; // Restart animation
    }, 10); // Small delay to ensure CSS re-renders
  }
</script>

{#if direction === "right"}
  <div
    class="bg-poster transition-all"
    style="background-image: url({movies[currentIndex].backgroundposter});"
    transition:fly|local={{ x: 1000 }}
  ></div>
{:else if direction === "left"}
  <div
    class="bg-poster transition-all"
    style="background-image: url({movies[currentIndex].backgroundposter});"
    transition:fly|local={{ x: -1000 }}
  ></div>
{:else}
  <div
    class="bg-poster"
    style="background-image: url({movies[currentIndex].backgroundposter});"
  ></div>
{/if}

<div
  class="fixed inset-0 bg-gradient-to-r from-[#000000] via-[#001e30]/85 to-[#000000] "
></div>

<div class="relative z-10 grid text-white h-screen">
  <div
    class="relative text-4xl z-10 bg-gradient-to-r from-[#fff0] h-fit via-sky-50 font-semibold flex justify-center font-poiret text-black opacity-70 w-full text-center p-4"
  >
    <img
      src="../logo.png"
      alt="Logo"
      class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90"
    />
    <div class="relative z-10 flex items-center justify-center h-fit">
      <div class="content__container">
        <p class="content__container__text">
          Uncover
        </p>
        
        <ul class="content__container__list">
          <li class="content__container__list__item">Your Taste</li>
          <li class="content__container__list__item">Movies</li>
          <li class="content__container__list__item">Series</li>
          <li class="content__container__list__item"> <b class="text-red-950"> JOY AND FUN</b> </li>
        </ul>
      </div>
    </div>
  </div>

  <div
    class="grid grid-cols-7 grid-rows-3 h-fit my-auto justify-center items-center"
  >
    <button on:click={PreviousMovie} class="row-span-3 rotate-180 w-24 mx-auto">
      <img src="./right-arrow.png" alt="" />
    </button>

    <div
      class="bg-white z-10 inset-0 opacity-80 col-span-5 row-span-3 grid grid-rows-3 grid-cols-5 p-4 justify-center items-center my-auto rounded-lg"
    >
      <img
        src={movies[currentIndex].poster}
        alt=""
        class="h-60 w-auto rounded-lg mx-auto row-span-3"
      />
      <div class="font-poiret text-4xl font-bold col-span-4 text-black ok animated-text">
        {movies[currentIndex].title}
      </div>
      <div class="font-poiret text-xl font-medium col-span-4 text-black">
        {movies[currentIndex].summary}
      </div>
      <div class="flex col-span-4">
       

        <button  class="px-2 py-2 w-fit flex gap-4 mx-2 h-fit my-auto relative rounded group overflow-hidden font-medium bg-purple-50 text-black ">
          <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all  rounded duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-95 "></span>
          <img src="../imdb.png" alt="" class="h-8 w-fit " />
          <span class="relative group-hover:text-white font-poiret text-2xl">{movies[currentIndex].rating}</span>
        </button>
        
        {#each movies[currentIndex].genre as g}
        <button  class="relative w-fit h-fit my-auto mx-2 inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-rose-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">{g}</span>
        </button>
        {/each}

        <button  class="relative inline-flex w-fit h-fit items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span class="relative">{movies[currentIndex].year}</span>
        </button>
      </div>
    </div>

    <button on:click={NextMovie} class="row-span-3 w-24 mx-auto">
      <img src="./right-arrow.png" alt="" />
    </button>
  </div>

  <div
    class="flex w-fit h-fit bg-white p-2 rounded-xl justify-center items-center mx-auto my-auto"
  >
    <button
      class="rounded-full font-poiret bg-black w-12 h-12 text-lg flex justify-center items-center mx-2"
      >Join</button
    >
    <div class="text-black font-poiret text-xl">
      You just found your community want to talk to like you <b
        class="text-red-800">{movies[currentIndex].title}</b
      >
    </div>
  </div>
</div>

<style>
  .bg-poster {
    position: fixed;
    inset: 0;
    background-size: cover;
    background-position: center;
  }
</style>
