import React from "react";
import { Link } from "react-router-dom";
import logofooter from "../assets/logo_footer.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logofooter">
        <img src={logofooter} alt="Logo" />
      </div>
      <p>© 2023 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
