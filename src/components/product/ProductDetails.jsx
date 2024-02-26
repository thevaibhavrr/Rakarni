import React from "react";
import "../../styles/product/ProductDetails.css";
import ECO from "../../Images/product/Project (22) 1.png";
import cement from "../../Images/product/product_cement.png";
import Satisfaction from "../../Images/product/Project (23) 1.png";
function ProductDetails() {
  return (
    <>
      <div className="main_ProductDetails_div">
        {/* top */}
        <div className="ProductDetails_left_side_main">
          {/* div */}
          <div className="product_details_text_main_div_for_bg">
            {/* text */}
            <div className="w-100 product_details_text_section">
              {/* hading */}
              <div className="Rakarni_ProductDetails_main_text_heading">
                Rakarni Gypsum
              </div>
              {/* message */}
              <div className="Rakarni_ProductDetails_main_text_message">
                "Stand before a modern gypsum facility, its minimalist design
                rising confidently. Without glass, its strength is evident.
                Write a piece inspired by this contemporary perspective,
                embracing innovation in the gypsum industry."
              </div>
              {/* <div className="my-5 bg-black" ></div> */}
              {/* button */}
              <div className="mt-5" >
                <button className="Know_more_button">Know more</button>
                {/* Know More */}
              </div>
            </div>
            {/* image */}
            <div className="w-75 text-center right_image_section_our_product">
              <img
                src={cement}
                alt="cement"
                className="cement_image_product_details"
              />
            </div>
          </div>
        </div>
        {/* bottom */}
        <div>
          {/* div */}
          <div className="Prodct_details_docs">
            {/* 1 */}
            <div>
              <img src={ECO} alt="" srcset="" className="product_doc_image" />
            </div>
            {/* 2 */}
            <div>
              <img
                src={Satisfaction}
                alt=""
                srcset=""
                className="product_doc_image"
              />
            </div>
            {/* 3 */}
            <div>
              <img src={ECO} alt="" srcset="" className="product_doc_image" />
            </div>
            {/* 4 */}
            <div>
              <img
                src={Satisfaction}
                alt=""
                srcset=""
                className="product_doc_image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
