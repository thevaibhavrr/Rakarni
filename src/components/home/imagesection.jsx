import React from "react";
import "../../styles/Home/imagesection.css";
// import cement from "../../Images/home/cement.png";
// import Icon from "../../Images/navbar/main_icon.png";
import firstImage from "../../Images/home/banner 1.png";
import secondImage from "../../Images/home/banner 2.png";
import thirdImage from "../../Images/home/banner 3.png";
import BannerForMobile from "../../Images/home/banerForMobile.png";
import BannerForMobile_second from "../../Images/home/banner2forMobile.png";
import BannerForMobile_third from "../../Images/home/reels3forHomePage.png";
function HomePageImagesection() {
  return (
    <>
      <div className="Home_page_image">
        {/* image */}
        <div className="Home_page_image_section" 
        data-aos="zoom-in"
         data-aos-offset="200"
         data-aos-delay="1000"
         data-aos-duration="1000"
         >
          <div className="bootstrap_slider Home_page_image_section">
            <div id="carouselExample" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={firstImage}
                    className="w-100 img-fluid bannerforAll"
                    alt="..."
                  />
                  <img
                    src={BannerForMobile}
                    className="w-100 img-fluid bannerforMobile"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={secondImage}
                    className=" w-100 img-fluid bannerforAll"
                    alt="..."
                  />
                  <img
                    src={BannerForMobile_second}
                    className="w-100 img-fluid bannerforMobile"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={thirdImage}
                    className=" w-100 img-fluid bannerforAll"
                    alt="..."
                  />
                  <img
                    src={BannerForMobile_third}
                    className="w-100 img-fluid bannerforMobile"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* <div className="images_home"> */}
          {/* top */}
          {/* <div>
              <img src={Icon} alt="icon" className="company_icon" />
            </div> */}
          {/* cement */}
          {/* <div>
              <img
                src={cement}
                alt="project"
                className="home_page_cement_image"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HomePageImagesection;
