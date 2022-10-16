import React from "react";
import { Route, Routes} from 'react-router-dom'
import Login from './container/Login'
function App() {
  return (
    <Routes>
        <Route path='/Login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
