<script>
  import { onMount } from "svelte";
  import Posterselection from "$lib/mcqs/posterselection.svelte";
  import Firstoption from "$lib/mcqs/firstoption.svelte";
  import Secondoption from "$lib/mcqs/secondoption.svelte";
  import Thirdoption from "$lib/mcqs/thirdoption.svelte";
  import Fourthoption from "$lib/mcqs/fourthoption.svelte";
  import Fifthoption from "$lib/mcqs/fifthoption.svelte";
  let isGrid = false;
  let newcomp = 0;

  function handleNext() {
    isGrid = true;
    newcomp++;
    console.log("New comp value:", newcomp);
  }
</script>

<div
  class="fixed inset-0 bg-cover bg-center"
  style="background-image: url('../back.jpg');"
></div>

<!-- Color Overlay -->
<div
  class="fixed inset-0 bg-gradient-to-r from-[#051721] via-black to-[#210505] opacity-95 transition-opacity"
></div>

<!-- Main Content -->
<div
  class="relative z-10 text-white h-screen {isGrid ? 'grid' : 'flex flex-col'}
                                            
  "
>
  <!-- Header Section -->
  <div
    class="relative text-4xl z-10 bg-gradient-to-r from-[#fff0] h-fit via-sky-50 font-semibold flex justify-center font-poiret text-black opacity-70 w-full text-center p-4"
  >
    <a href="/">
      <img
        src="../logo.png"
        alt="Logo"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90"
      />
    </a>
    <div class="relative z-10 flex items-center justify-center">
      "Discover Your <b style="color: #fff0; user-select: none;">---------</b> Movie
      Taste!"
    </div>
  </div>

  {#if newcomp === 0}
    <Posterselection {handleNext} />
  {/if}

  {#if newcomp === 1}
    <Firstoption {handleNext} />
  {/if}

  {#if newcomp === 2}
    <Secondoption {handleNext} />
  {/if}

  {#if newcomp === 3}
    <Thirdoption {handleNext} />
  {/if}

  {#if newcomp === 4}
    <Fourthoption {handleNext} />
  {/if}

  {#if newcomp === 5}
    <Fifthoption />
  {/if}
</div>
