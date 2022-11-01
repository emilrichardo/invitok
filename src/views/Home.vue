<script setup>
import { useUserStore } from '../store/user';
const userStore = useUserStore()
</script>

<template>
    <div>
   home
{{userStore.userData?.email}}
<div>

</div>

  </div>
</template>