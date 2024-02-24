import React from 'react'
import "../../styles/contact/contact_us_header.css"
import cement from "../../Images/home/cement.png";
import Icon from "../../Images/navbar/main_icon.png";

function HeaderImage() {
  return (
    <>
    <div className='contact_us_header_image' >
        <div className='about_us_header_text p-5 text-white' >Contact Us</div>
          <div className="images_home">
            {/* top */}
            <div>
              <img src={Icon} alt="icon" />
            </div>
            {/* cement */}
            <div>
              <img src={cement} alt="project"  className="home_page_cement_image" />
            </div>
          </div>
        </div>
    </>
  )
}

export default HeaderImage