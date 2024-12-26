<script>
  import { writable } from "svelte/store";
  import { filters } from "$lib/store"; // Import the store

  let story = ''; // Bind this to the textarea

  // Function to update storyline and log the store
  const saveStoryline = () => {
    filters.update(f => {
      const updatedFilters = { ...f, storyline: story };
      console.log("Updated Filters:", updatedFilters); // Log to console
      return updatedFilters;
    });
  };
</script>

<!-- Title -->
<div class="mx-auto bg-[#0B4F6C] h-fit text-2xl font-medium p-4 rounded-lg font-poiret">
  Write Your dream story And get preference!
</div>

<!-- Textarea -->
<div class="w-full justify-center flex">
  <textarea
    bind:value={story}
    class="p-4 w-1/2 h-48 text-[#0B4F6C] text-lg font-medium bg-[#F8FAFC] rounded-lg shadow-lg resize-none outline-none focus:ring-4 focus:ring-[#0B4F6C] placeholder-[#8F8F8F] placeholder-opacity-75 transition-all duration-300"
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
    <a
      href="/result"
      class="p-3 rounded-xl bg-blue-600 text-white cursor-pointer"
      on:click={saveStoryline} 
    >
      NEXT
    </a>
  {/if}
  <!-- Skip Button -->
  <a
    href="/result"
    class="bg-white text-black p-3 rounded-xl"
  >Skip</a>
</div>
