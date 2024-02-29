import React from "react";
import "../../styles/about/RakarnisVision.css";
import CEO from "../../Images/about/CEO.png";
import Worker from "../../Images/about/worker.png";

function RakarnisVision() {
  return (
    <>
      <div className="main_RakarnisVision_div">
        <div className="main_RakarnisVision_div_contant" >
        {/* top */}
        <div className="RakarnisVision_div">
          {/* text */}
          <div className="RakarnisVision_message"
          
          data-aos="zoom-out"
          data-aos-offset="100"
          data-aos-delay="400"
          data-aos-duration="1200"

          >
            <span className="Rakarni_Vision_text"> Rakarni's Vision: </span>"To
            emerge as the leading brand nationwide and worldwide in
            beautification & construction products, offering sustainable,
            eco-friendly solutions. Our commitment lies in boundary-less
            innovation and creativity, aiming to leave a lasting impact on every
            household globally by 2040."
          </div>
          {/* image */}
          <div className="RakarnisVision_image d-flex"
           data-aos="zoom-out"
           data-aos-offset="100"
           data-aos-delay="400"
           data-aos-duration="1200"
          >
            <div>
              <img src={CEO} alt="CEO" className="RakarnisVision_div-image " />
            </div>
            <div className="RakarnisVision_image_name">Mr. Punit Garg</div>
          </div>
        </div>
        {/* bottom */}
        <div className="RakarnisVision_div RakarnisVision_div_bottom">
          {/* image */}
          <div className="RakarnisVision_image">
            <div className=""
             data-aos="zoom-out"
             data-aos-offset="100"
             data-aos-delay="400"
             data-aos-duration="1200"
            >
              <img
                src={Worker}
                alt="Worker"
                className="RakarnisVision_div-image-worker"
              />
            </div>
          </div>
          {/* text */}
          <div className="RakarnisVision_message"
           data-aos="zoom-out"
           data-aos-offset="100"
           data-aos-delay="400"
           data-aos-duration="1200"
          >
            <span className="Rakarni_Vision_text"> Rakarni's </span>core values
            embody excellence and sustainability. We elevate spaces with
            innovative aesthetics ("Beautify Beyond Construction"), provide warm
            and sincere customer service ("Service with a Smile"), prioritize
            excellence in all endeavors ("Quality Over Cost"), and promote
            sustainability in construction ("Eco-Friendly White Revolution").
            These values define our commitment to creating exceptional and
            environmentally conscious solutions.
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default RakarnisVision;
