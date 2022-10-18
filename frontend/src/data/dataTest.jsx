import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Test = () => {
  const [user, setUser] = useState("");

  // useEffect(() => {});
  function handleClick() {
    axios
      .get("http://localhost:9050/", { crossdomain: true })
      .then((response) => {
        // console.log(response.data);
        setUser(response.data);
        console.log(response.data);
        document.getElementById("blank").innerHTML = response.data;
      });
  }

  return (
    <div className="All-test">
      <p id="blank" onClick={handleClick}>
        fetch data
      </p>
    </div>
  );
};
export default Test;
