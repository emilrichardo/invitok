<template>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="ingrese su email" v-model.trim="email" />
        <input type="password" autocomplete="current-password" placeholder="ingrese su contraseña" v-model.trim="password" />
        <button :disabled="useUserStore.loadingUser">Crear usuario</button>

    </form>

    <button @click="signInWithGoogle" >SignIn Google</button>

</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';


const userStore = useUserStore()


const email = ref("emilrichardo2@gmail.com")
const password = ref("Nocheros1986")


const handleSubmit = async ()=>{
    if(!email.value ||  password.value < 6){
        return alert("completar formluario")   }
   await userStore.registerUser(email.value, password.value)
}

const signInWithGoogle = async ()=>{
    await userStore.handleSignInGoogle()
}

</script>