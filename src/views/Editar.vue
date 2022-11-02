<template>
    <h1>Editar</h1>
    {{route.params.id}}
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ingresar url" v-model="url"/>
        <button type="submit">editar</button>
      </form>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {useDatabaseStore} from "../store/database"
const databaseStore = useDatabaseStore()
const route = useRoute()

const handleSubmit=()=>{
databaseStore.updateUrl(route.params.id, url.value)
}

const url = ref("")
onMounted(async()=>{
     url.value = await databaseStore.leerUrl(route.params.id)
})
</script>