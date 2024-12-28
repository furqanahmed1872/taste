<script>
  import { goto } from "$app/navigation";

  let showOptions = false;

  function toggleDropdown() {
    showOptions = !showOptions;
  }

  import { onMount } from "svelte";

  onMount(() => {
    // Textbox Events
    document.addEventListener("focusin", (event) => {
      if (event.target.matches("navbar input.search-textbox")) {
        if (event.target.value.length <= 0) {
          const parent = event.target.closest("div.search");
          parent.classList.add("focused");
        }
      }
    });

    document.addEventListener("focusout", (event) => {
      if (event.target.matches("navbar input.search-textbox")) {
        if (event.target.value.length <= 0) {
          const parent = event.target.closest("div.search");
          parent.classList.remove("focused");
        }
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest("navbar .search")) {
        const input = event.target
          .closest("navbar .search")
          .querySelector("input.search-textbox");
        input.focus();
      }
    });

    // Text Key Events for Animating Icons
    document.addEventListener("keyup", (event) => {
      if (event.target.matches("navbar input.search-textbox")) {
        const parent = event.target.closest("div.search");
        const phrase = event.target.value;
        const phraseLength = phrase.length;

        if (phraseLength >= 2) {
          parent.classList.add("multi-char");
          if (!parent.classList.contains("not-null")) {
            parent.classList.add("not-null");
          }
        } else if (phraseLength === 1) {
          parent.classList.add("not-null");
          parent.classList.remove("multi-char");
        } else if (phraseLength <= 0) {
          parent.classList.remove("not-null");
          parent.classList.remove("multi-char");
        }
      }
    });

    // Tab Highlighter Functionality
    const TabHighlighter = {
      set: function (element) {
        const rect = element.closest("li").getBoundingClientRect();
        const highlighter = document.querySelector(".tab-highlighter");
        highlighter.style.left = rect.left + "px";
        highlighter.style.width = rect.width + "px";
      },
      refresh: function () {
        const activeTab = document.querySelector(
          ".tabs ul.navbar-body li.active a"
        );
        if (activeTab) {
          TabHighlighter.set(activeTab);
        }
      },
    };

    document.addEventListener("click", (event) => {
      if (event.target.matches("navbar .tabs ul.navbar-body li a")) {
        const activeTab = event.target.closest("li");
        TabHighlighter.set(event.target);
        activeTab.parentElement
          .querySelector(".active")
          ?.classList.remove("active");
        activeTab.classList.add("active");
      }
    });

    window.addEventListener("resize", () => {
      TabHighlighter.refresh();
    });

    TabHighlighter.refresh();
  });
</script>

<div class="relative w-full min-h-screen">
  <!-- Background Image (fixed position) -->
  <div
    class="fixed inset-0 bg-cover bg-center"
    style="background-image: url('../mainpagemoviebackground.png');"
  ></div>

  <!-- Color Overlay -->
  <div class="fixed inset-0 bg-[#001016] opacity-90"></div>

  <!-- Main Content -->
  <div
    class="relative w-full z-10 gap-5 flex flex-col items-center text-white py-6"
  >
    <!-- Logo -->
    <div class="flex justify-center w-full">
      <img src="../logo.png" alt="Logo" class="w-28" />
    </div>

    <navbar class="w-full">
      <div class="navbar navbar-inverse tabs paper-shadow-bottom-z-2 p-4">
        <div class="container-fluid">
          <ul class="navbar-body list-inline font-poiret text-white text-xl">
            <li class="active"><a class="active" href="/">Home</a></li>
            <li><a href="/">Upcoming</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
          <div class="tab-highlighter"></div>
        </div>
      </div>
    </navbar>

    <div
      class="flex w-full flex-col items-center justify-center font-poiret text-white text-lg bg-black/70"
    >
      <div class="grid w-1/4 grid-cols-3 justify-items-center relative">
        <a
          class="relative p-2 text-white group hover:text-gray-300 hover:bg-white/10"
          href="/"
        >
          Upcoming
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a
          class="relative p-2 text-white group hover:text-gray-300 hover:bg-white/10"
          href="/"
        >
          FAQs
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a
          class="relative p-2 text-white group hover:text-gray-300 hover:bg-white/10"
          href="/"
        >
          About
          <span
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
          ></span>
        </a>

        <!-- Follow Line Bar-->
        <div
          class="absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"
        ></div>
      </div>
    </div>

    <!-- Main Text -->
    <div
      class="text-5xl text-white font-poiret bg-[#2A0B0B] opacity-70 w-full text-center p-6 justify-around"
    >
      <p class="text-4xl">Find Your Taste</p>
      <p class="text-lg font-thin">
        This is a AI website that can aquire your taste by just some option and
        this can <br />also help you find people with your similar taste and
        this website also do steaming of movies that <br />you choose
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
        <!-- Option 1 -->
        <button
          on:click={() => goto("mcq")}
          class={`absolute -left-[120px] top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 ${
            showOptions ? "translate-x-0" : "-translate-x-10"
          }`}
        >
          Filling Option
        </button>

        <!-- Option 2 -->
        <button
          on:click={() => goto("voice")}
          class={`absolute -right-28 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 ${
            showOptions ? "translate-x-0" : "translate-x-10"
          }`}
        >
          Ai Assistant
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  navbar a {
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    padding: 12px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    margin: 8px;
  }
  navbar a:hover {
    text-decoration: none;
  }
  navbar a:hover {
    color: rgba(0, 0, 0, 0.06);
  }

  navbar a {
    float: right;
  }

  /*Shadow*/
  navbar .paper-shadow-bottom-z-2 {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  }

  /*Setting Up Navbar Layouts*/
  navbar .navbar-inverse {
    color: white;
    background: black;
    opacity: 0.6;
    border: none;
    min-height: 50px;
    max-height: 50px;
    height: 50px;
  }
  navbar .container-fluid {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  navbar .navbar-body {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
  }

  /*Integrating Two Navbars Together*/
  navbar .tabs {
    z-index: 1;
    position: relative;
  }

  /*Styling Tabs*/
  navbar .tabs .navbar-body li.active a {
    color: #333;
  }
  navbar .tabs .navbar-body li {
    -webkit-transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
    -moz-transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
    -ms-transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
    -o-transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
    transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
  }
  navbar .tabs .navbar-body li:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  navbar .tabs .navbar-body li:active {
    background: rgba(0, 0, 0, 0.05);
  }
  navbar .tabs .navbar-body li a:hover,
  .tabs .navbar-body li a:active {
    color: #ffffff;
  }

  /*Styling Tab Highlighter*/
  navbar .tab-highlighter {
    height: 2px;
    width: 50px;
    margin-top: -2px;
    background: #ffffff;
    position: absolute;
    -webkit-transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
    -moz-transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
    -ms-transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
    -o-transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
    transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
  }

  /*Keyframes*/
  @keyframes SwiftSlide {
    100% {
      margin-right: 0;
      opacity: 1;
    }
  }
  @keyframes SwiftSlideToRight {
    100% {
      opacity: 0;
      margin-right: -30px;
    }
  }
</style>
