import React from "react";
import "../../styles/product/productHeader.css";
import cement from "../../Images/product/product_header.png";
import Icon from "../../Images/navbar/main_icon.png";
function ProductHeader() {
  return (
    <>
      <div className="Product_Header_main">
        <div className="_header_text_for_bg p-5 ">Products</div>
        <div className="images_home about_us_header_image text-center">
          {/* top */}
          <div>
            <img src={Icon} alt="icon" className="company_icon" />
          </div>
          {/* cement */}
          <div className="pt-5">
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
