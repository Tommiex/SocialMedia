import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./container/Login";
import Test from "./data/dataTest";
import GmailSignUp from "./component/gmailSignUp";

import MainContainer from "./componentUi/MainContainer";
import { GoogleLogin } from "./component";
import Navbar from "./componentUi/Navbar";
import "./componentUi/css/Navbar.css"
function App() {
  return (
    <div className="allComponent">
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/registration" element={<Login />} />
        <Route path="/registration/signup" element={<GmailSignUp />} />
        <Route path="/main" element={<MainContainer />} />
        <Route path="/login" element={<GoogleLogin />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
