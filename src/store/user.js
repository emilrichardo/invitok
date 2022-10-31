import {defineStore} from "pinia"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
export const useUserStore = defineStore("userStore",{
    state:()=>({
        userData: null
    }),
    actions:{
        async registerUser(email,password){
            try{
               const {user} = await createUserWithEmailAndPassword(auth, email, password)
                console.log(user);
            } catch(error){
                console.log(error);
            }
        }
    }
})