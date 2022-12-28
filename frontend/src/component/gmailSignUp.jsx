import React from "react";
import { useState,useContext} from "react";
import { AuthContext } from "../testAuth/auth";
import { useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./CSS/gmailSignUp.css";
import { userInputs } from "../formSource";
import { db, storage } from "../FirebaseConfig";
import {doc,getDoc,setDoc,addDoc,serverTimestamp,collection} from "firebase/firestore"
const GmailSignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({})
  const [password, setPassword] = useState(null);
  const [navBool, setNavBool] = useState(false)
  const currentUser = useContext(AuthContext);
  
    const getInputValue = (e) =>{
      const id = e.target.id
      const value = e.target.value

      setUserInfo({...userInfo, [id]:value})
    }
    console.log(userInfo);

    const handleAdd = async (e) => {
      e.preventDefault();
      const email = userInfo.Email;
      const pwd1 = userInfo.Password;
      const pwd2 = password;
    if (pwd1 == pwd2) {
      setPassword(pwd2);
      console.log("password");
    }
    const auth = getAuth();
      try {
        createUserWithEmailAndPassword(auth, email, pwd1)
        setNavBool(true)
        await setDoc(
          doc(db,"User",userInfo.name), //collection will auto generate ID, Doc can order ID
          {
            ...userInfo,
            timeStamp: serverTimestamp(),
          }
        );
        
      } catch (err) {
        console.log(err);
      }
    };
    if(navBool){
      navigate('/')
    }
  return (
    
    <div className="gmailSignUp">
      <form onSubmit={handleAdd}>
      {userInputs.map((input)=>(
        <div key={input.id}>
          <label>{input.label}</label>
          <input
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
            onChange={getInputValue}
          >
          </input>
        </div>
      ))}
      <button type="submit">
        setDoc
      </button>
      <div>
        <button
          onFocus={() => {
            navigate("/registration");
          }}
        >
          back to Login page
        </button>
        <button className="button" id="btnSignUp" onClick={handleAdd}>
          SignIn
        </button>
        
      </div>
    </form>
    </div>
  );
};

export default GmailSignUp;

// ทำให้เพิ่มuidได้
