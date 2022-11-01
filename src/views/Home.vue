<script setup>
import { useUserStore } from '../store/user';
import {useDatabaseStore} from "../store/database"
const userStore = useUserStore()
const databaseStore = useDatabaseStore()

databaseStore.getUrls()

</script>

<template>
    <div>

{{userStore.userData?.email}}
<div>

</div>

  </div>
</template>