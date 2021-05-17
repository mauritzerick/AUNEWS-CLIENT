import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation2 = () => {
  return (
    <Nav>
      <Nav.Link href="/news/general">GENERAL</Nav.Link>||
      <Nav.Link href="/news/business">BUSINESS</Nav.Link>||
      <Nav.Link href="/news/entertainment">ENTERTAINMENT</Nav.Link>||
      <Nav.Link href="/news/sports">SPORTS</Nav.Link>||
      <Nav.Link href="/weather">WEATHER</Nav.Link>||
      <Nav.Link href="/news/science">SCIENCE</Nav.Link>||
      <Nav.Link href="/crypto">Crypto</Nav.Link>||
      <Nav.Link href="/justin">JUSTIN</Nav.Link>

    </Nav>
  );
};

export default Navigation2;
