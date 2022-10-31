import React, { useContext, useId } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./auth";
import { auth } from "../FirebaseConfig";
import ReLogin from "./Loginform";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const LogIntt = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const currentUser = useContext(AuthContext);
=======
  const [nav, setNav] = useState(false)
>>>>>>> 93c6d1acbf5ed28143f5c9dcd19d9aa95028831c
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
      setNav(true)
      navigate("/")

    } catch (error) {
      alert(error);
    }
  };
<<<<<<< HEAD

  
  

  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/main");
  //   }
  // }, [currentUser]);

=======
  
  const currentUser = useContext(AuthContext)

  useEffect(() => {
    if (currentUser && nav) {
      navigate("/");
    }
  }, [currentUser]);
  console.log(currentUser)
  
>>>>>>> 93c6d1acbf5ed28143f5c9dcd19d9aa95028831c
  return (
    <div>

        <ReLogin handleSubmit={handleSubmit}></ReLogin>
   
    </div>
  );
};

export default LogIntt;
