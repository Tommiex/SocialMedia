import { FaAccusoft } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import "./CSS/MenuContainer.css";

function MenuContainer() {
  return (
    <div className="subMenu">
      <div className="iconStyle">
        <FaHome className="homeIcon" />
      </div>
      <div className="iconStyle">
        <FaHeart className="loveIcon"/>
      </div>
    </div>
  );
}
export default MenuContainer;
