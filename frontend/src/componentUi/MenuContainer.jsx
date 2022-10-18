import { FaAccusoft } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import "./css/main.css";

function MenuContainer() {
  return (
    <>
      <div className="iconStyle">
        <FaHome className="homeIcon" />
      </div>
      <div className="iconStyle">
        <FaHeart className="loveIcon"/>
      </div>
    </>
  );
}
export default MenuContainer;
