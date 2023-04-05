import { NavLink } from "react-router-dom";

import { menu } from "../formSource";


import "./CSS/MenuContainer.css";

function MenuContainer() {
  
  return (
    <div className="subMenu">
      {menu.map((menus) => (
        <>
          <NavLink 
            className="iconStyle"
            to={`/categories/${menus.name}`}
          >
            {menus.Icons}
          </NavLink>
        </>
      ))}
      {/* <div className="iconStyle">
        <FaHome className="homeIcon" />
      </div>
      <div className="iconStyle">
        <FaHeart className="loveIcon"></FaHeart>
      </div> */}
    </div>
  );
}
export default MenuContainer;
