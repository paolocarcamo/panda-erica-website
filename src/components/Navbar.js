import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  // const [homeActivation, setHomeActivation] = useState("nav-link active");
  // const [artActivation, setArtActivation] = useState("nav-link");

  // const clickHandler = () => {
  //   setArtActivation("nav-link active");
  //   setHomeActivation("nav-link");
  // };

  return (
    <div className="navbar">
      <h2 id="logo">
        <strong>{title}</strong>
      </h2>
      <ul class="nav nav-pills">
        <li class="nav-item home-pill">
          <a class="nav-link" data-toggle="pill" href="/">
            Home
          </a>
        </li>
        <li class="nav-item about-pill">
          <a class="nav-link" data-toggle="pill" href="/about">
            About
          </a>
        </li>
        <li class="nav-item art-pill">
          <a class="nav-link" data-toggle="pill" href="/#art">
            Art
          </a>
        </li>
        <li class="nav-item design-pill">
          <a class="nav-link" data-toggle="pill" href="/design">
            Design
          </a>
        </li>
        <li class="nav-item books-pill">
          <a class="nav-link" data-toggle="pill" href="/books">
            Books
          </a>
        </li>
        <li class="nav-item contact-pill">
          <a class="nav-link" data-toggle="pill" href="/contact">
            Contact
          </a>
        </li>
      </ul>
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
