import { useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Infrastructure from "./pages/Infrastructure";
import Product from "./pages/product";
import Header from "./components/Header";
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => { 
    Aos.init();
  }, []);
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/product" element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
