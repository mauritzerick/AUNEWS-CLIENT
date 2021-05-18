import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation1 = () => {
  
  return (
    <Container>
      <Nav>
<<<<<<< HEAD
        <Nav.Link href="/">ABC NEWS</Nav.Link>||
        <Nav.Link href="/weathernav">local weather</Nav.Link>||
        <Nav.Link href="/search">Search</Nav.Link>
=======
        <Nav.Link href="/" className="inactive" activeClassName="active" >ABC NEWS</Nav.Link>||
        <Nav.Link href="/weather" className="inactive" activeClassName="active" >WEATHER</Nav.Link>||
        <Nav.Link href="/search" className="inactive" activeClassName="active" >Search</Nav.Link>
>>>>>>> a09a560c9df8bbfd6a9f1e44f273f03f54f28c3b
      </Nav>
    </Container>
  );
};

export default Navigation1;
