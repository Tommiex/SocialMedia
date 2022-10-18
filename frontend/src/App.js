import React from "react";
import { Route, Routes} from 'react-router-dom'
import Login from './container/Login'
import Test from "./data/dataTest";
import GmailSignUp from './component/gmailSignUp'

import MainContainer from "./componentUi/MainContainer";
import { GoogleLogin } from "./component";
function App() {
  return (
    
    <Routes>
        <Route path='/registration' element={<Login/>}/>
        <Route path='/registration/signup' element={<GmailSignUp/>}/>
        <Route path='/main' element={<MainContainer/>}/>
        <Route path='/login' element={<GoogleLogin/>}/>
        <Route path='/test' element={<Test/>}/>
    </Routes>
  );
}

export default App;
