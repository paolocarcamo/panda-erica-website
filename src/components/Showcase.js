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
          <p>A panda girl</p>
          <br />
          <p>drawing & painting</p>
          <br />
          <p>her panda world</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
