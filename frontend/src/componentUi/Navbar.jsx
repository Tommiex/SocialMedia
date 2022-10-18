import "./css/Navbar.css";
import { FaSearch} from "react-icons/fa";

function Navbar() {
  return (
    <div className="Nav-box">
      <div className="searchBox">
        <input className="search" type="text" placeholder="  Search.." />
            <FaSearch></FaSearch>
      </div>
    </div>
  );
}
export default Navbar;
