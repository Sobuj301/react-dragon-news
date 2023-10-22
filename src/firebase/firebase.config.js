// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8fN4YqFq4A5hP0XC1O5x1KRpIhNKDmjM",
  authDomain: "react-dragon-news-1eefd.firebaseapp.com",
  projectId: "react-dragon-news-1eefd",
  storageBucket: "react-dragon-news-1eefd.appspot.com",
  messagingSenderId: "90294171191",
  appId: "1:90294171191:web:30e0a9df8e3e49ad7971b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;