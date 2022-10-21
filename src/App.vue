<script setup>


import {RouterLink, RouterView} from "vue-router"


</script>


<template>
  <RouterLink to="/">Inicio</RouterLink>
  <RouterLink to="/invitados">Invitados</RouterLink>
  <div>
    <RouterView/>

  </div>



</template>
