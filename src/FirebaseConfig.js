import { initializeApp } from "firebase/app";
import { getAuth ,onAuthStateChanged} from "firebase/auth";
import {getFirestore, collection, getDoc, getDocs} from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBphU2xgvnA23A4DYHWFYQary3CjWr0Utg",
    authDomain: "socialmediawebapp-6e05c.firebaseapp.com",
    projectId: "socialmediawebapp-6e05c",
    storageBucket: "socialmediawebapp-6e05c.appspot.com",
    messagingSenderId: "836796879112",
    appId: "1:836796879112:web:d99076a2cc961d319a5cbd"
})

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);


// Detect auth state
// onAuthStateChanged(auth, user =>{
//     if(user != null){
//         console.log('logged in!');
//     } else{
//         console.log('No user');
//     }
// })