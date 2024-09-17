// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-9826a.firebaseapp.com",
    projectId: "mern-blog-9826a",
    storageBucket: "mern-blog-9826a.appspot.com",
    messagingSenderId: "42204072757",
    appId: "1:42204072757:web:5eee41d9ea3c9758951a7c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
