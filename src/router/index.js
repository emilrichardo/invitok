import { createRouter, createWebHistory  } from "vue-router";
import Home from "./../views/Home.vue"
import Register from "./../views/RegisterView.vue"
import Login  from "../views/LoginView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        }
    ]
})

export default router