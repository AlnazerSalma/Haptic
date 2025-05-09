
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home/Home";
import Work from "../components/Work/Work";
import Pricing from "../components/Pricing/Pricing";
import Careers from "../components/Careers/Careers";
import Contact from "../components/Contact/Contact";
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
