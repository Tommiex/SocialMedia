import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { GoogleLogin} from "../component";
import { GoogleAuthProvider } from "firebase/auth";
import LogIntt from "../testAuth/login";

import img from '../assets/img.jpg'
import './CSS/Login.css'

const Login = () => {
  return (
      <div className='Login'>
        <div className="imgLogin">
          <img src={img} />
        </div>
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
