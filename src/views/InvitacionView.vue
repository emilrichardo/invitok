<script setup>
import {useRoute} from "vue-router"
import CardGuest from "../components/CardGuest.vue";
import HeroVue from "../components/Hero.vue";
const route = useRoute()


</script>

<template>
    <div class="max-w-[410px] mx-auto relative shadow-lg bg-light">
        <HeroVue/>
        <CardGuest></CardGuest>
    </div>

    single invitado {{$route.params.id}}
</template>