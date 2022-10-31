<template>
    <section id="calendar" class="py-24">
        <div class="text-center">
          <div class="iconCalendar w-16 inline-block mx-auto"></div>
          <h4 class="text-xl">Los esperamos el día</h4>
          <h3 class=" text-3xl font-light mt-4 mb-8">12 de diciembre</h3>

          <h5>Faltan:</h5>
        </div>
        <div id="countDown" class="flex justify-around text-center max-w-[220px] mx-auto ">
          <span class="counter_item flex flex-col">
            <span id="days" class="text-lg">000</span>
            <span class=" uppercase text-[0.3em]" id="daystxt">Días</span>
          </span>
          <span class="counter_item flex flex-col">
            <span id="hours"  class="text-lg">00</span>
            <span class=" uppercase text-[0.3em]" id="hourstxt">Horas</span>
          </span>
          <span class="counter_item flex flex-col">
            <span id="minutes"  class="text-lg">00</span>
            <span class=" uppercase text-[0.3em]" id="minutestxt">Minutos</span>
          </span>
          <span class="counter_item flex flex-col">
            <span id="seconds"  class="text-lg">00</span>
            <span class=" uppercase text-[0.3em]" id="secondstxt">Segundos</span>
          </span>
        </div>
      </section>
</template>