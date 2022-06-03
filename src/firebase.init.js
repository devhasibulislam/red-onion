// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXS6Y46mmoGpx_U39fojqJXNk4NVclhFk",
    authDomain: "red-onion-90267.firebaseapp.com",
    projectId: "red-onion-90267",
    storageBucket: "red-onion-90267.appspot.com",
    messagingSenderId: "25147200627",
    appId: "1:25147200627:web:f167a0f9a3b80f9d15c606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
