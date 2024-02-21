import React from "react";
import "../styles/navbar.css";
import Icon from "../Images/navbar/main_icon.png";
function Navbar() {
  return (
    <>
      <div className="main_navbar_div">
        <div className="second_navbar_main_div">
          <div>
            <img src={Icon} alt="navbar_logo" />
          </div>
          <div className="navbar_items_right_div" >
            <ul className="navbar_ul" >
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Products</li>
              <li>Infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
