import React, { useContext, useId } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./auth";
import { auth } from "../FirebaseConfig";
import ReLogin from "./Loginform";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

const LogIntt = () => {
  const navigate = useNavigate();
  const currentUser = useContext(AuthContext);
  const handleSubmit = async (values) => {
    const { email, password } = values;
    // const constructor= (userId)=>{
    //   this.userId =auth().currentUser.uid
    console.log(currentUser)
    // }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // const token = localStorage.getItem(constructor);
      // console.log(token)
      navigate("/main");
    } catch (error) {
      alert(error);
    }
  };

  
  

  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/main");
  //   }
  // }, [currentUser]);

  return (
    <div>
      <ReLogin onSubmit={handleSubmit}></ReLogin>
    </div>
  );
};

export default LogIntt;
