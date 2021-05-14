import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation2 = () => {
  return (
    <Nav>
      <Nav.Link href="/general">GENERAL</Nav.Link>||
      <Nav.Link href="/business">BUSINESS</Nav.Link>||
      <Nav.Link href="/sports">SPORTS</Nav.Link>||
      <Nav.Link href="/weather">WEATHER</Nav.Link>||
      <Nav.Link href="/science">SCIENCE</Nav.Link>
      <Nav.Link href="/crypto">Crypto</Nav.Link>
    </Nav>
  );
};

export default Navigation2;
