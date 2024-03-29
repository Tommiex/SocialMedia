import React, { useContext, useId } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth } from "./auth";
import { auth } from "../FirebaseConfig";
import ReLogin from "./Loginform";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import '../container/CSS/Login.css'

const LogIntt = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false)
  const handleSubmit = async (values) => {
    const { txtEmail, txtPassword } = values;
    // const constructor= (userId)=>{
    //   this.userId =auth().currentUser.uid
    console.log(currentUser)
    // }

    try {
      await signInWithEmailAndPassword(auth, txtEmail, txtPassword);
      // const token = localStorage.getItem(constructor);
      // console.log(token)
      setNav(true)
      navigate("/")
    } catch (error) {
      alert(error);
    }
  };
  
  const currentUser = useAuth()

  useEffect(() => {
    if (currentUser && nav) {
      navigate("/");
    }
  }, [currentUser]);
  console.log(currentUser)
  
  return (
    <>

        <ReLogin handleSubmit={handleSubmit}></ReLogin>
   
    </>
  );
};

export default LogIntt;
