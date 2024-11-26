<script>
    let selectedIndex = -1;
  
    function handleSelect(index) {
      selectedIndex = index;
    }
  </script>
  
  <style>
    /* Keyframe for slide-in animation */
    @keyframes slide-in {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  
    /* Base Styles for Animated Bars */
    .animated-bar {
      width: 85%; /* Default width */
      opacity: 0.5; /* Default opacity */
      transition: all 0.3s ease-in-out; /* Smooth transition for hover/selection */
      animation: slide-in 1s ease-in-out forwards;
      animation-delay: calc(var(--delay, 0s)); /* Delays for staggered animation */
    }
  
    /* Delayed Animation for Each Bar */
    .animated-bar:nth-child(1) {
      --delay: 0.2s;
    }
    .animated-bar:nth-child(2) {
      --delay: 0.4s;
    }
    .animated-bar:nth-child(3) {
      --delay: 0.6s;
    }
    .animated-bar:nth-child(4) {
      --delay: 0.8s;
    }
    .animated-bar:nth-child(5) {
      --delay: 1s;
    }
  
    /* Hover Effect */
    .animated-bar:hover {
      width: 100%; /* Expand width */
    }
  
    /* Selected Effect */
    .animated-bar.selected {
      width: 100%;
      opacity: 1; /* Full visibility */
    }
  </style>
  
  <div class="fixed inset-0 bg-cover bg-center blur-sm" style="background-image: url('../back.jpg');"></div>
  <div class="fixed inset-0 bg-custom-dark-red opacity-90"></div>
  
  <div class="relative z-10 flex flex-col items-center text-white py-6">
    <div class="flex justify-center">
      <img src="../logo.png" alt="Logo" class="h-36 w-40" />
    </div>
  
    <div class="text-5xl text-custom-grey font-poiret bg-custom-dark-brown opacity-70 w-full text-center p-1 my-2">
      "Discover Your Movie Taste!"
    </div>
  
    <div class="grid grid-cols-2 grid-rows-6 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4">
      <div class="row-span-6 bg-black opacity-70 rounded-3xl font-poiret text-5xl justify-center items-center grid p-8 text-center">
        “Select the Time Period for Movie”
      </div>
  
      <div class="row-span-6 my-7 grid gap-4 overflow-hidden relative">
        {#each ["Released 5 years ago", "Released 10 years ago", "Released 15 years ago", "Released 20 years ago", "Doesn't matter"] as option, i}
          <button
            type="button"
            on:click={() => handleSelect(i)}
            class={`animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 rounded-e-xl cursor-pointer
                    ${selectedIndex === i ? 'selected' : ''}`}
            aria-pressed={selectedIndex === i}
          >
            {option}
          </button>
        {/each}
      </div>
    </div>
  
    <a 
      href="/mcq/3"
      class="bg-black opacity-50 font-poiret text-5xl p-6 rounded-2xl m-4 hover:opacity-100"
    >
      NEXT
    </a>
  </div>
  