import React from "react";
import "../../styles/Home/Ourproduct.css";
import cement from "../../Images/home/cement.png";

function Ourproduct() {
  return (
    // 1-prerent
    <div className="our-product-main-prerent">
      {/* left */}
      <div className="our-product-left-sanction">
        {/* image */}
        <div className="cement-image-out-product">
          <img src={cement} alt="" srcset="" className="img-fluid home_page_our_product_cement_image" />
        </div>
      </div>
      {/* right */}
      <div className="our-product-right-sanction ">
        <div className="our-product-text-sanction">
          <div className="our-product-text">OUR PRODUCT</div>
          <div className="out_product_message">
            Discover our high-quality gypsum powder, finely ground and
            meticulously processed for exceptional purity and consistency.
            Widely used in construction, agriculture, and manufacturing, our
            gypsum powder offers excellent binding properties and enhances soil
            structure in agriculture. At Rakarni, quality is our priority, and
            we offer customized solutions to meet your specific needs. Trust us
            for environmentally friendly gypsum powder solutions that deliver
            superior performance in every application.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourproduct;
