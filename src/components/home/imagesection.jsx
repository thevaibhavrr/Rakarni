import React from "react";
import "../../styles/Home/imagesection.css";
import cement from "../../Images/home/cement.png";
import Icon from "../../Images/navbar/main_icon.png";
function HomePageImagesection() {
  return (
    <>
      <div className="Home_page_image"> 
        {/* image */}
        <div className="Home_page_image_section">
          <div className="images_home">
            {/* top */}
            <div>
              <img src={Icon} alt="icon" className="company_icon" />
            </div>
            {/* cement */}
            <div>
              <img src={cement} alt="project"  className="home_page_cement_image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageImagesection;
