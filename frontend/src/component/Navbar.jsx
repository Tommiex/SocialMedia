import "./CSS/Navbar.css";
import { FaSearch } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Nav-box">
      <div className="searchBox">
        <input className="search" type="text" placeholder="Search.." required={true}/>
        <div className="searchlogo">
          <FaSearch></FaSearch>
        </div>
      </div>
      <button className="navSignIn" onClick={()=>{navigate("/registration")}}>sign in</button>
    </div>
  );
}
export default Navbar;
