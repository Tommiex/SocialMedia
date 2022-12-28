import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Navbar, Feed, UserProfile} from '../component'
import MenuContainer from '../component/MenuContainer'

const Home = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <MenuContainer></MenuContainer>
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