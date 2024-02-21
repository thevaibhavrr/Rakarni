import React from "react";
import "../styles/footer.css";
import Icon from "../Images/navbar/main_icon.png";

function Footer() {
  return (
    <>
      <div className="main_footer_div">
        {/* image */}
        <div>
          <img src={Icon} alt="icon" className="img-fluid"  />
        </div>
        {/* message */}
        <div className="footer_message" >
          Ready to experience the Maa Durga Gypsum Industries difference? Get in
          touch with us today <br/> to learn more about our products and services.
        </div>
        {/* adress */}
        <div>
          <div>
            <div>G-106, Ekanki Enclave, Sector-32 Greater Noida (201310)</div>
          </div>
          <div>
            <div>Punitvrinda</div>
          </div>
          <div>
            <div>+91 9310212156</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
