import React from "react";
import "../../styles/contact/address.css";
function Adress() {
  return (
    <div>
      <div className="location-contact-us">
        <div
          className="Locate_us_text"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="400"
          data-aos-duration="1200"
        >
          Locate Us
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.125151778533!2d72.54068107528194!3d28.445643475767316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393efbccfd4632fb%3A0x91cd14c262ec8523!2sRajasthan%20Gypsum%20Industry!5e0!3m2!1sen!2sin!4v1709201158737!5m2!1sen!2sin"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="location-iframe"
            title="our_location"
          ></iframe>
        </div>
        {/* address */}
        <div className="address_work" >
          Works address- MAA DURGA GYPSUM INDUSTRIES CHAK PRM 6 DANTOR
          BIKANER RAJSTHAN INDIA
        </div>
      </div>
    </div>
  );
}

export default Adress;
