import React from "react";
import Nanay from "../images/nanay.png";
import Family from "../images/family.png";
import Mums from "../images/mums.png";
import Peacock from "../images/peacock.png";

const Art = () => {
  return (
    <div>
      <div className="art-container">
        <div className="art">
          <img src={Nanay} alt="nanay" id="nanay" />
          <img src={Peacock} alt="peacock" id="peacock" />
          <img src={Family} alt="family" id="family" />
          <img src={Mums} alt="mums" id="mums" />
          <img src={Nanay} alt="nanay" id="nanay" />
          <img src={Peacock} alt="peacock" id="peacock" />
          <img src={Family} alt="family" id="family" />
          <img src={Mums} alt="mums" id="mums" />
        </div>
      </div>
    </div>
  );
};

export default Art;
