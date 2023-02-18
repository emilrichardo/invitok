<template>

   <h1>Template design</h1>

    {{ params }}
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const params = route.params; // read parameter id (it is reactive)




</script>