import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { GoogleLogin, GmailLogin } from '../component'
import GmailSignUp from '../component/gmailSignUp'
import './CSS/Login.css'
const Login = () => {
  return (
    <div className='Login'>
        <div className='LoginState'>
            <GmailLogin/>
            <div> Login with Google</div>
            <GoogleLogin/>
        </div>
        
    </div>
  )
}

export default Login