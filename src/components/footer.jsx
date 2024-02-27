import React from "react";
import "../styles/footer.css";
import Icon from "../Images/navbar/main_icon.png";
import socail_media from "../Images/footer/Frame 8.png";
import Phone from "../Images/footer/Phone Squared.png";
import email from "../Images/footer/Email.png";
import Location from "../Images/footer/Location.png";

function Footer() {
  return (
    <>
    <div className="first_footer_div_gry" >
      <div className="main_footer_div">
        {/* image */}
        <div className="first_footer_div ">
          <div>
            <img src={Icon} alt="icon" className="img-fluid footer_copany_icon" />
          </div>
          <div className="ms-5" >
            <div className="footer_hading">Follow Us On</div>
            <img src={socail_media} alt="icon" className="img-fluid footer_copany_icon" />
          </div>
        </div>
        {/* message */}
        <div className="footer_message">
          <ul className="footer_message_ul">
            <li>
              {" "}
              <h5 className="footer_hading" > Quick Links</h5>
            </li>
            <li className="footer_options" >Home</li>
            <li className="footer_options" >About Us</li>
            <li className="footer_options" >Contact Us</li>
            <li className="footer_options" >Products</li>
            <li className="footer_options" >Infrastructure</li>
          </ul>
        </div>
        {/* adress */}
        <div className="footer_address">
          {/* images */}

          {/* text */}
          <div className="footer_address_inside_div">
            <div>
              <img src={Location} alt="" srcset="" />
            </div>
            <div className="footer_hading">
              G-106, Ekanki Enclave, Sector-32 <br /> Greater Noida (201310)
            </div>
          </div>
          <div className="footer_address_inside_div">
            <div>
              <img src={email} alt="" srcset="" />
            </div>

            <div className="footer_hading">Punitvrinda</div>
          </div>
          <div className="footer_address_inside_div">
            <div>
              <img src={Phone} alt="" srcset="" />
            </div>

            <div className="footer_hading">+91 9310212156</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
