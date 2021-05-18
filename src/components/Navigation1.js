import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation1 = () => {
  return (
    <Container>
      <Nav>
        <Nav.Link href="/" className="inactive" activeclassname="active">
          ABC NEWS
        </Nav.Link>
        ||
        <Nav.Link
          href="/localweather"
          className="inactive"
          activeclassname="active"
        >
          LOCAL WEATHER
        </Nav.Link>
        ||
        <Nav.Link href="/search" className="inactive" activeclassname="active">
          Search
        </Nav.Link>
      </Nav>
    </Container>
  );
};

export default Navigation1;
