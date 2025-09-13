// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj3GCrl0zgoMLSbwqhfBoXIbCIpHe4e80",
    authDomain: "shopping-site-17490.firebaseapp.com",
    projectId: "shopping-site-17490",
    storageBucket: "shopping-site-17490.firebasestorage.app",
    messagingSenderId: "451672894853",
    appId: "1:451672894853:web:428c8c042597b26c0ba8ec"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()

