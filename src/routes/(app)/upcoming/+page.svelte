<div class="relative w-full min-h-screen">
  <div
    class="fixed inset-0 bg-cover bg-black/50 bg-center"
    style="background-image: url('../back.jpg');"
  ></div>

  <div
    class="fixed inset-0 bg-gradient-to-r from-[#051721] via-black to-[#210505] opacity-95 transition-opacity"
  ></div>

  <div class="relative z-10 flex flex-col items-center text-white h-screen">
    <div class="flex justify-center my-2">
      <img src="../logo.png" alt="Logo" class="h-32 w-36" />
    </div>

    <div
      class="text-4xl font-medium text-black font-poiret opacity-30 bg-gradient-to-r from-[#2a0b0b]/5 from-0% to-[#01112c]/5 to-100% via-white w-full text-center p-1"
    >
      "Discover Upcoming Entertainment"
    </div>

   <div class="overflow-hidden w-full">
    <div class="scrolling-carousel">
      <!-- Original List of Cards -->
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 1" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 1</h3>
          <p class="text-gray-400 text-sm">Description of Movie 1.</p>
        </div>
      </div>
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 2" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 2</h3>
          <p class="text-gray-400 text-sm">Description of Movie 2.</p>
        </div>
      </div>
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 3" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 3</h3>
          <p class="text-gray-400 text-sm">Description of Movie 3.</p>
        </div>
      </div>
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 4" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 4</h3>
          <p class="text-gray-400 text-sm">Description of Movie 4.</p>
        </div>
      </div>
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 5" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 5</h3>
          <p class="text-gray-400 text-sm">Description of Movie 5.</p>
        </div>
      </div>

      <!-- Duplicate List of Cards for Infinite Scrolling -->
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 1" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 1</h3>
          <p class="text-gray-400 text-sm">Description of Movie 1.</p>
        </div>
      </div>
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 2" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 2</h3>
          <p class="text-gray-400 text-sm">Description of Movie 2.</p>
        </div>
      </div>
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 3" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 3</h3>
          <p class="text-gray-400 text-sm">Description of Movie 3.</p>
        </div>
      </div>
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 4" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 4</h3>
          <p class="text-gray-400 text-sm">Description of Movie 4.</p>
        </div>
      </div>
      <div class="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
        <img src="https://via.placeholder.com/300x400" alt="Movie 5" class="w-full h-80 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-xl font-semibold">Movie Title 5</h3>
          <p class="text-gray-400 text-sm">Description of Movie 5.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

<style>
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .scrolling-carousel {
    display: flex;
    gap: 1.5rem; /* Adjust gap between cards */
    animation: scroll 20s linear infinite;
  }
</style>
