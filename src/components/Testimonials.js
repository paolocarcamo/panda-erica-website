import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Testimonials = () => {
  return (
    <div>
      <div id="testimonials">
        <Carousel>
          <Carousel.Item className="caro-item">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Item>
          <Carousel.Item className="caro-item">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Item>
          <Carousel.Item className="caro-item">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

/* Need to take away the indicators to make a more clean layout */
