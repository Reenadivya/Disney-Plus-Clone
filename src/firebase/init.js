// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbMCJAnfFMK15XdKV0m2mx4fVGVDqP5Zw",
  authDomain: "disneyplus-clone-77474.firebaseapp.com",
  projectId: "disneyplus-clone-77474",
  storageBucket: "disneyplus-clone-77474.appspot.com",
  messagingSenderId: "879876465097",
  appId: "1:879876465097:web:c4fbb74f560e83e1b6c818",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
