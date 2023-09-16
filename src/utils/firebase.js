// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN7J-GwH9INx6NbS0AEPZAXLJuMmWYzCo",
  authDomain: "netflixgpt-89799.firebaseapp.com",
  projectId: "netflixgpt-89799",
  storageBucket: "netflixgpt-89799.appspot.com",
  messagingSenderId: "59580601968",
  appId: "1:59580601968:web:2b1bce31deb08c805a06b5",
  measurementId: "G-PCF2H953J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();