import React from "react";
import "../../styles/about/RakarnisVision.css";
import CEO from "../../Images/about/CEO.png";
import Worker from "../../Images/about/worker.png";

function RakarnisVision() {
  return (
    <>
      <div className="main_RakarnisVision_div">
        {/* top */}
        <div className="RakarnisVision_div">
          {/* text */}
          <div className="w-100">
            Rakarni's Vision:"To emerge as the leading brand nationwide and
            worldwide in beautification & construction products, offering
            sustainable, eco-friendly solutions. Our commitment lies in
            boundary-less innovation and creativity, aiming to leave a lasting
            impact on every household globally by 2040."
          </div>
          {/* image */}
          <div className="w-100">
            <img src={CEO} alt="CEO" className="RakarnisVision_div-image" />
          </div>
        </div>
        {/* bottom */}
        <div className="RakarnisVision_div">
          {/* image */}
          <div className="w-100">
            <div className="">
              <img
                src={Worker}
                alt="CEO"
                className="RakarnisVision_div-image"
              />
            </div>
          </div>
          {/* text */}
          <div className="w-100">
            Rakarni's core values embody excellence and sustainability. We
            elevate spaces with innovative aesthetics ("Beautify Beyond
            Construction"), provide warm and sincere customer service ("Service
            with a Smile"), prioritize excellence in all endeavors ("Quality
            Over Cost"), and promote sustainability in construction
            ("Eco-Friendly White Revolution"). These values define our
            commitment to creating exceptional and environmentally conscious
            solutions.
          </div>
        </div>
      </div>
    </>
  );
}

export default RakarnisVision;
