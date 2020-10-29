import React from "react";
import PandaLogo from "../images/panda_logo.png";

const Showcase = () => {
  return (
    <div>
      <div class="showcase">
        <img id="panda-logo" src={PandaLogo} alt="logo-img" />
        <br />
        <br />
        <div id="page-heading">
          <h1>Panda Erica</h1>
          <p>A PANDA GIRL</p>
          <br />
          <p>DRAWING & PAINTING</p>
          <br />
          <p>HER PANDA WORLD</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
