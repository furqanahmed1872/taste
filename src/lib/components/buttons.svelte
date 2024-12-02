<!-- for genre -->

<div class="mx-auto m-4">
    {#if clickedBars.length > 0 }
      <a 
        href="/mcq/3"
        class="bg-custom-dark opacity-50 w-fit  h-fit font-poiret text-2xl p-2 rounded-lg  hover:opacity-100">
        NEXT
      </a>
    {/if}
    </div>

    <!-- for others -->

    <div class="mx-auto">
        {#if clickedBar}
          <a 
          href="/mcq/1"
          class="bg-custom-dark font-poiret h-fit text-3xl  p-4 w-fit mx-auto rounded-xl opacity-80  transition-opacity duration-500 ease-in-out">
            Next
          </a>
        {/if} 
      </div>