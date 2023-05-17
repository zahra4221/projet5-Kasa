import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logementsData from "../data/logements.json";
import "../sass/card.scss";

const AccommodationsList = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    setAccommodations(logementsData);
  }, []);

  return (
    <div className="accommodations-list">
      {accommodations.map((accommodation) => (
        <Link to={`/accommodation/${accommodation.id}`} key={accommodation.id}>
          <div className="accommodation-card">
            <img
              src={accommodation.cover}
              alt={accommodation.title}
              className="accommodation-image"
            />
            <h2 className="accommodation-title">{accommodation.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AccommodationsList;
