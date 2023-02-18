<script setup>

import "./styles/main.css"
import { useUserStore } from "./store/user";
import { RouterLink } from "vue-router";


const userStore = useUserStore()

const mainMenu = [
  {name:"home", label:"Home",id:"01", path:"/"},
  {name:"register", label:"Register",id:"02", path:"/register"},
  {name:"login", label:"Login",id:"03", path:"/login"},
  {name:"designs", label:"Designs",id:"04", path:"/designs"},
]

</script>

<template>
  <header>
    <nav class="flex gap-2 bg-primary-light p-2">
        <RouterLink v-for="item in mainMenu" :to="item.path" :key="item.id">{{ item.label }}</RouterLink>

    </nav>
</header>




  <RouterView :key="$route.path"></RouterView>




</template>
