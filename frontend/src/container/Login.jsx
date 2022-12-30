import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import { GoogleLogin} from "../component";
import { GoogleAuthProvider } from "firebase/auth";
import LogIntt from "../testAuth/login";

import img from '../assets/img.jpg'
import './CSS/Login.css'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='center'>
    <div className='main'>
      <span className='title'>Login</span>
      <LogIntt/>
      <GoogleLogin/>
    </div>
  </div>
  );
};

export default Login;
