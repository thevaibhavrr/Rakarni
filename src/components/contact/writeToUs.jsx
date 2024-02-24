import React from "react";
import "../../styles/contact/write_to_us.css";
import phone from "../../Images/contact-us/Phone.png";
import email from "../../Images/contact-us/Email.png";
function WriteToUs() {
  return (
    <>
      <div className="main_contact_us_write_to_us">
        {/* left side */}
        <div className="write_to_us_bg">
          <div className="write_to_us_contant">
            {/* left */}
            <div className="write_to_us_contant_left_side">
              {/* contact us text */}
              <div className="write_to_us_contact_us_button">Contact Us.
              <div className="yellow_color_box"></div>
               </div>
              
              {/* details */}
              <div className="write_to_us_contact_details">
                {/* email */}
                <div className="write_to_us_contact_email_phone">
                  <div className="">
                    <img
                      src={phone}
                      alt="phone"
                      className="write_to_us_contact_image"
                    />
                  </div>
                  <div className="">
                    <img
                      src={email}
                      alt="email"
                      className="write_to_us_contact_image"
                    />
                  </div>
                </div>

                {/* number */}
                <div className="write_to_us_contact_email_phone">
                  <div className="">vaibhavrathorema@gmail.com</div>
                  <div className="">+919926503468</div>
                </div>
              </div>
              {/* orange */}
              {/* <div className="oragnge_color_div_write_to_us"></div> */}
            </div>
            {/* right */}
            <div className="write_to_us_contant_right_side">
              {/* details */}
              <div>
                <div className="write_to_us_contact_us_button text-white">
                  Write to us.
                </div>
                {/* from */}
                <div className="write_to_us_parent">
                  {/* name */}
                  <div className="input_filed_div_write_to_us">
                    <input
                      type="text"
                      className="input_fiiled_write_to_us"
                      placeholder="name"
                    />
                  </div>
                  {/* phone number */}
                  <div className="input_filed_div_write_to_us">
                    <input
                      type="text"
                      className="input_fiiled_write_to_us"
                      placeholder="Phone Number"
                    />
                  </div>
                  {/* email */}
                  <div className="input_filed_div_write_to_us">
                    <input
                      type="text"
                      className="input_fiiled_write_to_us"
                      placeholder="Email Address"
                    />
                  </div>
                  {/* message */}
                  <div>
                    <textarea
                      type="text"
                      className="input_fiiled_write_to_us"
                      placeholder="Message"
                    />
                  </div>
                  {/* button */}
                  <div>
                    {" "}
                    <button className="write_to_us_submit_button">
                      Submit
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WriteToUs;
