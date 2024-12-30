<style>

.bg2 {
  z-index: 2;
  position: relative;
  height: 240px;
  width: 520px;
  margin: 100px auto;
 
  transform: rotate(10deg);
  background-image: url(https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/dfa50804-e6f6-4fa2-a732-693dbc50527b/37082735-6715-11ef-96ad-02805d6a02df?host=wbd-images.prod-vod.h264.io&partner=beamcom);
  background-size: cover;
  background-position: right -50px;
  background-color: rgb(0, 128, 255);
  box-shadow: 5px 5px 3px rgb(0, 0, 0);
  
}
.bg1 {
  z-index: 3;
  position: relative;
  height: 230px;
  width: 495px;
  margin: auto;
  transform: rotate(-10deg);
  background-image: url(https://c4.wallpaperflare.com/wallpaper/514/986/448/movies-django-unchained-quentin-tarantino-wallpaper-preview.jpg);
  background-size: cover;
  background-position: right -70px;
  background-color: lightslategray;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.866);
}
.bg {
  z-index: 4;
  position: relative;
  margin: auto;
  transform: rotate(-5deg);
  height: 225px;
  width: 470px;
  background-image: url(https://images.alphacoders.com/204/thumb-1920-204471.jpg);
  background-size: cover;
  background-position: right -50px;
  background-color: lightslategray;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);
}
.bg-text {
  width: 100%;
  position: absolute;
  display: inline-block;
  bottom: 0;
  left: 0;
}
.bg-text a {
  margin: 5px;
  float: right;
}

#bg1:target .bg {
  animation: ciut 1s forwards;
}
#bg1:target {
  animation: fre 0.3s forwards;
}
#bg2:target .bg1 {
  animation: ciut 1s forwards;
}
#bg2:target {
  animation: fre1 0.3s forwards;
}
#conbg:target .bg2 {
  animation: ciut1 1s;
}
@keyframes fre1 {
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fre {
  0% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
@keyframes ciut {
  0% {
    opacity: 1;
    transform: rotate(-5deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: rotate(360deg) scale(0);
  }
}
@keyframes ciut1 {
  0% {
    opacity: 0;
    transform: rotate(0deg) scale(0);
  }
  100% {
    opacity: 1;
    transform: rotate(370deg) scale(1);
  }
}
.text-shadow {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
<div
  class="fixed inset-0 bg-cover bg-center"
  style="background-image: url('../back.jpg');"
></div>

<!-- Color Overlay -->
<div
  class="fixed inset-0 bg-gradient-to-r from-[#828282]  to-[#000000] opacity-95 transition-opacity"
></div>

<!-- Main Content -->
<div
  class="relative z-10 text-white h-screen flex flex-col
                                            
  "
>
  <!-- Header Section -->
  <div
    class="relative text-4xl z-10 bg-gradient-to-r from-[#fff0] h-fit via-black font-semibold flex justify-center font-poiret text-black opacity-70 w-full text-center p-4"
  >
    <a href="/">
      <img
        src="../logo.png"
        alt="Logo"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 z-10 opacity-90"
      />
    </a>
    <div class="relative z-10 flex ">
      <b style="color: #fff0; user-select: none;">---------</b> 
     
    </div>
  </div>
<div class="flex justify-center items-center ">

<div class="  my-5 w-fit mx-10" >
 
  <div class="bg2" id="bg2">
      <div class="bg1" id="bg1">
        <div class="bg" id="bg">
          <div class="bg-text text-light ps-3">
            <div class="font-poiret text-3xl font-bold shadow-xl">Fight Club</div>
            <div class="flex gap-2">
              <div class="bg-[#ffffff4e] text-black p-2 rounded-lg font-poiret text-2xl my-2" >Action</div>
              <div class="bg-[#000000cf] p-2 rounded-lg font-poiret text-2xl my-2" >Crime</div>
      </div>   
            
                
            <a class="text-light" href="#bg1">
              <img src="./next.png" alt="" class="w-12"> </a>
          </div>
        </div>
        <div class="bg-text text-light ps-3">
          <div class="font-poiret text-3xl font-bold shadow-xl">Django Unchainged</div>
          <div class="flex gap-2">
            <div class="bg-[#ffffff75] text-black p-2 rounded-lg font-poiret text-2xl my-2" >Action</div>
            <div class="bg-[#000000cf] p-2 rounded-lg font-poiret text-2xl my-2" >Crime</div>
    </div>   
          
              
          <a class="text-light" href="#bg2">
            <img src="./next.png" alt="" class="w-12"> </a>
        </div>
      </div>
      <div class="bg-text text-light ps-3">
        <div class="font-poiret text-3xl font-bold shadow-xl">The Batman</div>
<div class="flex gap-2">
        <div class="bg-[#ffffff75] text-black p-2 rounded-lg font-poiret text-2xl my-2" >Action</div>
        <div class="bg-[#000000cf] p-2 rounded-lg font-poiret text-2xl my-2" >Crime</div>
</div>   
    
        <a class="text-light" href="#conbg">
          <img src="./next.png" alt="" class="w-12"> 
          </a>
      </div>
    </div>
  </div>
  <div class="text-2xl font-poiret px-6 mx-10 font-semibold rotate-3">A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.</div>
 
</div>
</div>


