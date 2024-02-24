import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Infrastructure from "./pages/Infrastructure";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      {/* <Route path="/infrastructure" element={<Infrastructure />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
