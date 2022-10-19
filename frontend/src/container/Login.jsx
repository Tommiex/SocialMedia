import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { GoogleLogin, GmailLogin } from '../component'
import GmailSignUp from '../component/gmailSignUp'
import { GoogleAuthProvider } from 'firebase/auth'
// import { AuthContextProvider} from '../component/AuthSystem.js'
import img from '../assets/img.jpg'
import './CSS/Login.css'
const Login = () => {
  return (
      <div className='Login'>
        <div className='imgLogin'>
          <img src={img}/>
        </div>
        <div className='LoginState'>
            <div className='loginTitle'>Login Here</div>
            <GmailLogin/>
            <div> Login with Google</div>
            <GoogleLogin/>
        </div>
      </div>
    // <AuthContextProvider>
    // </AuthContextProvider>
  )
}

export default Login