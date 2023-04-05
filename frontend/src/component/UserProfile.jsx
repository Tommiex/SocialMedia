import React from 'react'
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import {useAuth } from "../testAuth/auth";
const UserProfile = () => {
  const currentUser = useAuth()
  console.log(currentUser)
  return (
    <>
      <div>UserProfile</div>
      <div></div>
    </>

  )
}

export default UserProfile