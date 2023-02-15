<template>
    <div>
      {{userStore.userData.email}}
      {{userStore.userData.displayName}}



      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ingresar url" v-model="url"/>
        <button type="submit" :disabled="databaseStore.savingDoc">enviar</button>
      </form>

    <div v-if="databaseStore.loadingDoc">Loading</div>
    <ul v-else>
      <li v-for="item of databaseStore.documents" :key="item.id">
        <h2>{{item.name}}</h2>


        <button   @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
        <button @click="router.push(`/invitation/${item.id}`)">Editar</button>
      </li>
    </ul>

  </div>
</template>


  <script setup>
  import { useUserStore } from '../store/user';
  import {useDatabaseStore} from "../store/database"
  import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
  const userStore = useUserStore()
  const databaseStore = useDatabaseStore()

  databaseStore.getInvitation()
  const url = ref("")



  const handleSubmit = ()=>{
     databaseStore.addUrl(url.value)
  }



  </script>