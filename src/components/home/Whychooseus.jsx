import React from "react";
import "../../styles/Home/Whychooseus.css";
import Qulaity_image from "../../Images/home/WHY 2.png";
import hundred_persent_image from "../../Images/home/WHY 4.png";
import bulb_image from "../../Images/home/WHY 5.png";
import watch_image from "../../Images/home/WHY 6.png";
function Whychooseus() {
  return (
    <>
      <div className="main_why_choose_us">
        <div className="main_why_choose_us_second">
          {/* left */}
          <div className="main_why_choose_us_second_left_side"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            <div className="main_why_choose_us_why "> WHY </div>
            <div className="main_why_choose_us_choose"> CHOOSE </div>
            <div className="main_why_choose_us_us">US?</div>
          </div>

          {/* right */}
          <div className="main_why_choose_us_second_right_side"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="400"
          data-aos-duration="1200"
          >
            <ul className="main_why_choose_us_second_right_side_ul">
              <li>
                Quality Assurance: Uncompromising commitment to superior product
                quality
              </li>
              <li>
                Innovation: Constantly evolving to meet your changing needs.
              </li>
              <li>
                Customer Satisfaction: Your satisfaction is our top priority.
              </li>
              <li>
                Timely Delivery: Reliable and punctual delivery to keep your
                projects on track.
              </li>
            </ul>
          </div>
        </div>
        {/* last */}
        <div className="why_choose_bottom_last_div" >
          {/* 1 */}
          <div className="whychoose_us_imges_parent_div" >
            {/* image */}
            <div
              data-aos="flip-right"
              data-aos-offset="200"
              data-aos-delay="400"
          data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <img className="why_choose_bottom_images" src={Qulaity_image} alt="" srcset="" />
            </div>
            {/* text */}
            <div className="why_choose_bottom_text" >Uncompromising commitment to superior product quality.</div>
          </div>
          {/* 2 */}
          <div className="whychoose_us_imges_parent_div" >
            {/* image */}
            <div
              data-aos="flip-right"
              data-aos-offset="200"
              data-aos-delay="400"
          data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <img className="why_choose_bottom_images" src={hundred_persent_image} alt="" srcset="" />
            </div>
            {/* text */}
            <div className="why_choose_bottom_text" >Constantly evolving to meet your changing needs.</div>
          </div>
          {/* 3 */}
          <div className="whychoose_us_imges_parent_div" >
            {/* image */}
            <div
              data-aos="flip-right"
              data-aos-offset="200"
              data-aos-delay="400"
          data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <img className="why_choose_bottom_images" src={bulb_image} alt="" srcset="" />
            </div>
            {/* text */}
            <div className="why_choose_bottom_text" >Your satisfaction is our top <br /> priority.</div>
          </div>
          {/* 4 */}
          <div className="whychoose_us_imges_parent_div" >
            {/* image */}
            <div
              data-aos="flip-right"
              data-aos-offset="200"
              data-aos-delay="400"
          data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <img className="why_choose_bottom_images" src={watch_image} alt="" srcset="" />
            </div>
            {/* text */}
            <div className="why_choose_bottom_text" > Reliable and punctual delivery to keep your projects on track</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whychooseus;
