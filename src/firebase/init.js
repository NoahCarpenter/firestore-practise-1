// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy-fHL2tHVU_kSzoc64Djm6HMFn-qJElk",
  authDomain: "fir-practise-6febf.firebaseapp.com",
  projectId: "fir-practise-6febf",
  storageBucket: "fir-practise-6febf.appspot.com",
  messagingSenderId: "447641928163",
  appId: "1:447641928163:web:8dae3de5abd026d3b9e0d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()