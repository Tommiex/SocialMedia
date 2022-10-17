import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignUp from './AuthSystem'
import './CSS/gmailSignUp.css'  
const GmailSignUp = () => {
  const navigate = useNavigate()
  return (
    <div className='gmailSignUp'>
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
    <label>
      <span>Password confirmation</span> 
      <input
        type='Password confirmation'
        placeholer='Password confirmation'
        className='authinput'
        id='txtPassword confirmation'
        ></input>
    </label>
    <div>
      <button
        onFocus={()=>{navigate('/registration')}}
      >back to Login page
      </button>
      <button className='button'id='btnSignUp' onClick={SignUp} >SignIn</button>
      <button className='button'id='btnLogout'>Logout</button>
    </div>
  </div>
 )
}

export default GmailSignUp