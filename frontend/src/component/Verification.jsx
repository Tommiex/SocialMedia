import { sendEmailVerification } from 'firebase/auth';
import React from 'react'
import { useState,useContext } from 'react';
import { useAuth } from "../testAuth/auth";
import {IoMdClose } from "react-icons/io"

import './CSS/Verification.css'
const Verification = () => {
    const currentUser = useAuth()
    const [alert, setAlert] = useState(true)
    const verify = async ()=>{
        try{
            await sendEmailVerification(currentUser.currentUser)
            setAlert(false)
        }catch (error){
            console.log(error)
        }
        
    }
  return (
    currentUser.currentUser?.emailVerified === false && alert === true && (
        <>
        <div className='verificationPopup'>
            <div>Please verify your email</div>
            <button onClick={verify}>verify</button>
            <div className='veriCloseIcon' onClick={()=>{setAlert(false)}}>
               <IoMdClose></IoMdClose>
            </div>
        </div>
        </>
    )

  )
}

export default Verification