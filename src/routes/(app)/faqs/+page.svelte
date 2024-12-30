<script>
  let openIndex = null;

  const faqData = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards including Visa, MasterCard, American Express, and Discover. We also support PayPal and Apple Pay for your convenience.",
    },
    {
      question: "How long does shipping typically take?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. International shipping can take 7-14 business days depending on the destination.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please check our shipping calculator for specific details.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website.",
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

    <div class="relative z-10 flex flex-col items-center text-white">
      <div class="flex justify-center my-4">
        <img src="../logo.png" alt="Logo" class="h-24 w-24" />
      </div>
      <div class="max-w-3xl mx-auto">
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
