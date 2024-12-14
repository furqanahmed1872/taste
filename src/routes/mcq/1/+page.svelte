<script>
  let firstoption = "";
  let newcomp = 0; 

  let arr = [
    "Released 5 years ago",
    "Released 10 years ago",
    "Released 15 years ago",
    "Released 20 years ago",
    "Doesn't matter"
  ];

  function handleClick(bar) {
    firstoption = bar;
  }

  function handleNext() {
    newcomp++; 
  }
</script>

<style>
  /* Add your styles here */
</style>

<div class="fixed inset-0 bg-cover bg-center" style="background-image: url('../back.jpg');"></div>

<!-- Color Overlay -->
<div class="fixed inset-0 bg-gradient-to-r from-[#051721] via-black to-[#210505] opacity-95 transition-opacity"></div>

<!-- Main Content -->
<div class="relative z-10 grid text-white h-screen">
  <!-- Main Text -->
  <div class="relative text-4xl z-10 bg-gradient-to-r from-[#fff0] h-fit via-sky-50 font-semibold flex justify-center font-poiret text-black opacity-70 w-full text-center p-4">
    <!-- Centered Logo -->
    <img
      src="../logo.png"
      alt="Logo"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90"
    />
    <!-- Text -->
    <div class="relative z-10 flex items-center justify-center">
      "Discover Your <b style="color: #fff0; user-select: none;">---------</b> Movie Taste!"
    </div>
  </div>

  <!-- Conditional Center Component -->
  {#if newcomp === 0}
    <div class="grid grid-cols-2 grid-rows-6 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4 mx-auto h-fit">
      <div class="relative row-span-10 bg-white opacity-70 text-black rounded-3xl font-poiret text-4xl font-semibold justify-center items-center grid p-8 text-center overflow-hidden">
        <!-- Text -->
        <div class="relative z-10 flex flex-col items-center">
          “Select Time period for Movies”
        </div>
      </div>

      <div class="row-span-6 my-7 grid gap-4 overflow-hidden relative">
        {#each arr as label, i}
          <button
            class="sliding-bar bg-[#0B4F6C] font-poiret text-2xl text-center p-3 rounded-e-xl"
            on:click={() => handleClick(label)}
            style="
              width: {firstoption === label ? '100%' : '85%'};
              background-color: {firstoption === label ? 'white' : '#0B4F6C'};
              color: {firstoption === label ? '#0B4F6C' : 'white'};
            "
          >
            {label}
          </button>
        {/each}
      </div>
    </div>
  

  <!-- Next Button -->
  <div class="mx-auto">
    {#if firstoption}
      <button
        on:click={handleNext}
        class="bg-custom-dark font-poiret h-fit text-3xl p-4 w-fit mx-auto rounded-xl opacity-80 transition-opacity duration-500 ease-in-out"
      >
        Next
      </button>
    {/if}
  </div>

  {/if}

<!-- second question -->

  {#if newcomp === 1}
    <div class="grid grid-cols-2 grid-rows-6 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4 mx-auto h-fit">
      <div class="relative row-span-10 bg-white opacity-70 text-black rounded-3xl font-poiret text-4xl font-semibold justify-center items-center grid p-8 text-center overflow-hidden">
        <!-- Text -->
        <div class="relative z-10 flex flex-col items-center">
          “”
        </div>
      </div>

      <div class="row-span-6 my-7 grid gap-4 overflow-hidden relative">
        {#each arr as label, i}
          <button
            class="sliding-bar bg-[#0B4F6C] font-poiret text-2xl text-center p-3 rounded-e-xl"
            on:click={() => handleClick(label)}
            style="
              width: {firstoption === label ? '100%' : '85%'};
              background-color: {firstoption === label ? 'white' : '#0B4F6C'};
              color: {firstoption === label ? '#0B4F6C' : 'white'};
            "
          >
            {label}
          </button>
        {/each}
      </div>
    </div>
  

  <!-- Next Button -->
  <div class="mx-auto">
    {#if firstoption}
      <button
        on:click={handleNext}
        class="bg-custom-dark font-poiret h-fit text-3xl p-4 w-fit mx-auto rounded-xl opacity-80 transition-opacity duration-500 ease-in-out"
      >
        Next
      </button>
    {/if}
  </div>

  {/if}


</div>
