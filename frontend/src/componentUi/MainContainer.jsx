import React, { useEffect } from "react";
import { FaAccusoft } from "react-icons/fa";
import "./css/main.css";
import Navbar from "./Navbar";
import MenuContainer from "./MenuContainer";

function MainContainer() {
  return (
    <div className="App">
      <div className="menuContainer">
        <img
          className="logo"
          src="https://cdn.icon-icons.com/icons2/2973/PNG/512/deviantart_logo_icon_186901.png"
          alt=""
        />
        <div className="subMenu">
          <div>
            <MenuContainer></MenuContainer>
          </div>
        </div>
      </div>
      <main>
        {/* <Navbar></Navbar> */}
        <div className="mainContainer"></div>
      </main>
    </div>
  );
}
export default MainContainer;
