import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation2 = () => {
  return (
    <Nav>
      <Nav.Link href="/general" className="inactive" activeClassName="active">GENERAL</Nav.Link>||
      <Nav.Link href="/business" className="inactive" activeClassName="active">BUSINESS</Nav.Link>||
      <Nav.Link href="/sports" className="inactive" activeClassName="active">SPORTS</Nav.Link>||
      <Nav.Link href="/weather" className="inactive" activeClassName="active">WEATHER</Nav.Link>||
      <Nav.Link href="/science" className="inactive" activeClassName="active">SCIENCE</Nav.Link>||
      <Nav.Link href="/crypto" className="inactive" activeClassName="active">Crypto</Nav.Link>||
      <Nav.Link href="/justin" className="inactive" activeClassName="active">JUSTIN</Nav.Link>

    </Nav>
  );
};

export default Navigation2;
