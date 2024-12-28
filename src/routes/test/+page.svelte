<script>
  import { onMount } from "svelte";
  let images = [
    {
      alt: "Cosmic timetraveler",
      src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2016/09/stephen-chow-kung-fu-hustler.jpg",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
    },
    {
      alt: "Cristina Gottardi",
      src: "https://images.squarespace-cdn.com/content/v1/60ca4165cdc96644e18adc3c/1629984421972-33L53AA78JBBKIZSY07Y/A5E2E355-B8F6-4909-B6DB-F2187345842E.jpeg",
      title: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
    },
    {
      alt: "Johannes Plenio",
      src: "https://images4.alphacoders.com/288/thumb-1920-288218.jpg",
      title: "johannes-plenio-RwHv7LgeC7s-unsplash.com",
    },
  ];

  let Carousel;

  onMount(async () => {
    // Dynamically import the Carousel only when the component is mounted in the browser
    const module = await import("svelte-carousel");
    Carousel = module.default;
  });
</script>

{#if Carousel}
  <Carousel let:loaded>
    {#each images as { src, alt }, imageIndex (src)}
      <div class="img-container">
        {#if loaded.includes(imageIndex)}
          <img {src} alt={alt} />
        {/if}
      </div>
    {/each}
  </Carousel>
{/if}
