import React from "react";
import "../styles/navbar.css";
import Icon from "../Images/navbar/main_icon.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="main_navbar_div">
        <div className="second_navbar_main_div">
          <div className="navbar_items_left_div">
          <Link to={"/"} className="css-for-link-tag">

            <img src={Icon} alt="navbar_logo" className="navbar_logo" />
            </Link>
          </div>
          <div className="navbar_items_right_div">
            <ul className="navbar_ul">
              <Link to={"/"} className=" css-for-link-tag">
                <li>Home</li>
              </Link>
              <Link to={"/about-us"} className=" css-for-link-tag">
                <li>About Us</li>
              </Link>
            
              <Link to={"/product"} className=" css-for-link-tag">
                <li>Products</li>
              </Link>
              <Link to={"/infrastructure"} className=" css-for-link-tag">
                <li>Infrastructure</li>
              </Link>
              <Link to={"/contact-us"} className=" css-for-link-tag">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
