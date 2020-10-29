import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Testimonials = () => {
  return (
    <div>
      <div id="testimonials">
        <Carousel>
          <Carousel.Item className="caro-item" id="test-one">
            <h3>
              "Erica is pure joy to work with! The combination of her creativity
              and professionalism is unparalleled!"
            </h3>
            <p>- PAOLO CARCAMO | THE DAILY PLANET</p>
          </Carousel.Item>
          <Carousel.Item className="caro-item" id="test-two">
            <h3>"Erica brings your imagination to reality!"</h3>
            <p>- JONAH JAMESON | THE DAILY BUGLE</p>
          </Carousel.Item>
          <Carousel.Item className="caro-item" id="test-three">
            <h3>
              "Unmistakeably a top notch artist and even more of a top notch
              human that illustrates your world!"
            </h3>
            <p>- LOIS LANE | THE DAILY PLANET</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

/* Need to take away the indicators to make a more clean layout */
