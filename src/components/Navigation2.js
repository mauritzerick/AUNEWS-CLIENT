import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation2 = () => {
  return (
    <Nav>

      <Nav.Link href="/news/general" className="inactive" activeClassName="active">GENERAL</Nav.Link>||
      <Nav.Link href="/news/business" className="inactive" activeClassName="active">BUSINESS</Nav.Link>||
      <Nav.Link href="/news/entertainment" className="inactive" activeClassName="active">ENTERTAINMENT</Nav.Link>||
      <Nav.Link href="/news/sports" className="inactive" activeClassName="active">SPORTS</Nav.Link>||
      <Nav.Link href="/weather" className="inactive" activeClassName="active">WEATHER</Nav.Link>||
      <Nav.Link href="/news/science" className="inactive" activeClassName="active">SCIENCE</Nav.Link>||
      <Nav.Link href="/crypto" className="inactive" activeClassName="active">Crypto</Nav.Link>||
      <Nav.Link href="/chart" className="inactive" activeClassName="active">Charts</Nav.Link>||
      <Nav.Link href="/justin" className="inactive" activeClassName="active">JUSTIN</Nav.Link>

    </Nav>
  );
};

export default Navigation2;
