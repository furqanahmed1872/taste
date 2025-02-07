<script lang="ts">
  import { goto } from "$app/navigation";
  import { onDestroy, onMount } from "svelte";
  import Progress from "svelte-carousel/src/components/Progress/Progress.svelte";
  import { writable, get } from "svelte/store";

  export let data;
  let { base64Audio1, base64Audio2, num } = data;
  let imageSrc = "../mute.png";
  let videoElement;
  let isPlaying = false;
  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: Blob[] = [];
  let audioUrl: string | null = null;
  let audio: HTMLAudioElement | null = null;
  let backgroundMusic: HTMLAudioElement | null = null;
  let showOverlay = true;
  let Proceed = false;
  interface Details {
    year: number | null;
    genre: string | null;
    storyline: string | null;
    type: string | null;
  }

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.start();

      mediaRecorder.ondataavailable = (event: BlobEvent) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        sendMessage(audioBlob, num);
        audioChunks = [];
      };
    } catch (error) {
      console.error("Permission denied or other error:", error);
      alert(
        "Microphone access is required to use this feature. Please enable it in your browser settings."
      );
    }
  }

  function stopRecording() {
    if (mediaRecorder) {
      mediaRecorder.stop();
    } else {
      console.error("MediaRecorder is not initialized.");
    }
  }

  // Function to get details from localStorage
  function getDetailsFromLocalStorage() {
    const storedDetails = localStorage.getItem("details");
    return storedDetails ? JSON.parse(storedDetails) : {};
  }

  // Function to update localStorage with the new details
  function updateLocalStorage(newDetails: object) {
    const currentDetails = getDetailsFromLocalStorage();
    const updatedDetails = { ...currentDetails };
    for (let key in newDetails) {
      if (newDetails[key] !== null && newDetails[key] !== undefined) {
        updatedDetails[key] = newDetails[key];
      }
    }
    localStorage.setItem("details", JSON.stringify(updatedDetails));
    checkAllParametersFulfilled(updatedDetails);
  }

  function checkAllParametersFulfilled(details: Details) {
    // Check if all required parameters (year, genre, storyline, and type) are filled
    if (
      ["year", "genre", "storyline", "type"].every(
        (key) => details[key] != null
      )
    ) {
      Proceed = true;
      console.log("All parameters fulfilled:");
    }
  }

  async function sendMessage(audioBlob: Blob, selectedVoice: number) {
    const voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];
    const formData = new FormData();
    formData.append("file", audioBlob, "speech.wav");
    formData.append("model", "whisper-1");
    formData.append("language", "en");
    formData.append("selectedVoice", voices[selectedVoice]);

    try {
      const response = await fetch("/api/voice-chat", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      const extractedDetails = data.extractedDetails;
      const currentDetails = getDetailsFromLocalStorage();
      const updatedDetails = { ...currentDetails, ...extractedDetails };
      updateLocalStorage(updatedDetails);

      if (response.ok) {
        if (data.base65Audio && !Proceed) {
          const audioBlob = new Blob(
            [Uint8Array.from(atob(data.base65Audio), (c) => c.charCodeAt(0))],
            { type: "audio/mpeg" }
          );
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          await audio.play();
          console.log("Audio playback successful");
        } else if (extractedDetails) {
          const audioBlob = new Blob(
            [Uint8Array.from(atob(base64Audio2), (c) => c.charCodeAt(0))],
            { type: "audio/mpeg" }
          );
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          await audio.play();
          console.log("Second audio playback successful");

          const queryParams = new URLSearchParams(getDetailsFromLocalStorage()).toString();
          setTimeout(() => {
            goto(`/result?${queryParams}`);
          }, 5000);
        }
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function toggleVideo() {
    if (isPlaying) {
      stopRecording();
      videoElement.play();
      imageSrc = "../mute.png";
    } else {
      startRecording();
      videoElement.pause();
      imageSrc = "../voice.png";
    }
    isPlaying = !isPlaying;
  }

  function playAudioAndContinue() {
    if (audio) {
      videoElement.play();
      audio
        .play()
        .then(() => {
          showOverlay = false;
        })
        .catch((err) => console.error("Error playing audio:", err));
    } else {
      showOverlay = false;
    }
    // if (backgroundMusic) {
    //   backgroundMusic
    //     .play()
    //     .catch((err) => console.error("Error playing music:", err));
    // }
  }

  onMount(() => {
    backgroundMusic = new Audio("/background-music.mp3");
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.4;
    if (base64Audio1) {
      const audioBlob = new Blob(
        [Uint8Array.from(atob(base64Audio1), (c) => c.charCodeAt(0))],
        { type: "audio/mpeg" }
      );
      audioUrl = URL.createObjectURL(audioBlob);
      audio = new Audio(audioUrl);
    }
  });
  onDestroy(() => {
    if (backgroundMusic) {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0; // Reset the music
    }
  });
</script>

<div class="relative w-full min-h-screen">
  {#if showOverlay}
    <div
      class="fixed inset-0 bg-black opacity-95 z-50 flex items-center justify-center"
    >
      <div class="text-center text-white">
        <p class="text-2xl mb-4">Welcome! Click to hear the greeting.</p>
        <button
          class="relative animate-pulse inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
          on:click={playAudioAndContinue}
        >
          <span
            class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"
          ></span>
          <!-- Top glass gradient -->
          <span
            class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"
          ></span>
          <!-- Bottom gradient -->
          <span
            class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"
          ></span>
          <!-- Left gradient -->
          <span
            class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"
          ></span>
          <!-- Right gradient -->
          <span
            class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"
          ></span>
          <span
            class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"
          ></span>
          <span
            class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"
          ></span>
          <span class="relative">Play Greeting</span>
        </button>
        <!-- <button
          class="relative px-5 py-2 font-medium text-white group"
          on:click={playAudioAndContinue}
        >
          <span
            class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-white/50 group-hover:bg-white/70 group-hover:skew-x-12"
          ></span>
          <span
            class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-white/70 group-hover:bg-white/70 group-hover:-skew-x-12"
          ></span>

          <span
            class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-white/60 -rotate-12"
          ></span>
          <span
            class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-white/40 -rotate-12"
          ></span>
          <span class="relative text-black"> Play Greeting</span>
        </button> -->
      </div>
    </div>
  {/if}

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
      "Discover Your Movie Taste!"
    </div>

    <div
      class="w-1/3 bg-gradient-to-b flex flex-col items-center justify-around from-black via-60% via-black/80 to-black/5 h-full"
    >
      <video
        bind:this={videoElement}
        data-test="video-content"
        preload="auto"
        src="/voice.mp4"
        playsinline
        loop
        draggable="false"
        class="w-1/2"
      >
        <track kind="captions" srclang="en" label="English" default />
      </video>

      <button
        type="button"
        class="filter invert brightness-0 rounded-full p-5 bg-white/10 animate-pulse mx-auto cursor-pointer"
        on:click={toggleVideo}
        aria-label="Toggle video"
      >
        <img src={imageSrc} alt="" width="50" height="50" />
      </button>
    </div>
  </div>
</div>
