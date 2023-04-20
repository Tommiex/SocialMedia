import React from "react";
import { Route, Routes , Navigate} from "react-router-dom";
import Test from "./data/dataTest";
import GmailSignUp from "./component/gmailSignUp";

import Login from "./container/Login.jsx";
import {AuthProvider} from "./testAuth/auth";
import {Home} from "./container/Home";
import FormInfo from "./component/Search";
import CreatePost from "./component/CreatePost";
import Testcount from "./component/test";
import TestData from "./component/test";
import MyComponent from "./gameTest";
// import Test from "./data/dataTest";
import "./App.css"

function App() {
  
  return (
    <div className="root">
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path="/registration" element={<Login />} />
          <Route path="/registration/signup" element={<GmailSignUp />} />
          {/* <Route path="/registration/info" element={<FormInfo/>} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/createPost" element={<CreatePost/>}/>
          {/* <Route path="/tests" element={<Testcount/>}/>
          <Route path="/testdata" element={<TestData/>}/> */}
          <Route path="/game" element={<MyComponent/>}/>
          {/* <Route path="/testdata" element={<Test/>}/> */}

          
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
