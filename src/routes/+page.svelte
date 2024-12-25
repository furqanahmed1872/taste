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
  <div class="fixed inset-0 bg-[#001016] opacity-90">
    
  </div>

  <!-- Main Content -->
  <div
    class="relative w-full z-10 gap-5 flex flex-col items-center text-white py-6" 
  >
    <!-- Logo -->
    <div class="flex justify-center w-full">

      <img src="../logo.png" alt="Logo" class="w-28" />

    </div>
    <script>
      let activeIndex = -1;
      let direction = 'right'; // Direction of the hover (left to right or right to left)
    
      // Function to track the direction of mouse movement
      function handleMouseMove(event) {
        const currentX = event.clientX;
        if (currentX > this.lastX) {
          direction = 'right';
        } else {
          direction = 'left';
        }
        this.lastX = currentX; // Store current mouse position for comparison
      }
    
      // Add mouse move event listener to track movement direction
      import { onMount } from 'svelte';
      onMount(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
      });
    </script>
    
    <style>
      .nav-link {
        position: relative;
        display: inline-block;
      }
    
      .nav-link::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #3498db; /* Blue underline */
        transition: width 0.3s ease, transform 0.3s ease;
      }
    
      .nav-link.active::before {
        width: 100%;
      }
    </style>
    
    <nav class="bg-gray-800 p-4">
      <ul class="flex space-x-8 justify-center">
        <li
          class="nav-link"
          on:mouseenter={() => activeIndex = 0}
          on:mouseleave={() => activeIndex = -1}
          class:active={activeIndex === 0}
        >
          <a href="#" class="text-white text-lg">Home</a>
        </li>
        <li
          class="nav-link"
          on:mouseenter={() => activeIndex = 1}
          on:mouseleave={() => activeIndex = -1}
          class:active={activeIndex === 1}
        >
          <a href="#" class="text-white text-lg">About</a>
        </li>
        <li
          class="nav-link"
          on:mouseenter={() => activeIndex = 2}
          on:mouseleave={() => activeIndex = -1}
          class:active={activeIndex === 2}
        >
          <a href="#" class="text-white text-lg">Services</a>
        </li>
        <li
          class="nav-link"
          on:mouseenter={() => activeIndex = 3}
          on:mouseleave={() => activeIndex = -1}
          class:active={activeIndex === 3}
        >
          <a href="#" class="text-white text-lg">Contact</a>
        </li>
      </ul>
    </nav>
    
    
    
    <!-- Main Text -->
    <div
      class="text-5xl text-white font-poiret bg-[#2A0B0B] opacity-70 w-full text-center p-6 justify-around"
    >
      <p class="text-4xl">Find Your Taste</p>
      <p class="text-lg font-thin">
        This is a AI website that can aquire your taste by just some
        option and this can <br />also help you find people with  your similar
        taste and this website also do steaming of  movies that <br />you choose
      </p>
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
        <!-- Option 1: Positioned to the left of the button -->
        <button
        on:click={()=> goto('mcq')}
          class={`absolute -left-[120px] top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 ${
            showOptions ? "translate-x-0" : "-translate-x-10"
          }`}
        >
          Filling Option
        </button>

        <!-- Option 2: Positioned to the right of the button -->
        <button
        on:click={()=> goto('voice')}
          class={`absolute -right-28 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 ${
            showOptions ? "translate-x-0" : "translate-x-10"
          }`}
        >
          Ai Assiatant
        </button>
      </div>
    </div>
  </div>
</div>
