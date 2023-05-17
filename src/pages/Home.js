import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../sass/styles.scss";

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <Banner />
      <Card />
      <div className="content-container"></div>
      <Footer />
    </div>
  );
};

export default Home;
