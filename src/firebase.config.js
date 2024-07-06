// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyByqJ1oZfsSPV9qwlsbWXUcTckBe0iLs2Q",
  authDomain: "react-social-media-app-1be51.firebaseapp.com",
  projectId:"react-social-media-app-1be51",
  storageBucket: "react-social-media-app-1be51.appspot.com",
  messagingSenderId: "260882417431",
  appId:  "1:260882417431:web:fbc5ff794845574afb5952",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

