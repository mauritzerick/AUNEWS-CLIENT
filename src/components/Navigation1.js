import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation1 = () => {
  
  return (
    <Container>
      <Nav>
        <Nav.Link href="/" className="inactive" activeClassName="active" >ABC NEWS</Nav.Link>||
        <Nav.Link href="/weather" className="inactive" activeClassName="active" >WEATHER</Nav.Link>||
        <Nav.Link href="/search" className="inactive" activeClassName="active" >Search</Nav.Link>
      </Nav>
    </Container>
  );
};

export default Navigation1;
