// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgCXLq2dJQiiKnm2r9iPOnrSLOnOHMXJ8",
  authDomain: "ema-jhon-simple-5404e.firebaseapp.com",
  projectId: "ema-jhon-simple-5404e",
  storageBucket: "ema-jhon-simple-5404e.appspot.com",
  messagingSenderId: "948486827716",
  appId: "1:948486827716:web:1fe2b5d767b99c2248e391",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
