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
              <div className="write_to_us_contact_us_button">Contact Us.</div>
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
                <div>Write to us.</div>
                {/* from */}
                <div>
                  {/* name */}
                  <div>
                    <input type="text" />
                  </div>
                  {/* phone number */}
                  <div>
                    <input type="text" />
                  </div>
                  {/* email */}
                  <div>
                    <input type="text" />
                  </div>
                  {/* message */}
                  <div>
                    <textarea type="text" />
                  </div>
                  {/* button */}
                  <div>
                    {" "}
                    <button>Submit</button>{" "}
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
