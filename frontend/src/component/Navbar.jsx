import "./CSS/Navbar.css";
import { FaSearch } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../testAuth/auth";

function Navbar() {
  const user = useContext(AuthContext)
  const navigate = useNavigate()
  const auth = getAuth();
  function logout() {
    signOut(auth);
    navigate('/registration')
  }
  return (
    <div className="Nav-box">
      <div>Profile</div>
      <div className="searchBox">
        <input className="search" type="text" placeholder="Search.." />
        <div className="searchlogo">
          <FaSearch></FaSearch>
        </div>
      </div>
      <div className="Button-group">
        <button className="btn18">Login</button>
        <button className="btn19" id="btnLogout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Navbar;
