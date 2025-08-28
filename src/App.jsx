import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import UnderConstruction from "./components/UnderConstruction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/promo" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
