// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFireStore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArO0S6Pw8oEoSf5AXn0WTKaFVfR0gHpJ8",
  authDomain: "fasion-ecommerce.firebaseapp.com",
  projectId: "fasion-ecommerce",
  storageBucket: "fasion-ecommerce.appspot.com",
  messagingSenderId: "982059176196",
  appId: "1:982059176196:web:f4a7ede68bd0a5c1360051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app)
const db = getFireStore(app)

export {auth, db}