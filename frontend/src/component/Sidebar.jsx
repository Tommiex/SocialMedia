import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { sideMenu } from "../formSource.js";
import "./CSS/Sidebar.css";
const Sidebar = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  function logout() {
    signOut(auth);
    navigate("/registration");
  }
  return (
    <>
      <div className="mainSidebar">
        <div className="sideProfile">
          <img />
          <div>username</div>
        </div>
        <div className="sideMenu">
          {sideMenu.map((input) => (
            <>
              <NavLink 
                to={input.link} 
                className={input.style}>
                  {input.name}
              </NavLink>
            </>
          ))}
        </div>
        <div className="Button-group">
          <button className="btn19" id="btnLogout" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
