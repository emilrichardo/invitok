import {defineStore} from "pinia"
import { collection, query, getDocs, where, addDoc, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { nanoid } from 'nanoid'
import router from "../router";


export const useDatabaseStore = defineStore("database",{
    state:()=>({
        documents:[],
        loadingDoc: false,
        savingDoc: false,
    }),
    actions:{
        async getUrls(){
            if(this.documents.length !== 0){
                return;
            }
            this.loadingDoc = true
            try {
                const q = query(collection(db, "urls"), where("user", "==", auth.currentUser.uid ))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc =>{
                    this.documents.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })

            } catch (error) {
                console.log(error);
            } finally{
                this.loadingDoc = false
            }
        },
        async addUrl(name){
            this.savingDoc = true
            try {
                const objDoc = {
                    name,
                    short: nanoid(4),
                    user: auth.currentUser.uid
                }
                const docRef = await addDoc(collection(db, "urls"),objDoc)
                this.documents.push({
                    ...objDoc,
                    id: docRef.id
                })
            } catch (error) {
                console.log(error);
            } finally{
                this.savingDoc = false
            }
        },
        async deleteUrl(id){
            try {
                const docRef = doc(db,"urls", id)
                const docSnap = await  getDoc(docRef)

                if(!docSnap.exists()){
                    throw new Error("no existe doc")
                }
                if(docSnap.data().user !== auth.currentUser.uid){
                    throw new Error ("No le pertenece")
                }
                await deleteDoc(docRef)
                this.documents = this.documents.filter(item=> item.id !== id)
            } catch (error) {
              console.log(error);
            }
        },
        async leerUrl(id){
            try {
                const docRef = doc(db, "urls", id);
                const docSnap = await getDoc(docRef)
                if(!docSnap.exists()){
                    throw new Error("no existe doc")
                }
                if(docSnap.data().user !== auth.currentUser.uid){
                    throw new Error ("No le pertenece")
                }
                return  docSnap.data().name

            } catch (error) {
                console.log(error);
            }
        },
        async updateUrl(id, name){

            try {
                const docRef = doc(db, "urls", id)
                const docSnap = await getDoc(docRef)

                if(!docSnap.exists()){
                    throw new Error("no existe doc")
                }
                if(docSnap.data().user !== auth.currentUser.uid){
                    throw new Error ("No le pertenece")
                }
                await updateDoc(docRef,{
                    name
                })

                this.documents = this.documents.map((item) => item.id === id ?  {...item, name: name} : item)
                router.push("/")

            } catch (error) {
                console.log(error);
            }
        }
    }
})