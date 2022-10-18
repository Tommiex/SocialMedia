import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { GoogleLogin, GmailLogin } from '../component'
import GmailSignUp from '../component/gmailSignUp'
import { GoogleAuthProvider } from 'firebase/auth'
import { AuthContextProvider} from '../component/AuthSystem.js'
import './CSS/Login.css'
const Login = () => {
  return (
    <AuthContextProvider>
      <div className='Login'>
          <div className='LoginState'>
              <GmailLogin/>
              <div> Login with Google</div>
              <GoogleLogin/>
          </div>
      </div>
    </AuthContextProvider>
  )
}

export default Login