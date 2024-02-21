import React from "react";
import "../../styles/Home/RAKARNI.css";
import smallbrush from "../../Images/home/small_brush.png";
function RAKARNI() {
  return (
    <>
      <div className="rakarni_main_div">
        <div className="contant_Area_main_div" >
          {/* welcome */}
          <div className="text-end" >
            {" "}
            <h1 className="welcome_to_rakarni_text"> WELCOME TO <br /> RAKARNI</h1>
          </div>
          <div>
            <img src={smallbrush} alt="small_brush" className="small_brush_home_page_image"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default RAKARNI;
