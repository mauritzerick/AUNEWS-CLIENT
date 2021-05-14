import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation1 = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">ABC NEWS</Nav.Link>
              <Nav.Link href="/westher">WEATHER</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation1;
