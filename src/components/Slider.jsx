import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./../img/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg";
import img2 from "./../img/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg";
import "./../css/slide.css";

export default function Slider() {
  return (
    <Carousel className="main-slide">

      <div>
        <img src={img1} height="400px" width="400px" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={img2} height="400px" width="400px" />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  );
}
