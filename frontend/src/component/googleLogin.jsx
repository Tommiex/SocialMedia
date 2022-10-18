import React, { useEffect }from 'react'
import { FcGoogle } from 'react-icons/fc';
import { UserAuth} from './AuthSystem'

import './CSS/googleLogin.css'
const GoogleLogin = () => {
  const { googleLogin } = UserAuth()
  
  function handleGoogleLogin(){
    try{
      googleLogin()
    } catch(error){
      console.log(error)
    }
    console.log(UserAuth)
  }
  return (
    <button className='googleLogin' onClick={() =>{handleGoogleLogin()}}>
      <FcGoogle className='googleIcon'/> Sign in with Google
    </button>
  )
}

export default GoogleLogin