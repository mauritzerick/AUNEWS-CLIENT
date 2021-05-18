import React from "react";
// import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../images/favicon.ico';
import './nav.css';
import Weathernav from './Weathernav';

const Navigation1 = () => {
  return (
    <Container>
      <Nav class="navigation1">
        <Nav.Link href="/" className="inactive navLink" activeclassname="active">
          <img class="logo" src={ logo }/> BNPM NEWS
        </Nav.Link>

        <Nav.Link
          href="/localweather"
          className="inactive navLink navWeather "
          activeclassname="active"
        >
          <Weathernav />
        </Nav.Link>

        <Nav.Link href="/search" className="inactive navLink navSearch" activeclassname="active">
          Search
        </Nav.Link>
      </Nav>
    </Container>
  );
};

export default Navigation1;
