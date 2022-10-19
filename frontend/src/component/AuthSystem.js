import React, { useEffect, useState,useContext, createContext} from 'react'
import {
  AuthErrorCodes,
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from '../FirebaseConfig'
import firebaseApp from '../FirebaseConfig';
import { useNavigate, Redirect } from 'react-router-dom';

    






// export const AuthContext = createContext()
// export const AuthContextProvider = ({children})=> {
    
//     const googleLogin = ()=>{
//         const provider = new GoogleAuthProvider();
//         const auth = getAuth()
//         console.log('hi')
//         signInWithPopup(auth ,provider)
//         .then((result) => {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             // The signed-in user info.
//             const user = result.user;
            
//             // ...
//           }).catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.customData.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//           });
//     }
    
//     return(
//         <AuthContext.Provider value={{googleLogin}}>
//             {children}
//         </AuthContext.Provider>
        
//     )
// }
// export const UserAuth =()=>{
//     return useContext(AuthContext)
// }








