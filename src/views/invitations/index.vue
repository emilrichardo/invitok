
<script setup>
import { useRoute, RouterLink } from 'vue-router'
import {invitationObj, categoryObj} from "@/functions/classes.js"
import axios from "axios"
import { ref } from 'vue';
const { params  } = useRoute()

const invitationsBase = "/invitations"

/* const allCategories =[
    new categoryObj({name: "Bodas", id:"1", path:"/bodas", slug:"bodas"}),
    new categoryObj({name: "Cumpleaños", id:"2", path:"/aniversarios", slug:"aniversarios"}),
    new categoryObj({name: "Reuniones familiares", id:"3", path:"/reuniones", slug:"reuniones"}),
]
 */

 const allCategories = ref([])


 const publicEnv = import.meta.env.VITE_DOMAIN;


 const getData = async ()=>{
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts" )


        allCategories.value = data
    } catch (error) {
        console.log(error);
    }
 }

 console.log(allCategories );


 getData()

const allInvitations = [
  new invitationObj( {name: "vintage", path:"/vintage-01", slug:"vintage_01", id:"1", category: "bodas", detail: "Estilo antiguo"}),
  new invitationObj( {name: "floral",path:"/floral-01",  slug:"floral_01", id:"2", category: "bodas", detail: "Estilo florar"}),
  new invitationObj( {name: "moderna", path:"/moderna-01", slug:"moderna", id:"3", category: "aniversarios", }),
]




console.log();

</script>
<template>
    <h3>Categoria: {{ params.category }}</h3>
    <ul>
        <li v-for="post in allCategories">post</li>



        <!-- <li v-for="category in allCategories" :key="category.id">
             <router-link  :to="{path:category.path}">  c ategory </router-link>
        </li> -->

    </ul>

    <h3>Invitaciones</h3>
    <ul >
        <template v-for="invitation in allInvitations" :key="invitation.id" >
            <li v-if="invitation.category === params.category" >
                <a :href="invitation.category +  '/' + invitation.path">
                    {{ invitation.name }}
                    {{ invitation.category }}
                    {{ invitation.detail }}
                </a>

            </li>
        </template>

    </ul>
</template>