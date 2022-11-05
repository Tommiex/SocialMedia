// function Testcount() {
//   function sss() {
//     const object1 = {
//       a: "somestring",
//       b: 42,
//       c: false,
//     };
//     console.log(Object.keys(object1));
//     console.log(Object.keys(object1).length);
//   }
//   return (
//     <div>
//       <button onClick={sss}>ssss</button>
//     </div>
//   );
// }
// export default Testcount
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../FirebaseConfig";

const TestData = () => {
  const [dataa, setDataa] = useState("");

  function handleClick() {
    axios
      .get("http://localhost:9050/", { crossdomain: true })
      .then((response) => {
        setDataa(response.data.map((x) => x.number));
        console.log(response.data.map((x) => x.number));
        document.getElementById("result").innerHTML = dataa;
      });
  }
  // forEach(element =>console.log(element))
  return (
    <div className="All-test">
      <p id="blank" onClick={handleClick}>
        fetch dataqqqq
      </p>
      <p id="result"></p>
    </div>
  );
};
export default TestData