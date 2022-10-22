import { createRouter, createWebHistory  } from "vue-router";
import Home from "./../views/Home.vue"
import InvitadosList from "./../views/InvitadosList.vue"
import Invitacion  from "../views/InvitacionView.vue"

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
        },
        {
            path: "/invitacion/:id",
            name: "invitacion",
            component: Invitacion
        }
    ]
})

export default router