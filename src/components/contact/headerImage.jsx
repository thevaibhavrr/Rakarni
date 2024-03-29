import React from "react";
import "../../styles/contact/contact_us_header.css";
import cement from "../../Images/home/cement.png";
import Icon from "../../Images/navbar/main_icon.png";

function HeaderImage() {
  return (
    <>
      <div className="contact_us_header_image">
        <div className="_header_text_for_bg p-5 text-white"
         data-aos="zoom-in"
         data-aos-offset="100"
         data-aos-delay="400"
         data-aos-duration="1200"
        >Contact Us</div>
        <div className="images_home text-center" >
          {/* top */}
          <div
           data-aos="zoom-in"
           data-aos-offset="100"
           data-aos-delay="400"
           data-aos-duration="1200"
          >
            <img src={Icon} alt="icon" className="company_icon" />
          </div>
          {/* cement */}
          <div>
            <img
              src={cement}
              alt="project"
              className="home_page_cement_image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderImage;
