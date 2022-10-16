import React from 'react'

import { GoogleLogin, GmailLogin } from '../component'
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