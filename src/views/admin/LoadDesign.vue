<template>
    <div class="bg-light p-5 mt-3 mx-2">
        <h1>Load template {{ name }} {{ slug }} {{ selected }}</h1>

        <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
            <input type="text" name="project_name" id="project_name" placeholder="name"  v-model="name">

            <input disabled type="text" name="slug" v-model="slug"  >

            <select v-model="selected" name="category" >
                    <option value="" disabled>Seleect category</option>
                    <option v-for="option in allCategories" :value="option.name" :disabled="option.disabled">{{ option.name }}</option>
            </select>
            <textarea v-model="detail" name="" id="" cols="10" rows="4"></textarea>
            <button type="submit">enviar</button>

        </form>

    </div>
    <div v-if="designs.loadingDoc">Loading</div>

    <ul>

        <li class="bg-dark text-light p-2 my-2" v-for="design in designs.documents " :key="design.id" >
            {{ design.name }} <br>
            {{ design.id }} <br>
            {{ design.category }} <br>
            {{ design.detail}} <br>
            <button   @click="designs.deleteDesign(design.id)">Eliminar</button>
            <button @click="router.push(`/invitation/${design.id}`)">Editar</button>
            <button @click="router.push({ name: 'designs', params: { design: design.id  } })">Editar</button>
        </li>


    </ul>


</template>

<script setup>

import { ref, computed, onMounted, watchEffect  } from 'vue';
import {useDesignsStore} from "../../store/designs"

import { useRouter } from 'vue-router';


import slugify from "../../functions/stringToSlug"

const router = useRouter()
const designs = useDesignsStore()

 designs.getDesigns()

const allCategories =  [
    {name : "boda", id:"01", path:"/boda"},
    {name : "aniversario", id:"02", path:"/aniversario"},
    {name : "reuniones", id:"03", path:"/reuniones"}
]
const name = ref("")
const selected = ref("")
const detail = ref("")

const slug = computed(()=>{
   return slugify(name.value)
})



 const handleSubmit = ()=>{


    const invitation =  {
        name: name.value,
        category:selected.value,
        path: slug.value,
        detail: detail.value

    }
    designs.addDesign(invitation)


 }


</script>