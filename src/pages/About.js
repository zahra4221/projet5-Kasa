import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../sass/styles.scss";
import BannerAbout from "../components/BannerAbout";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div className="page-container">
      <Header />
      <BannerAbout />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
