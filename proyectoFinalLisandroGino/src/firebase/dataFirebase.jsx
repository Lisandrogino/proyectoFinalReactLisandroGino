// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFArydEFWFgtu2A7bQ9hISQWUTfz7ljQY",
  authDomain: "frikilibrery.firebaseapp.com",
  projectId: "frikilibrery",
  storageBucket: "frikilibrery.appspot.com",
  messagingSenderId: "398618736727",
  appId: "1:398618736727:web:1ca24c2cf3a826b26b0b12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);