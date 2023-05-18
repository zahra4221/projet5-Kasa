import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../data/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../sass/styles.scss";
import Collapse from "../components/collapse";
import ImageSlider from "../components/carrousel";
import { FaStar } from "react-icons/fa";
import "../sass/accomodation.scss";

const AccommodationDetails = () => {
  const { id } = useParams();
  const accommodation = logementsData.find((item) => item.id === id);

  if (!accommodation) {
    return <div>Logement non trouvé.</div>;
  }

  const renderRatingStars = () => {
    const rating = accommodation.rating;
    const stars = Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} color={index < rating ? "#FF6060" : "#E3E3E3"} />
    ));
    return stars;
  };

  return (
    <div className="page-container">
      <Header />
      <ImageSlider images={accommodation.pictures} />
      <div className="title_host">
        <h2 className="accomodation_title">{accommodation.title}</h2>
        <div className="host-details">
          <p className="host_name">
            {accommodation.host.name}
            <br />
            {accommodation.host.lastname}
          </p>
          <img src={accommodation.host.picture} alt={accommodation.host.name} />
        </div>
      </div>
      <div className="accommodation-info">
        <p className="location">{accommodation.location}</p>

        <div className="rating_tag">
          <ul className="accomodation_tag">
            {accommodation.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <div className="rating-stars">{renderRatingStars()}</div>
        </div>
      </div>
      <div className="details-container">
        <div className="description">
          <Collapse title="Description" content={accommodation.description} />
        </div>
        <div className="equipments">
          <Collapse
            title="Équipements"
            content={accommodation.equipments.join(", ")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccommodationDetails;
