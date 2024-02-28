import React, { useState } from "react";
import "../styles/verticalNavbar.css";
import mainIcon from "../Images/navbar/main_icon.png";
import { Link } from "react-router-dom";
function SmallNavbar() {
  const [showVerticalNavbar, setShowVerticalNavbar] = useState(false);

  const toggleVerticalNavbar = () => {
    setShowVerticalNavbar(!showVerticalNavbar);
  };
  return (
    <>
      {/* navbar for small screen */}
      <div className="card_for_small_screen navbar_for_small_screen ">
        <nav className="navbar navbar-expand-lg px-2">
          <div
            className="d-flex justify-content-around w-100"
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="1000"
            data-aos-duration="5000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-center"
          >
           
            <div className="">
              <img src={mainIcon} alt="" srcset="" className="header-logo" />
            </div>
            <div className="" onClick={toggleVerticalNavbar}>
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
          </div>

          {/* Vertical Navbar */}
          {showVerticalNavbar && (
            <div className="vertical-navbar">
              <ul className="navbar_ul_for_small_screen"
                data-aos="zoom-out"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                <Link to={"/"} className="css-for-link-tag">
                  <li>Home</li>
                </Link>
                <Link to={"/about-us"} className="css-for-link-tag">
                  <li>About Us</li>
                </Link>
                <Link to={"/contact-us"} className="css-for-link-tag">
                  <li>Contact Us</li>
                </Link>
                <Link to={"/product"} className="css-for-link-tag">
                  <li>Products</li>
                </Link>
                <Link to={"/infrastructure"} className="css-for-link-tag">
                  <li>Infrastructure</li>
                </Link>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default SmallNavbar;
