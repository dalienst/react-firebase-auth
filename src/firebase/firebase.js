// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAWGbDy7liaEppkWlYdaXhLzuPAokbH47Q",
  authDomain: "react-authentication-94257.firebaseapp.com",
  projectId: "react-authentication-94257",
  storageBucket: "react-authentication-94257.appspot.com",
  messagingSenderId: "726865849794",
  appId: "1:726865849794:web:f87f89e620b08686e33a5b",
  measurementId: "G-JLV8ZC0ZLS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)