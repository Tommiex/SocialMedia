import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";


import { GoogleAuthProvider } from "firebase/auth";
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
         
        <div className='imgLogin'>
          <img src={img}/>
        </div>
        <div className='LoginState'>
            <div className='loginTitle'>Login Here</div>
            
            <div> Login with Google</div>
            
        </div>
      </div>
  );
};

export default Login;
