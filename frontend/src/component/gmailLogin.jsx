import React, { useEffect, useState, useContext, createContext, Children } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth ,signInWithEmailAndPassword} from 'firebase/auth'
import GmailSiginUp from "./gmailSignUp";
import Login from "./AuthSystem.js";

import "./CSS/gmailLogin.css";
export const alertPopup = createContext(alert)
const GmailLogin = () => {
  // const{CheckUser} = useContext(AuthContext)
  // const { Login }= UserAuth()
  const navigate = useNavigate();
  
  const [alertProps, setAlert] = useState('loginAlert')
  function CreateContext({Children}){
    return (
    <alertPopup.Provider value={alertProps}>
      {Children}
    </alertPopup.Provider>
    )
  }
  

  const Login= ()=> {
    const email = document.querySelector("#txtEmail").value
    const password= document.querySelector("#txtPassword").value
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(user){
          setAlert('loginAlert active')
          navigate('/main') 
        } else{
          alert('Email or Password wrong')
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    
}
  return (
    <div className="">
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
      
    </div>
  );
};

export default GmailLogin;
