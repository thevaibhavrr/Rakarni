import React, { useState } from "react";
import "../../styles/contact/write_to_us.css";
import phone from "../../Images/contact-us/Phone.png";
import email from "../../Images/contact-us/Email.png";

function WriteToUs() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <div className="main_contact_us_write_to_us">
        {/* left side */}
        <div className="write_to_us_bg">
          <div className="write_to_us_contant">
            {/* left */}
            <div className="write_to_us_contant_left_side">
              {/* contact us text */}
              <div
                className="write_to_us_contact_us_button"
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                Contact Us.
                <div className="yellow_color_box"></div>
              </div>

              {/* details */}
              <div className="write_to_us_contact_details">
                {/* email */}
                <div className="write_to_us_contact_email_phone">
                <div className="">
                    <img
                      src={email}
                      alt="email"
                      className="write_to_us_contact_image"
                    />
                  </div>
                  <div className="">
                    <img
                      src={phone}
                      alt="phone"
                      className="write_to_us_contact_image"
                    />
                  </div>
                 
                </div>

                {/* number */}
                <div
                  className="write_to_us_contact_email_phone"
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                >
                  <div className="">Punitvrinda@gmail.com</div>
                  <div className="">+91 9310212156</div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="write_to_us_contant_right_side">
              {/* details */}
              <div
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
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
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  {/* phone number */}
                  <div className="input_filed_div_write_to_us">
                    <input
                      type="text"
                      className="input_fiiled_write_to_us"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  {/* email */}
                  <div className="input_filed_div_write_to_us">
                    <input
                      type="text"
                      className="input_fiiled_write_to_us"
                      placeholder="Email Address"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                    />
                  </div>
                  {/* message */}
                  <div>
                    <textarea
                      type="text"
                      className="input_fiiled_write_to_us"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  {/* button */}
                  <div
                    data-aos="zoom-in"
                    data-aos-offset="100"
                    data-aos-delay="400"
                    data-aos-duration="1200"
                  >
                    {" "}
                    <button
                      className="write_to_us_submit_button"
                      onClick={handleSubmit}
                    >
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
