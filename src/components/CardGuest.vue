<template>
    <section class="z-10 relative  flex flex-col justify-center px-4">
        <div class="text-center">
          <i class="iconBird text-center"></i>
          <h4 class="mt-14 text-2xl tracking-wide font-normal"><span class="tituloInvitacion"></span></h4>
          <p class="cuerpoInvitacion mt-4 mx-auto max-w-[225px] text-lg tracking-wide leading-6  "></p>

          <div class="cardInvitation font-mono mt-14 mb-8 text-left bg-gradient-to-bl from-primary via-primary to-[#c0b057]   text-light shadow-sm rounded-2xl px-8 py-8">
            <h5>* Personal (<span class="personal"></span>)</h5>
            <h4 class="text-xl text-center my-4"><span class="nombres"></span></h4>

            <div class="grid grid-cols-2 text-center py-8">
              <div class="vestimenta flex flex-col border-r border-light border-dashed ">
                <i class="iconVestimenta mb-2"></i>
                <p>Formal</p>
              </div>
              <div class="mesa flex flex-col">
                <i class="iconMesa mb-2"></i>
                Mesa:  --
              </div>
            </div>

            <div class="grid grid-cols-2 mt-8">
              <div class="piecard text-xs">
                <p>(*) Respetar cantidad de invitados</p>
                <h6>ID: F19<span class="id"></span></h6>
              </div>
              <div class="qr text-right">
                <i class="iconQr"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>