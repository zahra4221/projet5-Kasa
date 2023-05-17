import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/styles.css";

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="content-container">
        {/* Contenu principal de la page */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
