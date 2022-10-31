import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBphU2xgvnA23A4DYHWFYQary3CjWr0Utg",
    authDomain: "socialmediawebapp-6e05c.firebaseapp.com",
    projectId: "socialmediawebapp-6e05c",
    storageBucket: "socialmediawebapp-6e05c.appspot.com",
    messagingSenderId: "836796879112",
    appId: "1:836796879112:web:d99076a2cc961d319a5cbd"
})
export default firebaseApp;
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
