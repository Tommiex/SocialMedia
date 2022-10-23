import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { GoogleLogin } from "../component";
import { GoogleAuthProvider } from "firebase/auth";
import LogIntt from "../testAuth/login";
// import { AuthContextProvider} from '../component/AuthSystem.js'
import img from '../assets/img.jpg'
import './CSS/Login.css'
// import {LoginAlert } from '../component/gmailLogin'
// import { alertContext } from '../component/gmailLogin'

const Login = () => {
  // const alertProps = useContext(alertContext)
  // console.log(alertProps)
  
  return (
      <div className='Login'>
        <div className='LoginState'>
            <div className='loginTitle'>Login Here</div>
            <LogIntt/>
            <div> Login with Google</div>
            <GoogleLogin/>
        </div>
      </div>
  );
};

export default Login;
