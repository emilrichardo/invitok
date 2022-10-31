<script setup>
import image01 from "@/assets/image01.svg"
import mp3 from "@/assets/mp3/allofme.mp3"
import image02 from "@/assets/image02.svg"
import logo from "@/assets/logo.png"

console.log(image01);
</script>

<template>
    <section class="h-screen relative  flex flex-col justify-center">
        <div class="absolute left-0 -top-6 z-0">
          <img
            :src="image01"
            alt="Hoja 01"
            width=180
            height=280
            />
        </div>
        <div class="absolute right-0 -bottom-12 z-0">
          <img
            :src="image02"
            alt="Hoja 01"
            width=180
            height=280
            />
        </div>
        <div class="text-center ">
          <h4 class=" text-xl tracking-[6px]"><span class="antetitulo"></span></h4>

          <div class="mx-auto text-center max-w-[240px]">
            <h4 class="text-xs uppercase tracking-[5px]">Nos Casamos</h4>
            <img
            class="logo w-full inline-block"
            :src="logo"

            />

          </div>
        </div>

        <div class="text-center">
          <audio id="myAudio" controls preload="auto"  loop class="hidden mx-auto">
            <source :src="mp3" autoplay type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div class="text-right px-8  pt-12">
            <div id="audioPlayer" class="bg-white relative transition-all z-40 bg-opacity-50  rounded font-sans shadow-sm inline-flex px-6 py-2 ">
              <button id="playButton">
                play/pause
              </button>
              <div class="ml-4 text-left">
                <h4 id="titleSong" class="text-sm font-normal">All of me</h4>
                <h5 id="artistSong" class="text-xs">Jhon Legend</h5>
              </div>
            </div>

          </div>
        </div>

        <div id="keepDown" class="  absolute bottom-4 left-6 px-8 ">
          <div class=" font-sans">
            <div class="arrow-down scale-50">
              <div class="left bg-primary"></div>
              <div class="right bg-primary"></div>
            </div>
          </div>

        </div>

      </section>
</template>

<style>

/*arrow down mobile*/
.arrow-down{
  width:60px;
  height:40px;
  margin:0 0 0 -30px;
  position:absolute;
  left:50%;
  bottom:0px;
  -webkit-animation: arrow 1s 3s infinite ease-out alternate;

}

.arrow-down:hover{
   -webkit-animation-play-state: paused;
}

.left{
  position:absolute;
  height:5px;
  width:40px;

  -webkit-transform:rotate(240deg);
  top:10px;
  left:10px;
  -webkit-border-radius:4px;
  -webkit-transform-origin:5px 50%;
  -webkit-animation: leftArrow 0.5s 1s infinite ease-out alternate;
}

.right{
  position:absolute;
  height:5px;
  width:40px;

  -webkit-transform:rotate(-60deg);
  top:10px;
  left:15px;
  -webkit-border-radius:4px;
  -webkit-transform-origin:5px 50%;
  -webkit-animation: rightArrow 0.5s 1s infinite ease-out alternate;
}




@-webkit-keyframes arrow{
  0% {
    bottom:0px;
  }
  100%{
    bottom:150px;
  }
}


@-webkit-keyframes leftArrow{
  0% {
  }
  100%{
    -webkit-transform:rotate(225deg);
  }
}

@-webkit-keyframes rightArrow{
  0% {
  }
  100%{
    -webkit-transform:rotate(-45deg);
  }
}
</style>