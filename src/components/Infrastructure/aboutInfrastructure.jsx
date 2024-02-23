import React from "react";
import "../../styles/infrastructure/aboutInfrastructure.css";
import left_image from "../../Images/infrastructure/AboutInfrastructure_left.png"
import right_image from "../../Images/infrastructure/AboutInfrastructure_right.png"
function AboutInfrastructure() {
  return (
    <>
      <div className="AboutInfrastructure_main_div">
        {/* top name */}
        <div className="INFRASTRUCTURE_heading_main_text" >INFRASTRUCTURE</div>
        {/* images */}
        <div className="Infrastructure_image_section_main_div" >
          {/* left */}
          <div className="Infrastructure_image_section_div" >
            <img src={left_image} alt="left" className="Infrastructure_image_left_image"  />
          </div>
          {/* center */}
          <div className="Infrastructure_image_section_div Infrastructure_image_section_div_text_section" >
              Welcome to our Infrastructure page, where we highlight the heart
              of our gypsum industry operations. Our cutting-edge facilities are
              designed for efficiency, precision, and sustainability. Equipped
              with advanced technology and automated systems, our manufacturing
              plants ensure consistent quality across our product range. With
              extensive warehousing and distribution capabilities, we guarantee
              timely delivery to clients worldwide. Committed to sustainability,
              we employ eco-friendly practices to minimize our environmental
              footprint. At [Company Name], our infrastructure is the backbone
              of our success in providing superior gypsum solutions to customers
              globally. Explore our capabilities further to see how we lead with
              innovation and reliability.
          </div>
          {/* end */}
          <div className="Infrastructure_image_section_div_last" >
          <img src={right_image} alt="left"  className="Infrastructure_image_left_image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutInfrastructure;
