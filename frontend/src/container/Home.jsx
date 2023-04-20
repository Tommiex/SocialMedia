
import React from 'react'
import { useState,useContext,useEffect} from "react";
import { Routes, Route} from 'react-router-dom'
import { Navbar, Feed, UserProfile,Search, Verification, Sidebar,CreatePost} from '../component'
import MenuContainer from '../component/MenuContainer'
import { useAuth } from "../testAuth/auth";

import './CSS/Home.css'

export const Home = () => {
  const currentUser = useAuth();
  console.log(currentUser.currentUser)
  const getData = async (doc)=>{
    const values = doc
    console.log(values)
  }

  getData()
  return (
    <div className='homeFlex'>
        <Sidebar></Sidebar> 
        <div className='homeContent'>
          <Navbar/>
          <div className='feedFlex'>
          <MenuContainer></MenuContainer>
            <Routes>
              <Route path="/user-profile" element={<UserProfile/>}></Route>
              <Route path='/*' element={<Feed/>}></Route>
              <Route path='/search' element={<Search/>}></Route>
              <Route path="/createPost" element={<CreatePost/>}/>
            </Routes>
          </div>
        </div>
        <Verification></Verification>
    </div>
  )
}

