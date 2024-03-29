import React from "react";
import "../../styles/Home/Rakranibig.css";
function Rakranibig() {
  return (
    <>
      <div className="Rakranibig_mian_div">
        <div className="left_side_div_of_Rakranibig_main"></div>
        <div className="right_side_div_of_Rakranibig_main">
          {/* top */}
          <div className="text-end">
            {/* heading */}
            <div className="welcome_to_rakarni_text_for_big text-black"
             data-aos="zoom-in"
             data-aos-offset="200"
             data-aos-delay="400"
          data-aos-duration="1200"
             data-aos-mirror="true"
            >
              WELCOME TO RAKARNI
            </div>
            {/* message */}
            <div className="Rakranibig_message_div_parent">
              <div className="Rakranibig_message_div"
               data-aos="zoom-in"
               data-aos-offset="200"
               data-aos-delay="400"
          data-aos-duration="1200"
               data-aos-mirror="true"
              >
                Welcome to Rakarni, where quality meets innovation. Since 2016,
                we've been your trusted partner for superior gypsum products.
                Explore our range and experience excellence today.
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="right_side_div_of_Rakranibig_main_boottom"
           data-aos="zoom-in"
           data-aos-offset="200"
           data-aos-delay="400"
           data-aos-duration="1200"
          >
            Our Premier Destination for High-Quality Gypsum Solutions.
          </div>
        </div>
      </div>
    </>
  );
}

export default Rakranibig;
