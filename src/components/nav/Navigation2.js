import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./nav.css";
const Navigation2 = () => {
  return (
    <Nav class="secondNav">

      <Nav.Link href="/news/general" className="inactive secondNavLink" activeclassname="active">General</Nav.Link>|
      <Nav.Link href="/news/business" className="inactive secondNavLink" activeclassname="active">Business</Nav.Link>|
      <Nav.Link href="/news/entertainment" className="inactive secondNavLink" activeclassname="active">Entertainment</Nav.Link>|
      <Nav.Link href="/news/sports" className="inactive secondNavLink" activeclassname="active">Sports</Nav.Link>|
      <Nav.Link href="/weather" className="inactive secondNavLink" activeclassname="active">Weather</Nav.Link>|
      <Nav.Link href="/news/science" className="inactive secondNavLink" activeclassname="active">Science</Nav.Link>|
      <Nav.Link href="/crypto" className="inactive secondNavLink" activeclassname="active">Crypto</Nav.Link>|
      <Nav.Link href="/justin" className="inactive secondNavLink" activeclassname="active">Justin</Nav.Link>|
      <Nav.Link href="/about" className="inactive secondNavLink" activeclassname="active">About</Nav.Link>
      <Nav.Link href="/watchliv" className="inactive secondNavLink" activeclassname="active">Live</Nav.Link>

    </Nav>
  );
};

export default Navigation2;
