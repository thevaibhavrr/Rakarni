import React from "react";
import "../../styles/contact/address.css";
function Adress() {
  return (
    <div>
      <div className="location-contact-us">
        <div className="Locate_us_text"
         data-aos="zoom-in"
         data-aos-offset="100"
         data-aos-delay="400"
         data-aos-duration="1200"
        >
            Locate Us
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58391.465927151905!2d78.70742685270042!3d23.83755873525929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d14a2cf591af%3A0xf446eaa2b5281370!2sSagar%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1706882874642!5m2!1sen!2sin"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="location-iframe"
            title="our_location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Adress;
