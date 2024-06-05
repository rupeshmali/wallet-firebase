// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJuPbvsu_vgc-W8Lwxptdhjk8qviXAmWU",
  authDomain: "transaction-management-5870f.firebaseapp.com",
  projectId: "transaction-management-5870f",
  storageBucket: "transaction-management-5870f.appspot.com",
  messagingSenderId: "277627730998",
  appId: "1:277627730998:web:b9a769e35d132f066f2c97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);