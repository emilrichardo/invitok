<template>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="ingrese su email" v-model.trim="email" />
        <input type="password" placeholder="ingrese su contraseña" v-model.trim="password" />
        <button>Crear usuario</button>
    </form>

</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';

const userStore = useUserStore()

const email = ref("")
const password = ref("")


const handleSubmit = ()=>{
    if(!email.value || !password.value){
        return alert("completar formluario")
    }
     userStore.registerUser(email.value, password.value)
}

</script>