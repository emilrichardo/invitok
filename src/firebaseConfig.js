// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAg14ad7uqXFbVlpPdq2P8JpEdCeoN4pus",
  authDomain: "invitok-cc6c5.firebaseapp.com",
  projectId: "invitok-cc6c5",
  storageBucket: "invitok-cc6c5.appspot.com",
  messagingSenderId: "994877608429",
  appId: "1:994877608429:web:87b455dd0ca45cdad157e4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore()


export {auth,db};