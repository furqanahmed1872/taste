<script>
  import { goto } from "$app/navigation";
  import { fly } from "svelte/transition";

  export let data;
  let { movies } = data;
  console.log(movies);

  let currentIndex = 0;
  let direction = "";
  let transitioning = false;
  let animateTitle = false;

  function NextMovie() {
    if (!transitioning) {
      transitioning = true;
      direction = "left";
      currentIndex = (currentIndex + 1) % movies.length;
      triggerAnimation();
    }
  }

  function PreviousMovie() {
    if (!transitioning) {
      transitioning = true;
      direction = "right";
      currentIndex = (currentIndex - 1 + movies.length) % movies.length;
      triggerAnimation();
    }
  }

  function triggerAnimation() {
    animateTitle = false; // Reset animation
    setTimeout(() => {
      animateTitle = true; // Restart animation
    }, 10); // Small delay to ensure CSS re-renders
  }

  $: {
    // Once direction changes, reset it after the transition
    if (transitioning) {
      setTimeout(() => {
        direction = "";
        transitioning = false;
      }, 300); // Adjust duration to match transition speed
    }
  }
</script>

{#if movies && movies.length > 0}
  {#if direction === "right"}
    <div
      class="bg-poster transition-all"
      style="background-image: url({`https://image.tmdb.org/t/p/w500${movies[currentIndex].background}`});"
      transition:fly|local={{ x: 1000 }}
    ></div>
  {:else if direction === "left"}
    <div
      class="bg-poster transition-all"
      style="background-image: url({`https://image.tmdb.org/t/p/w500${movies[currentIndex].background}`});"
      transition:fly|local={{ x: -1000 }}
    ></div>
  {:else}
    <div
      class="bg-poster"
      style="background-image: url({`https://image.tmdb.org/t/p/w500${movies[currentIndex].background}`});"
    ></div>
  {/if}

  <div
    class="fixed inset-0 bg-gradient-to-r from-[#000000] via-[#001e30]/85 to-[#000000]"
  ></div>

  <div class="relative z-10 grid text-white h-screen">
    <div
      class="relative text-4xl z-10 bg-gradient-to-r from-[#fff0] h-fit via-sky-50 font-semibold flex justify-center font-poiret text-black opacity-70 w-full text-center p-4"
    >
      <button
        onclick={goto("/")}
        class="absolute cursor-pointer top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90 bg-transparent border-none"
        aria-label="Go to homepage"
      >
        <img src="../logo.png" alt="Logo" />
      </button>

      <div class="relative z-10 flex items-center justify-center h-fit">
        <div class="content__container">
          <p class="content__container__text">Uncover</p>

          <ul class="content__container__list">
            <li class="content__container__list__item">Your Taste</li>
            <li class="content__container__list__item">Movies</li>
            <li class="content__container__list__item">Series</li>
            <li class="content__container__list__item">
              <b class="text-red-950"> JOY AND FUN</b>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-7 grid-rows-3 h-fit my-auto justify-center items-center"
    >
      <button
        onclick={PreviousMovie}
        class="row-span-3 w-14 mx-auto justify-center items-center bg-cyan-700 hover:bg-cyan-800 ease-in-out transition-opacity p-3 rounded-full"
        aria-label="Previous movie"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 4l-8 8 8 8"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div
        class="bg-black opacity-80 col-span-5 row-span-3 grid grid-rows-3 grid-cols-5 p-4 justify-center items-center my-auto rounded-lg"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movies[currentIndex].poster}`}
          alt=""
          class="h-60 w-auto rounded-lg mx-auto row-span-3"
        />
        <div
          class="font-poiret text-4xl font-bold col-span-4 ok"
          class:animated-text={animateTitle}
        >
          {movies[currentIndex].title}
        </div>

        <div class="font-poiret text-xl font-medium col-span-4">
          {movies[currentIndex].storyline}
        </div>

        <div class="flex col-span-4">
          <button
            class="px-2 py-2 w-fit flex gap-4 mx-2 h-fit my-auto relative rounded group overflow-hidden font-medium bg-purple-50 text-black"
          >
            <span
              class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all rounded duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-60"
            ></span>
            <img src="../imdb.png" alt="" class="h-8 w-fit" />
            <span class="relative group-hover:text-white font-poiret text-2xl"
              >{movies[currentIndex].rating}</span
            >
          </button>

          {#each movies[currentIndex].genre
            .split(", ")
            .map((genre) => genre.trim()) as g}
            <button
              class="relative w-fit h-fit my-auto mx-2 inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span
                class="w-48 h-48 rounded rotate-[-40deg] bg-rose-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
              ></span>
              <span
                class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white"
                >{g}</span
              >
            </button>
          {/each}

          <button
            class="relative inline-flex w-fit h-fit items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span
              class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"
            ></span>
            <span
              class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"
            ></span>
            <span class="relative">{movies[currentIndex].year}</span>
          </button>
        </div>
      </div>

      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button
        onclick={NextMovie}
        class="row-span-3 w-14 mx-auto justify-center items-center bg-cyan-700 hover:bg-cyan-800 ease-in-out transition-opacity p-3 rounded-full"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 4l8 8-8 8"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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
{:else}
  <div class="w-full h-screen flex flex-col justify-center items-center gap-5">
    <h2 class="text-2xl text-gray-800 font-semibold font-poiret text-center">
      "Patience is not the ability to wait, but the ability to keep a <br />
      good attitude while waiting."<br /> – Joyce Meyer
    </h2>
    <div class="relative w-24 h-24">
      <div
        class="absolute w-6 h-6 bg-gray-800 rounded-sm left-0 top-0 animate-[square1_2.4s_ease-in-out_infinite,fadein_0.4s_0.1s_ease-out_both]"
      ></div>
      <div
        class="absolute w-6 h-6 bg-gray-800 rounded-sm left-0 top-8 animate-[square2_2.4s_ease-in-out_infinite,fadein_0.4s_0.1s_ease-out_both]"
      ></div>
      <div
        class="absolute w-6 h-6 bg-gray-800 rounded-sm left-8 top-8 animate-[square3_2.4s_ease-in-out_infinite,fadein_0.4s_0.2s_ease-out_both]"
      ></div>
      <div
        class="absolute w-6 h-6 bg-gray-800 rounded-sm left-16 top-8 animate-[square4_2.4s_ease-in-out_infinite,fadein_0.4s_0.3s_ease-out_both]"
      ></div>
      <div
        class="absolute w-6 h-6 bg-gray-800 rounded-sm left-24 top-8 animate-[square5_2.4s_ease-in-out_infinite,fadein_0.4s_0.4s_ease-out_both]"
      ></div>
    </div>
  </div>

  <style>
    @keyframes square1 {
      0% {
        left: 0px;
        top: 0px;
      }
      8.333% {
        left: 0px;
        top: 30px;
      }
      100% {
        left: 0px;
        top: 30px;
      }
    }

    @keyframes square2 {
      0% {
        left: 0px;
        top: 30px;
      }
      8.333% {
        left: 0px;
        top: 60px;
      }
      16.67% {
        left: 30px;
        top: 60px;
      }
      25% {
        left: 30px;
        top: 30px;
      }
      83.33% {
        left: 30px;
        top: 30px;
      }
      91.67% {
        left: 30px;
        top: 0px;
      }
      100% {
        left: 0px;
        top: 0px;
      }
    }

    @keyframes square3 {
      0%,
      100% {
        left: 30px;
        top: 30px;
      }
      16.67% {
        left: 30px;
        top: 30px;
      }
      25% {
        left: 30px;
        top: 0px;
      }
      33.33% {
        left: 60px;
        top: 0px;
      }
      41.67% {
        left: 60px;
        top: 30px;
      }
      66.67% {
        left: 60px;
        top: 30px;
      }
      75% {
        left: 60px;
        top: 60px;
      }
      83.33% {
        left: 30px;
        top: 60px;
      }
      91.67% {
        left: 30px;
        top: 30px;
      }
    }

    @keyframes square4 {
      0% {
        left: 60px;
        top: 30px;
      }
      33.33% {
        left: 60px;
        top: 30px;
      }
      41.67% {
        left: 60px;
        top: 60px;
      }
      50% {
        left: 90px;
        top: 60px;
      }
      58.33% {
        left: 90px;
        top: 30px;
      }
      100% {
        left: 90px;
        top: 30px;
      }
    }

    @keyframes square5 {
      0% {
        left: 90px;
        top: 30px;
      }
      50% {
        left: 90px;
        top: 30px;
      }
      58.33% {
        left: 90px;
        top: 0px;
      }
      66.67% {
        left: 60px;
        top: 0px;
      }
      75% {
        left: 60px;
        top: 30px;
      }
      100% {
        left: 60px;
        top: 30px;
      }
    }

    @keyframes fadein {
      0% {
        transform: scale(0.75);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  </style>
{/if}
