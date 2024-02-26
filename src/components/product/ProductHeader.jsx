import React from "react";
import "../../styles/product/productHeader.css";
import cement from "../../Images/home/cement.png";
import Icon from "../../Images/navbar/main_icon.png";
function ProductHeader() {
  return (
    <>
      <div className="Product_Header_main">
        <div className="about_us_header_text p-5 ">Products</div>
        <div className="images_home">
          {/* top */}
          <div>
            <img src={Icon} alt="icon" />
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

export default ProductHeader;
