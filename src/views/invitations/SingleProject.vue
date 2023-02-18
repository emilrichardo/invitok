<template>
    <RouterLink :to="`/invitations/${params.category}`">
        {{ params.category }}
    </RouterLink>

    <h2>single invitation: {{ params.design }}</h2>


</template>
<script setup>
import { useRoute } from 'vue-router'
const { params  } = useRoute()



</script>