import { NavLink } from "react-router-dom";

import { menu } from "../formSource";


import "./CSS/MenuContainer.css";

function MenuContainer() {
  
  return (
    <div className="subMenu">
      {menu.map((menus,index) => (
        <div key={index}>
          <NavLink 
            className="iconStyle"
            to={`/categories/${menus.name}`}
          >
            {menus.Icons}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
export default MenuContainer;
