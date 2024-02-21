import React
// , { useState }
 from "react";
import "../../styles/Home/Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Qulaity_image from "../../Images/home/WHY 2.png";

function Testimonials() {
  // const [swiperRef, setSwiperRef] = useState(null);
  // const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      //   src: image1,
      user: "https://badmchampionship.nmims.edu/wp-content/uploads/2017/10/manish-desai.jpg",

      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Vaibhav",
    },
    {
      //   src: image1,
      user: "https://media.licdn.com/dms/image/D4D03AQHUCyN6xKF26w/profile-displayphoto-shrink_800_800/0/1684568848914?e=2147483647&v=beta&t=OreURQwOJ3k2GYgb_9AHro6ofuzNgrRppEMnQyShelc",
      message:
        "Spice up your life with Saburi. Exceptional flavors and quality. My dishes have never tasted this better!",
      name: "Abhishek",
    },
    {
      //   src: image1,
      user: "https://media.licdn.com/dms/image/C4D03AQGvd8ezGDv7Qw/profile-displayphoto-shrink_800_800/0/1652960129689?e=2147483647&v=beta&t=VGt8-bm4RJLHQGTO_BYdRM_ipGpn9expy2zJCadIUXE",
      message:
        "Soya Chunks by Saburi: My secret to protein-packed, delicious meals. The best addition to my kitchen pantry!",
      name: "Rahul",
    },
  ];

  // const handlePrevClick = () => {
  //   if (swiperRef) {
  //     swiperRef.slidePrev();
  //   }
  // };

  // const handleNextClick = () => {
  //   if (swiperRef) {
  //     swiperRef.slideNext();
  //   }
  // };

  // const handleSlideChange = () => {
  //   if (swiperRef) {
  //     setActiveIndex(swiperRef.activeIndex);
  //   }
  // };
  return (
    <>
      <div className="testimonail_main_div">
        {/* <div className="main-slider-div"> */}
          <h3 className="heading-text-testimonial text-center">Testimonials</h3>
          <div className="our-product-slider-start ">
            {/* big screen */}
            {/* <div className="testimonail_for_big_screen"> */}
              <Swiper
                // onSwiper={setSwiperRef}
                slidesPerView={2.7}
                initialSlide={1}
                centeredSlides={true}
                spaceBetween={50}
                pagination={{
                  type: "fraction",
                }}
                className="mySwiper"
              >
                {images.map((testimonial, index) => (
                  <SwiperSlide key={index} style={{ position: "relative" }}>
                    <div className="testimonail_card_main">
                      
                      {/* top */}
                      <div className="testimmonial_card_top">
                        {/* image */}
                        <div className="testimmonial_card_top_image_section">
                          <img src={Qulaity_image} alt="" srcset="" />
                        </div>
                        {/* content */}
                        <div className="testimmonial_card_top_details_section">
                          <div>vaihav Rahore</div>
                          <div>Web devloper MERN</div>
                        </div>
                      </div>
                      {/* bootom */}
                      <div className="testimmonial_card_bottom">
                        <div className="testimmonial_card_message">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Culpa officia asperiores alias harum fugiat
                          ullam dolore perspiciatis unde fugit voluptates!
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* left */}
            {/* <div className="prev-next-buttons">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                  onClick={handlePrevClick}
                  className="prev-button"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                  onClick={handleNextClick}
                  className="next-button"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default Testimonials;
