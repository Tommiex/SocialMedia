import React from "react";
import { Route, Routes} from 'react-router-dom'
import Login from './container/Login'
import Test from "./data/dataTest";
function App() {
  return (
    <Routes>
        <Route path='/Login' element={<Login/>}/>
        {/* <Route path='/test' element={<Test/>}/> */}
    </Routes>
  );
}

export default App;
