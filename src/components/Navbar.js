import React from "react";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <h2 id="logo">
        <strong>{title}</strong>
      </h2>
      <Nav
        variant="pills"
        className="justify-content-end"
        defaultActiveKey="#home"
      >
        <Nav.Item>
          <Nav.Link href="#home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#art">ART</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#design">DESIGN</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#books">BOOKS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: "PandaErica",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;

/* I will probably want to use props for the different pictures that Erica will want to use for her links. 
Then, I will need to model it from the Navbar that I created with GitFinder.*/
