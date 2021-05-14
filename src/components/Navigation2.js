import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation2 = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/general">GENERAL</Nav.Link>
              <Nav.Link href="/business">BUSINESS</Nav.Link>
              <Nav.Link href="/sports">SPORTS</Nav.Link>
              <Nav.Link href="/weather">WEATHER</Nav.Link>
              <Nav.Link href="/science">SCIENCE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation2;
