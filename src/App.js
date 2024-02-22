import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
