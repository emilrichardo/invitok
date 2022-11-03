import { createRouter, createWebHistory  } from "vue-router";
import Home from "./../views/Home.vue"
import Register from "./../views/Register.vue"
import Login  from "../views/Login.vue"
import Dashboard from "../views/Dashboard.vue"
import Editar from "../views/Editar.vue"
import { useUserStore } from "../store/user";

const requireAuth = async(to,from,next)=>{
    const userStore = useUserStore()
    userStore.loadingSession = true
    const user = await userStore.currentUser()
    if(user){
        next()
    }else{
        next("/login")
    }
    userStore.loadingSession = false
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            beforeEnter: requireAuth
        },
        {
            path: "/invitation/:id",
            name: "editar",
            component: Editar,
            beforeEnter: requireAuth
        },
        {
            path: "/login",
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