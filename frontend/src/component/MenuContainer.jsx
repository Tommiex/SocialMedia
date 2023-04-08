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
    </div>
  );
}
export default MenuContainer;
