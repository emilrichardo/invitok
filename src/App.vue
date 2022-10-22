<script setup>


import {RouterLink, RouterView} from "vue-router"

</script>


<template>
  <RouterLink to="/">Inicio</RouterLink>
  <RouterLink to="/invitados">Invitados</RouterLink>
  <RouterLink to="/invitacion/0">Tarjeta</RouterLink>
  <div>
    <RouterView/>

  </div>



</template>
