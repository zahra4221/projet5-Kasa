import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import AccommodationDetails from "../src/pages/Accomodation";
import ErrorPage from "../src/pages/Error";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<AccommodationDetails />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </Router>
  );
};

export default App;
