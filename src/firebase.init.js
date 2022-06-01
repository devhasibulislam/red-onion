import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.GOOGLE_FIREBASE_apiKey,
    authDomain: process.env.GOOGLE_FIREBASE_authDomain,
    projectId: process.env.GOOGLE_FIREBASE_projectId,
    storageBucket: process.env.GOOGLE_FIREBASE_storageBucket,
    messagingSenderId: process.env.GOOGLE_FIREBASE_messagingSenderId,
    appId: process.env.GOOGLE_FIREBASE_appId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;