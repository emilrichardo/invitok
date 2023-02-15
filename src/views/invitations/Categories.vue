<script setup>
import { useUserStore } from "./store/user";

const userStore = useUserStore()
console.log(userStore);
</script>
<template>
    <h3>Categorias</h3>
    {{ $route.params.category }}
</template>