<script setup>

import "./styles/main.css"
import { useUserStore } from "./store/user";
import { RouterLink } from "vue-router";

const userStore = useUserStore()


</script>

<template>
  <header>
    <nav class="flex flex-col">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/dashboard">dasboard</RouterLink>
        <RouterLink to="/designs">Upload Desgin</RouterLink>
    </nav>
</header>




  <RouterView :key="$route.path"></RouterView>




</template>
