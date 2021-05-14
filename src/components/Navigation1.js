import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation1 = () => {
  return (
    <Container>
      <Nav>
        <Nav.Link href="/">ABC NEWS</Nav.Link>||
        <Nav.Link href="/weather">WEATHER</Nav.Link>||
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
    </Container>
  );
};

export default Navigation1;
