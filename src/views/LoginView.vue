<template>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="ingrese su email" v-model.trim="email" />
        <input type="password" placeholder="ingrese su contraseña" v-model.trim="password" />
        <button :disabled="useUserStore.loadingUser">Login</button>
    </form>

</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';



const userStore = useUserStore()


const email = ref("")
const password = ref("")


const handleSubmit = async ()=>{
    if(!email.value ||  password.value < 6){
        return alert("completar formluario")
    }

   await userStore.loginUser(email.value, password.value)


}

</script>