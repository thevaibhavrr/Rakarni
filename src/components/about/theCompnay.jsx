import React from "react";
import "../../styles/about/the_company.css";
import Building_Image from "../../Images/about/building_image.png";

function TheCompnay() {
  return (
    <>
      <div className="the_company_main_div">
        {/* main name */}
        <div className="the_company_second_main_heading">
          <h1 className=" the_company_rakarni_text_div">Rakarni</h1>
        </div>
        {/* second two div  */}
        <div className="the_company_second_div_main">
          {/* left */}
          <div className="the_company_left_side_div">
            <div className="the_company_left_side_div_contant_section">
              {/* the company */}
              <div className="d-flex w-100">
                <div className="the_company_before_div"></div>
                <div className="the_company_text px-2">The Company</div>
              </div>
              <div className="the_company_left_message">
                Rakarni established in 2016, is dedicated solely to crafting
                top-quality gypsum products. With advanced facilities and a
                skilled team, we specialize in manufacturing products like
                Plaster of Paris (POP) and gypsum boards. Our commitment to
                excellence drives every aspect of our operations, ensuring that
                we deliver superior gypsum solutions tailored to meet our
                clients' needs. Trust Maa Durga Gypsum Industries for unmatched
                quality and reliability in gypsum manufacturing.
              </div>
            </div>
          </div>
          {/* right image */}
          <div className="the_company_right_side_div">
            {/* image */}
            <div className="building_image_div">
              <div className="about_image_poistion">
                <img
                  src={Building_Image}
                  alt="building"
                  className="img-fluid building_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheCompnay;
