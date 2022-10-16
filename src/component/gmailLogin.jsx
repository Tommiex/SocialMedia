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
  <div>gmailLogin</div>
 )
}

export default GmailLogin