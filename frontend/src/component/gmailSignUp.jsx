import React from "react";
import { useState,useContext,useEffect} from "react";
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
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const [navBool, setNavBool] = useState(false)
  const currentUser = useContext(AuthContext);

    const getInputValue = (e) =>{
      const id = e.target.id
      const value = e.target.value

      setUserInfo({...userInfo, [id]:value})
      if(id=="Password"){
        setPassword(e.target.value)
      }
      if(id=="PasswordConfirmation"){
        setPasswordConfirmation(e.target.value)

      }
    }
    console.log(userInfo);

    useEffect(() => {
      console.log(userInfo)
    }, []);
    const handleAdd = async (e) => {
      e.preventDefault();
      if(password==passwordConfirmation!=null){
        console.log("success")
        const auth = getAuth();
        try {
          await createUserWithEmailAndPassword(auth, userInfo.Email, password)
          navigate("/")
          setDoc(
            doc(db,"User",userInfo.name), //collection will auto generate ID, Doc can order ID
            {
              ...userInfo,
              timeStamp: serverTimestamp(),
            }
            );
            
          } catch (err) {
            console.log(err);
          }
      }else{
        console.log("wrong password")
      }
      
    };
    console.log(password)
  return (
    
    <div className="gmailSignUp">
      <span className="title">Register</span>
      <form onSubmit={handleAdd} className="signupForm">
      <div className="loginForm">
        {userInputs.map((input) => (
          <>
            <div className="formInput" key={input.id}>
              <div className="Icon">{input.icon}</div>
              <input
                id={input.id}
                type={input.type}
                onChange={getInputValue}
                required="required"
              ></input>
              <span className="placeholder">{input.placeholder}</span>
              <span className="label">{input.label}</span>
            </div>
          </>
        ))}
      </div>
      <div className="btnGroup">
        <button
          onFocus={() => {
            navigate("/registration");
          }}
          className="signupBtn"
        >
          back to Login page
        </button>
        <button className="signupBtn" id="btnSignUp" onClick={handleAdd}>
          SignIn
        </button>
        
      </div>
    </form>
    </div>
  );
};

export default GmailSignUp;

// ทำให้เพิ่มuidได้
