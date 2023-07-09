import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB7xeEY-5Iwijx_u1J_h4mp590iD77cIUU",
    authDomain: "alquora-4118d.firebaseapp.com",
    projectId: "alquora-4118d",
    storageBucket: "alquora-4118d.appspot.com",
    messagingSenderId: "1033379787533",
    appId: "1:1033379787533:web:8ebae4e6258cc1a6f63644",
    measurementId: "G-PMBB1W7604"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const questionCollection = collection(db, "questions")

export const newsCollection = collection(db, "news")