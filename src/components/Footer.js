import React from "react";
import logofooter from "../assets/logo_footer.png";
import "../sass/footer.scss";

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
