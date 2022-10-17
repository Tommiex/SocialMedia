import React, { useEffect, useState, useContext} from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
import GmailSiginUp from './gmailSignUp'
import Login, { userContext } from './AuthSystem.js'
import './CSS/gmailLogin.css'
const GmailLogin = () => {
  
  const navigate =  useNavigate()
 return(
  <div>
    <label>
      <span>Email</span> 
      <input
        type='Email'
        placeholer='Email'
        className='authinput'
        id='txtEmail'
        ></input>
    </label>
    <label>
      <span>Password</span> 
      <input
        type='Password'
        placeholer='Password'
        className='authinput'
        id='txtPassword'
        ></input>
    </label>
    <button className='button'id='btnLogin' onClick={Login} >Login</button>
    <button
    onFocus={() => navigate('/registration/signup')}
    >
      SignUp
    </button>
  </div>
 )
}

export default GmailLogin