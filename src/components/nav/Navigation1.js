import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import logo from './images/favicon.ico';
import './nav.css';
import Weathernav from '../weather/Weathernav';

const Navigation1 = () => {
  return (
    <Container>
      <Nav class="navigation1">
        <Link to="/" className="inactive navLink" activeclassname="active">
          <img class="logo" src={ logo }/> BNPM NEWS
        </Link>

        <Link
          to="/localweather"
          className="inactive navLink navWeather "
          activeclassname="active"
        >
          <Weathernav />
        </Link>

        <Link to="/search" className="inactive navLink navSearch" activeclassname="active">
          Search
        </Link>
      </Nav>
    </Container>
  );
};

export default Navigation1;
