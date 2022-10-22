import React from "react";
import { Route, Routes } from "react-router-dom";
// import Login from "./container/Login";
import Test from "./data/dataTest";
import GmailSignUp from "./component/gmailSignUp";

import MainContainer from "./componentUi/MainContainer";
import { GoogleLogin } from "./component";
import Navbar from "./componentUi/Navbar";
import "./componentUi/css/Navbar.css"
import ReSignup from "./testAuth/registryForm";
import ReLogin from "./testAuth/Loginform";
import Login from "./container/Login";
import LogIntt from "./testAuth/login";
import {AuthProvider} from "./testAuth/auth";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/registration" element={<Login />} />
          <Route path="/registration/signup" element={<GmailSignUp />} />
          <Route path="/main" element={<MainContainer />} />
          {/* <Route path="/login" element={<GoogleLogin />} /> */}
          <Route path="/test" element={<Test />} />
          {/* <Route path="/signup" element={<ReSignup />} /> */}
          <Route path="/login" element={<Login/>} />
          
          <Route path="/relogint" element={<ReLogin/>} />
          <Route path="/logintt" element={<LogIntt/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
