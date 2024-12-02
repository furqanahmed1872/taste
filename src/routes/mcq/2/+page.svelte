<script>
  let clickedBars = []; // Array to store selected bars

  let arr = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 
    'Drama', 'Family', 'Fantasy', 'History'
  ];
  
  let arrtwo = [
    'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 
    'Thriller', 'War', 'Western', 'Biography', "Doesn't matter"
  ];

  function handleClick(bar) {
    if (bar === "Doesn't matter") {
      if (!clickedBars.includes(bar)) {
        // If "Doesn't matter" is selected and not already in the array, add it
        clickedBars = [bar];
      }
    } else {
      if (clickedBars.includes("Doesn't matter")) {
        // If "Doesn't matter" is already selected, remove it when selecting another option
        clickedBars = [bar];
      } else {
        if (clickedBars.includes(bar)) {
          // If the bar is already selected, remove it
          clickedBars = clickedBars.filter((item) => item !== bar);
        } else {
          // If there are already 5 items, remove the first item before adding the new one
          if (clickedBars.length >= 5) {
            clickedBars.shift();
          }
          clickedBars = [...clickedBars, bar];
        }
      }
    }
  }
</script>



<div class="fixed inset-0 bg-cover bg-center " style="background-image: url('../back.jpg');"></div>

<!-- Color Overlay -->
<div class="fixed inset-0 bg-gradient-to-r from-[#051721] via-black to-[#210505] opacity-95 transition-opacity  "></div>

<!-- Main Content -->
<div class="relative z-10 grid   text-white h-screen ">
  <!-- Logo -->


  <!-- Main Text -->
  <div class="relative  text-4xl z-10 bg-gradient-to-r from-[#fff0] h-fit via-sky-50 font-semibold flex justify-center font-poiret text-black opacity-70 w-full text-center p-4">
    <!-- Centered Logo -->
    <img
      src="../logo.png"
      alt="Logo"
      class="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90"
    />
    <!-- Text -->
    <div class="relative z-10 flex items-center justify-center">
      "Discover Your<b style="color: #fff0; user-select: none;">---------</b>Movie Taste!"
    </div>
  </div>
  

  <div class="grid grid-cols-3 grid-rows-10 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4 mx-auto">
      
    <div class="row-span-10 my-4 grid gap-2 overflow-hidden relative">
      {#each arr as label, i}
      <button
        class="animated-bar bg-[#0B4F6C] font-poiret text-xl text-center p-2"
        on:click={() => handleClick(label)}
        style="
          margin-right: {clickedBars.includes(label) ? '10%' : '0%'};
            margin-left: {clickedBars.includes(label) ? '10%' : '0%'};
          border-top-left-radius: {clickedBars.includes(label) ? '0.6rem' : '0.3rem'};
          border-bottom-left-radius: {clickedBars.includes(label) ? '0.6rem' : '0.3rem'};
          border-top-right-radius: {clickedBars.includes(label) ? '0.6rem' : '0rem'};
          border-bottom-right-radius: {clickedBars.includes(label) ? '0.6rem' : '0rem'};
         
          background-color:{clickedBars.includes(label) ? 'white': '#0B4F6C' };
          color:{clickedBars.includes(label) ? '#0B4F6C': 'white'}
         
          "
      >
        {label}
      </button>
    {/each}
    
    
    
     
     
    </div>
 
    
    <!-- Black Box -->
    <div class="row-span-10 bg-white opacity-70 text-black rounded-3xl font-poiret text-4xl font-semibold justify-center items-center grid p-8 text-center">
      “Select Genre”
    </div>


    <!-- Main Text -->
    <div class="text-5xl text-custom-grey font-poiret bg-custom-dark-brown opacity-70 w-full text-center p-1 my-2">
      "Discover Your Movie Taste!"
    </div>

    <!-- Grid Content -->
    <div class="grid grid-cols-2 grid-rows-6 2xl 2xl:w-1/2 xl:w-2/3 m-8 lg:w-3/4">
      <!-- Black Box -->
      <div class="row-span-6 bg-black opacity-70 rounded-3xl font-poiret text-5xl justify-center items-center grid p-8 text-center">
        “Select the Time period for movie”
      </div>

      <!-- Container for Red Bars -->
      <div class="row-span-6 my-7 grid gap-4 overflow-hidden relative ">
        <!-- Animated Bars -->
        <div class="animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl">
          Relased 5 years ago
        </div>
        
        <div class="animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl">
          Relased 10 years ago
        </div>
        <div class="animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl">
          Relased 15 years ago
        </div>
        <div class="animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl">
          Relased 20 years ago
        </div>
        <div class="animated-bar bg-custom-dark font-poiret text-2xl text-center p-3 hover:bg-opacity-100 bg-opacity-50 translate-x-[-100%] rounded-e-xl">
           doesn't matter
        </div>
       
      </div>
    </div>

    <a 


         
    <div class="row-span-10 my-4 grid gap-2 overflow-hidden relative">
      <!-- Animated Bars -->
