// import { async } from "@firebase/util";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { useState } from "react";
// import { Auth } from "firebase/auth";
// import ReSignup from "./registryForm";
// import { sendEmailVerification } from "firebase/auth";
// import { useContext } from "react";
// import { AuthContext } from "./auth";

// const RegistrywithEmail = () => {
//   const handlesubmit = async (values) => {
//     const auth = getAuth();
//     const { email, password } = values;
//     try {
//       const userC = createUserWithEmailAndPassword(auth, email, password);
//     } catch {
//       alert(alert);
//     }
//     // createUserWithEmailAndPassword(auth, email, password)
//     //   .then((userCredential) => {
//     //     // send verification mail.
//     //     userCredential.sendEmailVerification();
//     //     auth.signOut();
//     //     alert("Email sent");
//     //   })
//     //   .catch(alert);
//   };

//   return <ReSignup onSubmit={handlesubmit}></ReSignup>;
// };
// export default RegistrywithEmail;
