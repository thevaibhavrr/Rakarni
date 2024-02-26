import React from "react";
import "../../styles/Home/RAKARNI.css";
import smallBrush_cement from "../../Images/home/pop_for_big_brush.png"
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
          <div className="small_brash_image_div" >
            <img src={smallBrush_cement} alt="small_brush" className="small_brush_home_page_image img-fluid"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default RAKARNI;
