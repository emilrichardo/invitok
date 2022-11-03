<script setup>

import "./styles/main.css"
import { useUserStore } from "./store/user";

const userStore = useUserStore()


</script>

<template>

  <nav v-if="!userStore.loadingSession" >
    <RouterLink to="/"  >Inicio</RouterLink>
    <RouterLink to="/dashboard"  v-if="userStore.userData" >Dashboard</RouterLink>
    <RouterLink to="/login" v-if="!userStore.userData" >Login</RouterLink>
    <RouterLink to="/register" v-if="!userStore.userData" >Register</RouterLink>
    <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
  </nav>


  <RouterView></RouterView>




</template>
