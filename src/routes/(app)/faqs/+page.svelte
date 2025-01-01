<script>
  let openIndex = null;

  const faqData = [
    {
    question: "How does the movie recommendation system work?",
    answer:
      "Our system analyzes your preferences based on genres, ratings, and reviews to suggest movies that match your taste. You can also explore trending and popular movies curated by our team.",
  },
  {
    question: "Is this website free to use?",
    answer:
      "Yes! Our movie recommendation website is completely free to use. No subscriptions or hidden charges.",
  },
  
  {
    question: "How accurate are the recommendations?",
    answer:
      "We use advanced algorithms and user feedback to provide accurate recommendations, but movie preferences can vary. You can fine-tune suggestions by rating movies you’ve already seen.",
  },
  
  {
    question: "Do you include all genres?",
    answer:
      "Yes, we cover all genres—from action and drama to sci-fi and documentaries. Whatever your mood, we have something for you!",
  },
  {
    question: "Are the movie ratings and reviews reliable?",
    answer:
      "Our ratings are compiled from verified sources and user reviews, ensuring a balanced and trustworthy evaluation.",
  },
  {
    question: "Can I watch movies directly on this site?",
    answer:
      "No, we don’t host movies. We provide links to official streaming platforms where you can watch them legally.",
  },
  
  ];

  const handleToggle = (index) => {
    openIndex = openIndex === index ? null : index;
  };
</script>

<div class="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
  <div class="relative w-full overflow-hidden">
    <div
      class="fixed inset-0 bg-cover bg-black/50 bg-center"
      style="background-image: url('../back.jpg');"
    ></div>

    <div
      class="fixed inset-0 bg-gradient-to-r from-[#051721] via-black to-[#210505] opacity-95 transition-opacity"
    ></div>

    <div class="relative z-10 grid grid-rows-12 items-center text-white">
      <div class="flex justify-center my-4 row-span-3">
        <img src="../logo.png" alt="Logo" class=" w-24" />
      </div>
      <div class="max-w-3xl mx-auto row-span-9 ">
        <h2
          class="relative text-2xl my-2 md:text-4xl font-extrabold text-center bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent mb-8 animate-gradient-slide"
        >
          Frequently Asked Questions
        </h2>

        <div class="space-y-2">
          {#each faqData as faq, index}
            <div
              class="bg-gradient-to-r from-gray-500 via-white to-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              <button
                class="w-full text-left p-3 focus:outline-none focus:ring-2 focus:ring-black flex justify-between items-center"
                on:click={() => handleToggle(index)}
                aria-expanded={openIndex === index ? "true" : "false"}
              >
                <span class="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span class="ml-4 flex-shrink-0">
                  {#if openIndex === index}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 15l-7-7-7 7"
                      />
                    </svg>
                  {/if}
                </span>
              </button>
              <div
                class="transition-all duration-300 ease-in-out bg-gradient-to-r from-gray-500 via-white to-gray-300"
                class:max-h-96={openIndex === index}
                class:max-h-0={openIndex !== index}
                class:opacity-100={openIndex === index}
                class:opacity-0={openIndex !== index}
              >
                <div class="p-4 text-gray-900">
                  {faq.answer}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .max-h-96 {
    max-height: 24rem;
  }

  @keyframes gradient-slide {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .animate-gradient-slide {
    background-size: 200% 200%;
    animation: gradient-slide 4s ease infinite;
  }
</style>
