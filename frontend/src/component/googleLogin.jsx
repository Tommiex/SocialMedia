import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
// import { UserAuth} from './AuthSystem'

import "./CSS/googleLogin.css";
const GoogleLogin = () => {
  // const { googleLogin } = UserAuth()
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    console.log("hi");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (token) {
          navigate("/main");
        }

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <button
        className="googleLogin"
        onClick={() => {
          handleGoogleLogin();
        }}
      >
        <FcGoogle className="googleIcon" /> Sign in with Google
      </button>
      
    </div>
  );
};

export default GoogleLogin;