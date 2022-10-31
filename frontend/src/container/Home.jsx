import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from "../componentUi/Navbar";
import Feed from '../component/Feed.jsx';
import UserProfile from '../component/UserProfile';
const Home = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div >
        <Routes >
          <Route path="/user-profile" element={<UserProfile/>}></Route>
          <Route path='/*' element={<Feed/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Home