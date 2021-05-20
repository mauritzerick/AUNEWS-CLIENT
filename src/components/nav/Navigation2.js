import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./nav.css";
const Navigation2 = () => {
  return (
    <Nav class="secondNav">
      <Link to="/news/general" className="inactive" activeclassname="active">
        GENERAL
      </Link>
      |
      <Link to="/news/business" className="inactive" activeclassname="active">
        BUSINESS
      </Link>
      |
      <Link
        to="/news/entertainment"
        className="inactive"
        activeclassname="active"
      >
        ENTERTAINMENT
      </Link>
      |
      <Link to="/news/sports" className="inactive" activeclassname="active">
        SPORTS
      </Link>
      |
      <Link to="/weather" className="inactive" activeclassname="active">
        WEATHER
      </Link>
      |
      <Link to="/news/science" className="inactive" activeclassname="active">
        SCIENCE
      </Link>
      |
      <Link to="/crypto" className="inactive" activeclassname="active">
        Crypto
      </Link>
      |
      <Link to="/chart" className="inactive" activeclassname="active">
        Charts
      </Link>
      |
      <Link to="/justin" className="inactive" activeclassname="active">
        JUSTIN
      </Link>
      |
      <Link to="/watchlive" className="inactive" activeclassname="active">
        Live
      </Link>
    </Nav>
  );
};

export default Navigation2;
