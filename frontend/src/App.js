import React from "react";
import { Route, Routes} from 'react-router-dom'
import Login from './container/Login'
import Test from "./data/dataTest";
import GmailSignUp from './component/gmailSignUp'

function App() {
  return (
    
    <Routes>
        <Route path='/registration' element={<Login/>}/>
        <Route path='/registration/signup' element={<GmailSignUp/>}/>
        {/* <Route path='/test' element={<Test/>}/> */}
    </Routes>
  );
}

export default App;
