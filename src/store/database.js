import {defineStore} from "pinia"
import { collection, query, getDocs, where, addDoc, deleteDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { nanoid } from 'nanoid'


export const useDatabaseStore = defineStore("database",{
    state:()=>({
        documents:[],
        loadingDoc: false
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
        }
    }
})