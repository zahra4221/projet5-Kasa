import React from "react";
import { Link } from "react-router-dom";
import "../sass/error.scss";
import Header from "../components/Header";
import "../sass/styles.scss";

const ErrorPage = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="error_page">
        <h1>404</h1>
        <p> Oups! La page que vous recherchez n'existe pas.</p>
        <div className="retour">
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
