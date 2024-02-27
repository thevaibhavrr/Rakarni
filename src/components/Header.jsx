import React from "react";
import Navbar from "./navbar";
import "../styles/header.css"
import SmallNavbar from "./VerticalNavbar";

function Header() {
  return (
    <>
      <div className="" >
        {/* navbar for small screen */}
        <div className="card_for_small_screen">
          <div className="back-ground-tea-image">
            <SmallNavbar />
          </div>
        </div>

        {/* for big screen navbar */}
        <div className="main_header_for_small_nav back-ground-tea-image">
          {/* <Navbar/> */}
        </div>
      </div>
    </>
  );
}

export default Header;
