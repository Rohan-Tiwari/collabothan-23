// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLgDvX6dZZvorb-MfY5wxm-pB3Q2crXH8",
  authDomain: "sustainable-select.firebaseapp.com",
  projectId: "sustainable-select",
  storageBucket: "sustainable-select.appspot.com",
  messagingSenderId: "944301267317",
  appId: "1:944301267317:web:bb5147c60fe220f2109b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app