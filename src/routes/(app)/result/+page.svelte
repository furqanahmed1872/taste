<script>
  let movies = [
    {
      title: "Kung Fu Hustle",
      poster: "https://images.moviesanywhere.com/6add024917fe526456f0f3e7730c6133/d3ec9846-3601-4b74-ac2e-f37c9eb2c8c4.jpg",
      backgroundposter: "https://static1.srcdn.com/wordpress/wp-content/uploads/2016/09/stephen-chow-kung-fu-hustler.jpg",
      summary:
        "When the hapless Sing and his dim-witted pal Bone try to scam the residents of Pig Sty Alley into thinking they're members of the dreaded Axe Gang, the real gangsters descend on this Shanghai slum to restore their fearsome reputation...",
      genre: ["Action", "Comedy"],
      year: 2004,
      rating: 9.8,
    },
    {
      title: "Inception",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      backgroundposter: "https://images.squarespace-cdn.com/content/v1/60ca4165cdc96644e18adc3c/1629984421972-33L53AA78JBBKIZSY07Y/A5E2E355-B8F6-4909-B6DB-F2187345842E.jpeg",
      summary:
        "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious...",
      genre: ["Sci-Fi", "Thriller"],
      year: 2010,
      rating: 8.8,
    },
    {
      title: "The Dark Knight",
      poster: "https://m.media-amazon.com/images/S/pv-target-images/8753733ac616155963cc440c3cf5367f45d7685b672c5b9c35bc7f182aec17c4.jpg",
      backgroundposter: "https://images4.alphacoders.com/288/thumb-1920-288218.jpg",
      summary:
        "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City...",
      genre: ["Action", "Drama"],
      year: 2008,
      rating: 9.0,
    },
  ];

  let currentIndex = 0;

  function showNextMovie() {
    currentIndex = (currentIndex + 1) % movies.length;
    // Trigger the animation by adding a class to the background
    document.getElementById('background').classList.add('slide-in');
    // Remove the animation class after it completes, to allow it to trigger again
    setTimeout(() => {
      document.getElementById('background').classList.remove('slide-in');
    }, 2000); // Match the duration of the animation
  }
</script>

<style>
  /* Animation for the background sliding from left */
  .slide-in {
    animation: slideInFromLeft 2s ease-in-out;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>

<div id="background" class="fixed inset-0 bg-cover bg-center transition-all" style="background-image: url({movies[currentIndex].backgroundposter});"></div>

<!-- Color Overlay -->
<div class="fixed inset-0 bg-[#0c0303] opacity-90 transition-opacity"></div>

<!-- Main Content -->
<div class="relative z-10 grid text-white h-screen">
  <!-- Main Text -->
  <div class="relative text-4xl z-10 bg-gradient-to-r from-[#fff0] h-fit via-sky-50 font-semibold flex justify-center font-poiret text-black opacity-70 w-full text-center p-4">
    <!-- Centered Logo -->
    <img
      src="../logo.png"
      alt="Logo"
      class="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90"
    />
    <!-- Text -->
    <div class="relative z-10 flex items-center justify-center h-fit">"Uncover your taste"</div>
  </div>

  <div class="bg-[#080D15] opacity-70 h-fit grid grid-cols-4 grid-rows-3 p-4 justify-center items-center my-auto">
    <img src={movies[currentIndex].poster} alt="" class="h-60 w-auto rounded-lg row-span-3 mx-auto">

    <div class="font-poiret text-3xl font-bold col-span-3">{movies[currentIndex].title}</div>
    <div class="font-poiret text-xl font-medium col-span-3">{movies[currentIndex].summary}</div>
    <div class="flex col-span-3">
      <button
        class="z-10 w-fit bg-black opacity-70 m-2 h-fit rounded-xl font-poiret text-2xl text-white text-right flex justify-center items-center p-2"
      >
        <img src="../imdb.png" alt="" class="h-8 w-fit mx-2" />
        <div class="mx-2">{movies[currentIndex].rating}</div>
      </button>
      {#each movies[currentIndex].genre as g}
        <button class="z-10 w-fit bg-white opacity-50 m-2 h-fit p-2 rounded-xl font-poiret text-2xl text-black">{g}</button>
      {/each}
      <button class="z-10 w-fit bg-cyan-900 m-2 h-fit rounded-xl p-2 font-poiret text-2xl text-white">{movies[currentIndex].year}</button>
      <button
        class="z-10 w-fit bg-white mx-5 my-2 h-fit rounded-xl p-2 font-bold font-poiret text-3xl text-black ml-auto"
        on:click={showNextMovie}
      >
        MORE
      </button>
    </div>
  </div>

  <div class="flex w-fit h-fit bg-white p-2 rounded-xl justify-center items-center mx-auto my-auto">
    <button class="rounded-full font-poiret bg-black w-12 h-12 text-lg flex justify-center items-center mx-2">Join</button>
    <div class="text-black font-poiret text-xl">
      You just found your community want to talk to like you <b class="text-red-800">{movies[currentIndex].title}</b>
    </div>
  </div>
</div>
