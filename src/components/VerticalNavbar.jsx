// import React, { useState, useEffect } from "react";
// import "../styles/verticalNavbar.css";
// import Icon from "../Images/navbar/main_icon.png";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [showVerticalNavbar, setShowVerticalNavbar] = useState(false);

//   const toggleVerticalNavbar = () => {
//     setShowVerticalNavbar(!showVerticalNavbar);
//   };

//   useEffect(() => {
//     // Function to handle clicks outside the navbar
//     const handleClickOutside = (event) => {
//       if (showVerticalNavbar) {
//         const navbar = document.getElementById("navbar_for_small_screen");
//         if (!navbar.contains(event.target)) {
//           setShowVerticalNavbar(false);
//         }
//       }
//     };

//     // Attach the event listener when the component mounts
//     document.addEventListener("click", handleClickOutside);

//     // Cleanup: Remove the event listener when the component unmounts
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [showVerticalNavbar]);

//   return (
//     <>
//       <div id="navbar_for_small_screen" className="navbar_for_small_screen">
//         <div className="d-flex " >

//           {/* icon */}
//           <div
//             className="text-white toggle_button"
//             onClick={toggleVerticalNavbar}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="30"
//               height="30"
//               fill="currentColor"
//               class="bi bi-filter-right"
//               viewBox="0 0 16 16"
//             >
//               <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5" />
//             </svg>
//           </div>
//           <div>
//             <div className="navbar_items_left_div">
//               <img src={Icon} alt="navbar_logo" className="navbar_logo" />
//             </div>
//           </div>
//         </div>
//         {showVerticalNavbar && (
//           <div className="navbar_for_small_screen_second">
//             <div className="navbar_items_left_div">
//               <img src={Icon} alt="navbar_logo" className="navbar_logo" />
//             </div>
//             <div>
//               <ul className="navbar_ul_for_small_screen">
// <Link to={"/"} className="css-for-link-tag">
//   <li>Home</li>
// </Link>
// <Link to={"/about-us"} className="css-for-link-tag">
//   <li>About Us</li>
// </Link>
// <Link to={"/contact-us"} className="css-for-link-tag">
//   <li>Contact Us</li>
// </Link>
// <Link to={"/product"} className="css-for-link-tag">
//   <li>Products</li>
// </Link>
// <Link to={"/infrastructure"} className="css-for-link-tag">
//   <li>Infrastructure</li>
// </Link>
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;

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
              <ul className="navbar_ul_for_small_screen">
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
