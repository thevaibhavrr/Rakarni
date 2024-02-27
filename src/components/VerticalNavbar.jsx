import React, { useState } from "react";
import "../styles/verticalNavbar.css";
import Icon from "../Images/navbar/main_icon.png";
import { Link } from "react-router-dom";
function Navbar() {
  const [showVerticalNavbar, setShowVerticalNavbar] = useState(false);

  const toggleVerticalNavbar = () => {
    setShowVerticalNavbar(!showVerticalNavbar);
  };
  return (
    <>
      <div className="navbar_for_small_screen">
        <div className="text-white" onClick={toggleVerticalNavbar}>
          {/* <i className="bi bi-grip-horizontal" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-filter-right"
            viewBox="0 0 16 16"
          >
            <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5" />
          </svg>
          {/* <span>Icon</span> */}
        </div>
        {showVerticalNavbar && (
          <div className="navbar_for_small_screen_second" >
            <div className="navbar_items_left_div">
              <img src={Icon} alt="navbar_logo" className="navbar_logo" />
            </div>

            <div>
              <ul className="navbar_ul_for_small_screen">
                <Link to={"/"} className=" css-for-link-tag">
                  <li>Home</li>
                </Link>
                <Link to={"/about-us"} className=" css-for-link-tag">
                  <li>About Us</li>
                </Link>
                <Link to={"/contact-us"} className=" css-for-link-tag">
                  <li>Contact Us</li>
                </Link>
                <Link to={"/product"} className=" css-for-link-tag">
                  <li>Products</li>
                </Link>
                <Link to={"/infrastructure"} className=" css-for-link-tag">
                  <li>Infrastructure</li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
