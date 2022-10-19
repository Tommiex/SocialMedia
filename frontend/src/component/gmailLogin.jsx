import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth ,signInWithEmailAndPassword} from 'firebase/auth'
import GmailSiginUp from "./gmailSignUp";
import Login from "./AuthSystem.js";

import "./CSS/gmailLogin.css";
const GmailLogin = () => {
  // const{CheckUser} = useContext(AuthContext)
  // const { Login }= UserAuth()
  const navigate = useNavigate();
  const Login= ()=> {
    const email = document.querySelector("#txtEmail").value
    const password= document.querySelector("#txtPassword").value
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(user){
          navigate('/main')
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    
}
  return (
    <div className="gmailLogin">
      <label>
        <span>Email</span>
        <input
          type="Email"
          placeholer="Email"
          className="authinput"
          id="txtEmail"
        ></input>
      </label>
      <label>
        <span>Password</span>
        <input
          type="Password"
          placeholer="Password"
          className="authinput"
          id="txtPassword"
        ></input>
      </label>
      <div className="btnState">
        <button 
        onFocus={() => navigate("/registration/signup")}
        >
        SignUp
        </button>
        <button className="button" id="btnLogin" onClick={Login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default GmailLogin;
