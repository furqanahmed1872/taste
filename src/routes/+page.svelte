<script>
  import { goto } from "$app/navigation";

  let showOptions = false;

  function toggleDropdown() {
    showOptions = !showOptions;
  }
</script>

<div class="relative w-full min-h-screen">
  <!-- Background Image (fixed position) -->
  <div
    class="fixed inset-0 bg-cover bg-center"
    style="background-image: url('../mainpagemoviebackground.png');"
  ></div>

  <!-- Color Overlay -->
  <div class="fixed inset-0 bg-[#001016] opacity-90"></div>

  <!-- Main Content -->
  <div
    class="relative w-full z-10 gap-20 flex flex-col items-center text-white py-6"
  >
    <!-- Logo -->
    <div class="flex justify-center w-full">
      <img src="../logo.png" alt="Logo" class="w-28" />
    </div>
    
    <div class="w-full flex flex-col gap-1">
      <!-- nav-bar -->
      <div
        class="flex w-full flex-col items-center justify-center font-poiret text-white text-lg bg-black/70 to-black/10 from-black/10"
      >
        <div class="grid w-1/4 grid-cols-3 justify-items-center relative">
          <a
            class="relative p-2 text-white group hover:text-gray-300 hover:bg-white/10"
            href="/"
          >
            Upcoming
            <span
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            class="relative p-2 text-white group hover:text-gray-300 hover:bg-white/10"
            href="/"
          >
            FAQs
            <span
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            class="relative p-2 text-white group hover:text-gray-300 hover:bg-white/10"
            href="/"
          >
            About
            <span
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
            ></span>
          </a>

          <!-- Follow Line Bar-->
          <div
            class="absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"
          ></div>
        </div>
      </div>
      <!-- Main Text -->
      <div
        class="text-5xl text-white font-poiret bg-[#2A0B0B] opacity-70 w-full text-center p-6 justify-around"
      >
        <p class="text-4xl">Find Your Taste</p>
        <p class="text-lg font-thin">
          This is a AI website that can aquire your taste by just some option
          and this can <br />also help you find people with your similar taste
          and this website also do steaming of movies that <br />you choose
        </p>
      </div>
    </div>

    <!-- button -->
    <div class="relative inline-block font-poiret">
      <!-- Main Button -->
      <button
        on:click={toggleDropdown}
        class="bg-inherit text-white text-3xl delay-50 hover:scale-110 ease-in-out px-6 py-2 rounded-full shadow-lg hover:bg-black/50 transition-transform duration-300"
      >
        Start
      </button>

      <!-- Dropdown Options -->
      <div
        class={`flex items-center ${showOptions ? "opacity-100" : "opacity-0"} w-full transition-opacity duration-300 ease-in-out`}
      >
        <!-- Option 1 -->
        <button
          on:click={() => goto("mcq")}
          class={`absolute -left-[120px] top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 ${
            showOptions ? "translate-x-0" : "-translate-x-10"
          }`}
        >
          Filling Option
        </button>

        <!-- Option 2 -->
        <button
          on:click={() => goto("voice")}
          class={`absolute -right-28 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 ${
            showOptions ? "translate-x-0" : "translate-x-10"
          }`}
        >
          Ai Assistant
        </button>
      </div>
    </div>
  </div>
</div>
