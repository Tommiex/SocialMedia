import React, { useEffect } from "react";
import { FaAccusoft } from "react-icons/fa";
import "./css/main.css";

import MenuContainer from "./MenuContainer";

function MainContainer() {
  return (
    <div className="App">
      <div className="menuContainer">
        <img
          className="logo"
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20211031%2Fpngtree-abstract-bg-image_914283.png&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fbg&tbnid=9dglnae999CBKM&vet=12ahUKEwilmb-53-n6AhVMj9gFHcg8BzoQMygCegUIARCQAQ..i&docid=RqmGaqA7j7LuSM&w=719&h=404&q=bg&ved=2ahUKEwilmb-53-n6AhVMj9gFHcg8BzoQMygCegUIARCQAQ"
          alt=""
        />
        <div className="subMenu">
          <div>
            <MenuContainer></MenuContainer>
          </div>
        </div>
       </div>
      <main></main>
    </div>
  );
}
export default MainContainer;
