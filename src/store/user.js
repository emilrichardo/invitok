import {defineStore} from "pinia"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../router";
import { useDatabaseStore } from "./database";
export const useUserStore = defineStore("userStore",{
    state: () =>({
        userData: null,
        loadingUser: false,
        loadingSession: false
    }),
    actions:{

        async registerUser(email,password){
            this.loadingUser = true
            try{
               const {user} = await createUserWithEmailAndPassword(auth, email, password)
               this.userData = {email:user.email, uid:user.uid}
               router.push("/")
            } catch(error){
                console.log(error);
            } finally{
                this.loadingUser = false
            }
        },
        async loginUser (email, password){
            this.loadingUser = true
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                router.push("/dashboard")
            } catch (error) {
                console.log(error);
            } finally{
                this.loadingUser = false
            }
        },
        async logoutUser(){
            const databaseStore = useDatabaseStore()
            try {
                await signOut(auth)
                this.userData = null
                router.push("/login")
                databaseStore.$reset();


            } catch (error) {

            }
        },
        currentUser(){
            return new Promise((resolve,reject)=>{
               const unsuscribe = onAuthStateChanged(auth, user=>{
                    if(user){
                        this.userData = {
                            email:user.email,
                            uid:user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        }
                    } else{
                        this.userData = null
                    }
                    resolve(user)
                }, e => reject(e))
                unsuscribe()
            })
        },
        async handleSignInGoogle(){
            try {
                const provider =  new GoogleAuthProvider()
                const  {user} = await signInWithPopup(auth, provider)
                this.userData = {
                    email:user.email,
                    uid:user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }
                router.push("/dashboard")

            } catch (error) {
                console.log(error);
            }

        },
        async handleSignInGoogle(){
            try {
                const provider =  new GoogleAuthProvider()
                const  {user} = await signInWithPopup(auth, provider)
                this.userData = {
                    email:user.email,
                    uid:user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }
                router.push("/dashboard")

            } catch (error) {
                console.log(error);
            }

        },
    }
})