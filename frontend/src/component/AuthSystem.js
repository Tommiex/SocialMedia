import React, { useEffect, useState,useContext, createContext} from 'react'
import {
  AuthErrorCodes,
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from '../FirebaseConfig'
import firebaseApp from '../FirebaseConfig';
import { useNavigate, Redirect } from 'react-router-dom';

    
function SignUp(){
    const [user, setUser] = useState(null);
    const email = document.querySelector("#txtEmail").value
    const password= document.querySelector("#txtPassword").value

    firebaseApp.auth().createUserWithEmailAndPassword( email, password)
    .then((e) => {
        setUser(true)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    }
const Login = ()=>{
    const [userLogin, setuserLogin] = useState(false)
    const navigate= useNavigate()
    const email = document.querySelector("#txtEmail").value
    const password= document.querySelector("#txtPassword").value
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(user){
            setuserLogin(true)
        }else{
            setuserLogin(false)
        }
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    
}


const AuthContext = createContext()
export const AuthContextProvider = ({children})=> {
    const googleLogin = ()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth()
        signInWithPopup(auth ,provider)
        
    }
    
    return(
        <AuthContext.Provider value={{googleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth =()=>{
    return useContext(AuthContext)
}





export default {SignUp , Login};


