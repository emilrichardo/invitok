<template>
    design

    {{ params }}
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const params = route.params; // read parameter id (it is reactive)




</script>