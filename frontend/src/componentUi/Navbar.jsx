import "./css/Navbar.css";
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
    navigate('/logintt')
    console.log(user)
  }
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
      <button className="button" id="btnLogout" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
export default Navbar;
