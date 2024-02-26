import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Infrastructure from "./pages/Infrastructure";
import Product from "./pages/product";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      {/* <Route path="/infrastructure" element={<Infrastructure />} /> */}
      <Route path="/product" element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
