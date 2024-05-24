// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3e68e.firebaseapp.com",
  projectId: "mern-estate-3e68e",
  storageBucket: "mern-estate-3e68e.appspot.com",
  messagingSenderId: "823419234962",
  appId: "1:823419234962:web:9d963cb490a55e889fd44b"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);