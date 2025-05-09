
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Pages/HomePage";
import Work from "../Pages/WorkPage";
import Pricing from "../Pages/PricingPage";
import Careers from "../Pages/CareerPage";
import Contact from "../Pages/ContactPage";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const AppRouter = ({ load }) => {
  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/work" element={<Work />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
