import React from "react";
import bannerImage from "../assets/propos_banner.png";
import "../sass/banner.scss";

const BannerAbout = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </div>
  );
};

export default BannerAbout;
