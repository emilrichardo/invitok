<script setup>

import "./styles/main.css"
import { useUserStore } from "./store/user";

const userStore = useUserStore()


</script>


<template>
 <RouterLink to="/">Inicio</RouterLink>
  <RouterLink to="/login">Login</RouterLink>
  <RouterLink to="/register">Register</RouterLink>
  <button @click="userStore.logoutUser">Logout</button>

  <RouterView></RouterView>




</template>
