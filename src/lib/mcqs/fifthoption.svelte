<script>
  import { filters } from "$lib/store";
  import { goto } from "$app/navigation";
  import { get } from "svelte/store";

  let story = "";
  let filtersValue = get(filters);

  // Function to update storyline and log the store
  const saveStoryline = () => {
    filters.update((f) => {
      const updatedFilters = { ...f, storyline: story };
      console.log("Updated Filters:", updatedFilters); // Log to console
      return updatedFilters;
    });
    navigateToResults(filtersValue);
  };
  function navigateToResults(filtersValue) {
    const queryParams = new URLSearchParams(filtersValue).toString();
    goto(`/result?${queryParams}`);
  }
</script>

<!-- Title -->

<a href="#_" class="relative px-8 py-4 font-medium text-white group w-fit h-fit mx-auto">
  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#3180a2] group-hover:bg-[#0B4F6C] group-hover:skew-x-12"></span>
  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#0B4F6C] group-hover:bg-[#3180a2] group-hover:-skew-x-12"></span>

  <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#206684] -rotate-12"></span>
  <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#4394b7] -rotate-12"></span>
  <span class="relative text-2xl font-poiret ">Write Your dream story And get preference!</span>
</a>


<!-- Write Your dream story And get preference! -->

<!-- Textarea -->
<div class="w-full justify-center flex">
  <textarea
    bind:value={story}
    class="p-4 w-1/2 h-48 text-[#0B4F6C] opacity-80 text-lg font-medium bg-black rounded-lg shadow-lg resize-none outline-none focus:ring-4 focus:ring-[#0B4F6C] placeholder-[#8F8F8F] placeholder-opacity-75 transition-all duration-300"
    placeholder="Start writing your dream story here"
    minlength="20"
  ></textarea>
</div>

<!-- Validation Message -->
{#if story.length > 0 && story.length < 20}
  <div class="text-[#8F8F8F] text-sm mt-2 text-center">
    <b>More than 20 letters are required</b>
  </div>
{/if}

<!-- Buttons -->
<div class="mx-auto my-auto mt-4 flex gap-4 justify-center">
  {#if story.length > 20}
    <!-- NEXT Button -->
    
    <button 
    onclick={saveStoryline()}
    class="relative px-5 py-3 overflow-hidden font-medium text-[#0B4F6C] bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
      <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#0B4F6C] group-hover:w-full ease"></span>
      <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#0B4F6C] group-hover:w-full ease"></span>
      <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#0B4F6C] group-hover:h-full ease"></span>
      <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#0B4F6C] group-hover:h-full ease"></span>
      <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#0B4F6C] opacity-0 group-hover:opacity-100"></span>
      <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Submit</span>
    </button>
  {/if}
  <!-- Skip Button -->
 
 
  <button 
  onclick={navigateToResults(filtersValue)}
  class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#0B4F6C] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0B4F6C] group-hover:h-full"></span>
    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="relative w-full text-left text-lg transition-colors duration-200 ease-in-out text-black group-hover:text-white">Skip</span>
  </button>

</div>
