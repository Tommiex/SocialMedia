import "./css/Navbar.css";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="Nav-box">
      <div className="searchBox">
        <input className="search" type="text" placeholder="  Search.." />
        <div className="searchlogo">
          <FaSearch></FaSearch>
        </div>
      </div>
      <div className="Button-group">
        <button className="button-17">SignUp</button>
        <button className="button-18">Login</button>
      </div>
    </div>
  );
}
export default Navbar;
