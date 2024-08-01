// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDayYiwP0f4u8KFLHxA_S23u_dXxX754TY",
  authDomain: "inventory-management-4f764.firebaseapp.com",
  projectId: "inventory-management-4f764",
  storageBucket: "inventory-management-4f764.appspot.com",
  messagingSenderId: "850759132728",
  appId: "1:850759132728:web:a2f5b9f8a2a6db4efbe8cd",
  measurementId: "G-60V9NY7JSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}