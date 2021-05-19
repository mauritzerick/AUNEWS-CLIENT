import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import './nav.css';
const Navigation2 = () => {
  return (
    <Nav class="secondNav">

      <Nav.Link href="/news/general" className="inactive" activeclassname="active">GENERAL</Nav.Link>|
      <Nav.Link href="/news/business" className="inactive" activeclassname="active">BUSINESS</Nav.Link>|
      <Nav.Link href="/news/entertainment" className="inactive" activeclassname="active">ENTERTAINMENT</Nav.Link>|
      <Nav.Link href="/news/sports" className="inactive" activeclassname="active">SPORTS</Nav.Link>|
      <Nav.Link href="/weather" className="inactive" activeclassname="active">WEATHER</Nav.Link>|
      <Nav.Link href="/news/science" className="inactive" activeclassname="active">SCIENCE</Nav.Link>|
      <Nav.Link href="/crypto" className="inactive" activeclassname="active">Crypto</Nav.Link>|
      <Nav.Link href="/chart" className="inactive" activeclassname="active">Charts</Nav.Link>|
      <Nav.Link href="/justin" className="inactive" activeclassname="active">JUSTIN</Nav.Link>
    </Nav>
  );
};

export default Navigation2;
