
<template>
    <div>

    <div v-if="databaseStore.loadingDoc">Loading</div>
    <ul v-else>
      <li v-for="item of databaseStore.documents" :key="item.id">
        {{item.name}}
        {{item.short}}
      </li>
    </ul>

  </div>
</template>


  <script setup>
  import { useUserStore } from '../store/user';
  import {useDatabaseStore} from "../store/database"
  const userStore = useUserStore()
  const databaseStore = useDatabaseStore()

  databaseStore.getUrls()


  </script>