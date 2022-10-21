import { createRouter, createWebHistory  } from "vue-router";
import Home from "./../views/Home.vue"
import InvitadosList from "./../views/InvitadosList.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/invitados",
            name: "invitados",
            component: InvitadosList
        }
    ]
})

export default router