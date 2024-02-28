import React from "react";
import "../../styles/Home/Aboutus.css";
import worker_image from "../../Images/home/about_us_image.png";
function Aboutus() {
  return (
    <>
      <div className="about_us_main_div_home_page">
        <div className="about_us_contant_div_main">
          {/* left image */}
          <div
            className="about_us_Image_section"
            // data-aos="zoom-in"
            // data-aos-offset="200"
            // data-aos-delay="100"
            // data-aos-duration="500"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
          >
            <img
              src={worker_image}
              alt="worker_image"
              srcset=""
              className="worker_image_about_page"
            />
          </div>
          {/* right text */}
          <div
            className="about_us_text_contant_section"
            // data-aos="zoom-in"
            // data-aos-offset="200"
            // data-aos-delay="100"
            // data-aos-duration="500"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
          >
            <div className="about_us_text_contant_section_heading">
              ABOUT US
            </div>
            <div className="about_us_text_contant_section_message">
              Rakarni established in 2016, is dedicated solely to crafting
              top-quality gypsum products. With advanced facilities and a
              skilled team, we specialize in manufacturing products like Plaster
              of Paris (POP) and gypsum boards. Our commitment to excellence
              drives every aspect of our operations, ensuring that we deliver
              superior gypsum solutions tailored to meet our clients' needs.
              Trust Maa Durga Gypsum Industries for unmatched quality and
              reliability in gypsum manufacturing.
            </div>
            <div className="about_us_Know_more_button">Know more</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
