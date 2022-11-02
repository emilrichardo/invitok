
<template>
    <div>
      {{url}}
      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ingresar url" v-model="url"/>
        <button type="submit">enviar</button>
      </form>

    <div v-if="databaseStore.loadingDoc">Loading</div>
    <ul v-else>
      <li v-for="item of databaseStore.documents" :key="item.id">
        {{item.name}}
        {{item.short}} <br/>
        {{item.id}}
        <button @click="databaseStore.deleteUrl(item.id)">Eliminae</button>
      </li>
    </ul>

  </div>
</template>


  <script setup>
  import { useUserStore } from '../store/user';
  import {useDatabaseStore} from "../store/database"
import { ref } from 'vue';
  const userStore = useUserStore()
  const databaseStore = useDatabaseStore()

  databaseStore.getUrls()
  const url = ref("")

  const handleSubmit = ()=>{
     databaseStore.addUrl(url.value)
  }

  </script>