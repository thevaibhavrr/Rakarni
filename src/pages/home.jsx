import React from "react";
import HomePageImagesection from "../components/home/imagesection";
import RAKARNI from "../components/home/RAKARNI";
import Rakranibig from "../components/home/rakranibig";
import Ourproduct from "../components/home/ourproduct";
import Aboutus from "../components/home/aboutus";
import Whychooseus from "../components/home/Whychooseus";
import Testimonials from "../components/home/Testimonials";
// import Footer from '../components/footer'
// import CustomScroll from "react-custom-scroll";

function Home() {
  return (
    <div>
          <HomePageImagesection />
          <RAKARNI />
          <Rakranibig />
          <Ourproduct />
          <Aboutus />
          <Whychooseus />
          <Testimonials />
          {/* <Footer/> */}
    </div>
  );
}

export default Home;
