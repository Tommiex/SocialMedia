import React, { useEffect, useState} from 'react'
import {
  AuthErrorCodes,
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../FirebaseConfig'
const GmailLogin = () => {
 return(
  <div className='gmailLogin'>
    <input
      type='Email'
      render
    ></input>
    
  </div>
 )
}

export default GmailLogin