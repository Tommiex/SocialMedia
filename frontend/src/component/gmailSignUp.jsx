<<<<<<< HEAD
// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import "./CSS/gmailSignUp.css";
// const GmailSignUp = () => {
//   const navigate = useNavigate();
//   const [password, setPassword] = useState(null);
//   function SignUp() {
//     const email = document.querySelector("#txtEmail").value;
//     const pwd1 = document.querySelector("#txtPassword").value;
//     const pwd2 = document.querySelector("#txtPasswordConfirmation").value;
//     if (pwd1 == pwd2) {
//       setPassword(pwd2);
//       console.log("SAME");
//     }
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   }
//   return (
//     <div className="gmailSignUp">
//       <label>
//         <span>Email</span>
//         <input
//           type="Email"
//           placeholer="Email"
//           className="authinput"
//           id="txtEmail"
//         ></input>
//       </label>
//       <label>
//         <span>Password</span>
//         <input
//           type="Password"
//           placeholer="Password"
//           className="authinput"
//           id="txtPassword"
//         ></input>
//       </label>
//       <label>
//         <span>Password confirmation</span>
//         <input
//           type="Password"
//           placeholer="Password confirmation"
//           className="authinput"
//           id="txtPasswordConfirmation"
//         ></input>
//       </label>
//       <div>
//         <button
//           onFocus={() => {
//             navigate("/registration");
//           }}
//         >
//           back to Login page
//         </button>
//         <button className="button" id="btnSignUp" onClick={SignUp}>
//           SignIn
//         </button>
=======
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./CSS/gmailSignUp.css";
const GmailSignUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(null);
  function SignUp() {
    const email = document.querySelector("#txtEmail").value;
    const pwd1 = document.querySelector("#txtPassword").value;
    const pwd2 = document.querySelector("#txtPasswordConfirmation").value;
    if (pwd1 == pwd2) {
      setPassword(pwd2);
      console.log("password");
      
    }
    // const password =()=>{
    //   if (pwd1 == pwd2) {
    //     // setPassword(pwd2);
    //     console.log("password");
    //     return pwd1
    //   }
    // }
    const auth = getAuth();
    // const handleSignUp = async (values)=>{
    //   const email = document.querySelector("#txtEmail").value;
    //   const pwd1 = document.querySelector("#txtPassword").value;
    //   try {
    //     await createUserWithEmailAndPassword(auth, email, password)
    //   }catch (error){
    //     alert(error)
    //   }
    // }
    createUserWithEmailAndPassword(auth, email, pwd1)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(password)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div className="gmailSignUp">
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
      <label>
        <span>Password confirmation</span>
        <input
          type="Password"
          placeholer="Password confirmation"
          className="authinput"
          id="txtPasswordConfirmation"
        ></input>
      </label>
      <div>
        <button
          onFocus={() => {
            navigate("/registration");
          }}
        >
          back to Login page
        </button>
        <button className="button" id="btnSignUp" onClick={SignUp}>
          SignIn
        </button>
>>>>>>> 93c6d1acbf5ed28143f5c9dcd19d9aa95028831c
        
//       </div>
//     </div>
//   );
// };

// export default GmailSignUp;
