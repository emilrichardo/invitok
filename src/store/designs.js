import {defineStore} from "pinia"
import { collection, query, getDocs, where, addDoc, deleteDoc, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { nanoid } from 'nanoid'
import router from "../router";

export const useDesignsStore = defineStore("database",{
    state:()=>({
        documents:[],
        loadingDoc: false,
        savingDoc: false,
    }),
    actions:{
        async getDesigns(){
            if(this.documents.length !== 0){
                return;
            }
            this.loadingDoc = true
            try {
                const q = query(collection(db, "designs"))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc =>{
                    this.documents.push({
                        id: doc.id,
                        ...doc.data()
                    })
                    console.log(doc.id);

                })


            } catch (error) {
                console.log(error);
            } finally{
                this.loadingDoc = false
            }
        },
        async addDesign(designObject){
            try {
                const objDoc = {
                    id: nanoid(6),
                    user: auth.currentUser.uid,
                    ...designObject
                }
                await  setDoc(doc(db, "designs", objDoc.id),objDoc)
                this.documents.push({
                    ...objDoc
                })

            } catch (error) {
                console.log(error);
            } finally{

            }
        },
        async deleteDesign(id){
            try {
                const docRef = doc(db,"designs", id)
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