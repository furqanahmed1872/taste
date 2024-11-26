<script>
  let selectedIndex = -1;

  function handleSelect(index) {
    selectedIndex = index;
  }
</script>



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
