<script>
  let clickedDiv = null;

  function handleDivClick(divType) {
    clickedDiv = divType;
  }
</script>

<!-- Background and overlay -->
<div class="fixed inset-0 bg-cover bg-center blur-sm" style="background-image: url('../back.jpg');"></div>
<div class="fixed inset-0 bg-custom-dark-red opacity-90"></div>

<!-- Main Content -->
<div class="relative z-10 flex flex-col items-center text-white py-6">
  <div class="flex justify-center">
    <img src="../logo.png" alt="Logo" class="h-36 w-40" />
  </div>

  <div class="text-5xl text-custom-grey font-poiret bg-custom-dark-brown opacity-70 w-full text-center p-1 my-2">
    "Discover Your Movie Taste!"
  </div>

  <div class="grid grid-cols-2 grid-rows-6 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4">
    <div class="row-span-6 bg-black opacity-70 rounded-3xl font-poiret text-5xl justify-center items-center grid p-8 text-center">
      “Select the Time period for movie”
    </div>

    <div class="row-span-6 my-7 grid gap-4 overflow-hidden relative">
      <!-- Button group with conditional width applied to each button -->
      <button
        on:click={() => handleDivClick('movies')}
        class={`animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl ${
          clickedDiv === 'movies' ? 'w-full' : 'w-[85%]'
        }`}
      >
        Released 5 years ago
      </button>
      
      <button
        on:click={() => handleDivClick('released10')}
        class={`animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl ${
          clickedDiv === 'released10' ? 'w-full' : 'w-[85%]'
        }`}
      >
        Released 10 years ago
      </button>
      <button
        on:click={() => handleDivClick('released15')}
        class={`animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl ${
          clickedDiv === 'released15' ? 'w-full' : 'w-[85%]'
        }`}
      >
        Released 15 years ago
      </button>
      <button
        on:click={() => handleDivClick('released20')}
        class={`animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl ${
          clickedDiv === 'released20' ? 'w-full' : 'w-[85%]'
        }`}
      >
        Released 20 years ago
      </button>
      <button
        on:click={() => handleDivClick('dontMatter')}
        class={`animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl ${
          clickedDiv === 'dontMatter' ? 'w-full' : 'w-[85%]'
        }`}
      >
        Doesn't matter
      </button>
    </div>
  </div>

  <!-- Conditionally render the NEXT button -->
  {#if clickedDiv}
    <a 
      href="/mcq/2"
      class="bg-black opacity-50 font-poiret text-5xl p-6 rounded-2xl m-4 hover:opacity-100">
      NEXT
    </a>
  {/if}
</div>
