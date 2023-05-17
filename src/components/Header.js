import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
