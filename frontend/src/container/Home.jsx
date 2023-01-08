
import React from 'react'
import { useState,useContext,useEffect} from "react";
import { Routes, Route} from 'react-router-dom'
import { Navbar, Feed, UserProfile,Search, Verification} from '../component'
import MenuContainer from '../component/MenuContainer'
import { useAuth } from "../testAuth/auth";
const Home = () => {
  const currentUser = useAuth();
  console.log(currentUser.currentUser)
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <MenuContainer></MenuContainer>
      <Verification></Verification>
      <div >
        <Routes >
          <Route path="/user-profile" element={<UserProfile/>}></Route>
          <Route path='/*' element={<Feed/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
      </div>
    </div>
  ) 
}

export default Home