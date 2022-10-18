import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../FirebaseConfig";

const Test = () => {
  const [user, setUser] = useState("");

  function handleClick() {
    axios
      .get("http://localhost:9050/", { crossdomain: true })
      .then((response) => {
        setUser(response.data.map((x) => x.name));
        console.log(response.data.map((x) => x.name));
        document.getElementById("result").innerHTML = user;
      });
  }
  // forEach(element =>console.log(element))
  return (
    <div className="All-test">
      <p id="blank" onClick={handleClick}>
        fetch data
      </p>
      <p id="result"></p>
    </div>
  );
};
export default Test;
