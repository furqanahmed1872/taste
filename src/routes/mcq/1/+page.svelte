<!-- Background Image (fixed position) -->
<div
  class="fixed inset-0 bg-cover bg-center blur-sm"
  style="background-image: url('../back.jpg');"
></div>

<!-- Color Overlay -->
<div class="fixed inset-0 bg-custom-dark-red opacity-90"></div>

<!-- Main Content -->
<div class="relative z-10 grid  h-screen text-white py-6">
  <!-- Logo -->
  <div class="flex justify-center">
    <img src="../logo.png" alt="Logo" class="h-36 w-40" />
  </div>

  <!-- Main Text -->
  <div
    class="text-5xl row-span-1 text-custom-grey font-poiret bg-custom-dark-brown opacity-70 w-full text-center p-1 my-2"
  >
    "Discover Your Movie Taste!"
  </div>

  <div class="flex w-full justify-center items-center">
    <button
      class="bg-custom-dark p-4 rounded-xl opacity-50 font-poiret text-4xl px-5 m-8"
    >
      Movies</button
    >
    <div class="font-poiret text-6xl">OR</div>
    <button
      class="bg-custom-dark p-4 rounded-xl opacity-50 font-poiret text-4xl px-5 m-8"
      >Series</button
    >
  </div>

  <button
    class="bg-black opacity-50 text-5xl p-6 rounded-2xl m-4 hover:opacity-100"
  >
    NEXT
  </button>
</div>
