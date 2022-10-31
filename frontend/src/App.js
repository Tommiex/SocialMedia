import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./data/dataTest";
import GmailSignUp from "./component/gmailSignUp";

import Login from "./container/Login.jsx";
import {AuthProvider} from "./testAuth/auth";
import Home from "./container/Home";

import CreatePost from "./component/CreatePost";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path="/registration" element={<Login />} />
          <Route path="/registration/signup" element={<GmailSignUp />} />
          <Route path="/test" element={<Test />} />
          <Route path="/createPost" element={<CreatePost/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
