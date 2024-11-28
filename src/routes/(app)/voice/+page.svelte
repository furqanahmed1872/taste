<script lang="ts">
  let imageSrc = "../voice.png"; // Initial image source
  let videoElement; // Reference to the video element
  let isPlaying = true; // Flag to track if the video is playing
  let recording = false;
  let mediaRecorder: any;
  let audioChunks: Blob[] = [];

  async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.start();
    recording = true;

    mediaRecorder.ondataavailable = (event: BlobEvent) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      sendMessage(audioBlob);
      audioChunks = [];
    };
  }

  async function sendMessage(audioBlob: any) {
    const formData = new FormData();
    formData.append("file", audioBlob, "speech.wav");
    formData.append("model", "whisper-1");
    formData.append("language", "en");
    try {
      const response = await fetch("/api/voice-chat", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok && data.audio) {
        const audioresponse = new Audio(`${data.url}?t=${Date.now()}`);
        audioresponse.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function toggleVideo() {
    if (!isPlaying) {
      videoElement.pause();
      imageSrc = "../voice.png";
    } else {
      videoElement.play();
      imageSrc = "../mute.png";
    }
    isPlaying = !isPlaying;
  }
</script>

<div class="relative w-full min-h-screen">
  <div
    class="fixed inset-0 bg-cover bg-center blur-sm"
    style="background-image: url('../back.jpg');"
  ></div>

  <div class="fixed inset-0 bg-black opacity-85"></div>

  <div class="relative z-10 flex flex-col items-center text-white h-screen">
    <div class="flex justify-center my-2">
      <img src="../logo.png" alt="Logo" class="h-32 w-36" />
    </div>

    <div
      class="text-4xl font-medium text-black font-poiret bg-white opacity-35 w-full text-center p-1"
    >
      "Discover Your Movie Taste!"
    </div>

    <div class="w-1/3 bg-black bg-gradient-to-b from-black to-white/50 h-full">
      <div class="">
        <video
          bind:this={videoElement}
          data-v-27edef16=""
          data-test="video-content"
          preload="auto"
          src="https://cdn.dribbble.com/userupload/12266285/file/original-3b009b0c0dccfa3891b49158bb3dbd81.mp4"
          playsinline
          loop
          draggable="false"
          class="w-full h-full"
        >
          <track kind="captions" srclang="en" label="English" default />
        </video>
      </div>

      <div class="w-full">
        <button
          type="button"
          class="filter invert brightness-0 h-24 w-24 mx-auto cursor-pointer"
          on:click={toggleVideo}
          aria-label="Toggle video"
        >
          <img src={imageSrc} alt="" class="h-full w-full object-contain" />
        </button>
      </div>
    </div>
  </div>
</div>
