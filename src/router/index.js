import { createRouter, createWebHistory  } from "vue-router";
import Home from "./../views/Home.vue"
import Register from "./../views/RegisterView.vue"
import Login  from "../views/LoginView.vue"
import { useUserStore } from "../store/user";

const requireAuth = async(to,from,next)=>{
    const userStore = useUserStore()
    const user = await userStore.currentUser()
    if(user){
        next()
    }else{
        next("/login")
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: Home,
            beforeEnter: requireAuth
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