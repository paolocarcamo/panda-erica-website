import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="copyright">
          <p>PandaErica © Erica De Chavez</p>
        </div>
        <div className="socials">
          <h5>
            <a href="https://www.instagram.com/pandaerica/">
              <InstagramIcon />
            </a>
            <a href="http://pandaerica.tumblr.com/">
              <svg
                version="1.1"
                id="Capa_1"
                fill="white"
                className="tumblr-icon"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="29px"
                height="29px"
                viewBox="0 0 510 510"
              >
                <path
                  d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
			 M357,229.5h-76.5c0,0,0,96.9,0,99.45c0,17.85,2.55,28.05,28.05,28.05c22.95,0,48.45,0,48.45,0v76.5c0,0-25.5,2.55-53.55,2.55
			c-66.3,0-99.45-40.8-99.45-86.7c0-30.6,0-119.85,0-119.85h-51v-71.4c61.2-5.1,66.3-51,71.4-81.6h56.1V153H357V229.5z"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/PandaErica/">
              <FacebookIcon />
            </a>{" "}
            <a href="https://twitter.com/pandaerica">
              <TwitterIcon />
            </a>{" "}
            <a href="mailto:ericadechavez@gmail.com">
              <EmailIcon />
            </a>{" "}
          </h5>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
