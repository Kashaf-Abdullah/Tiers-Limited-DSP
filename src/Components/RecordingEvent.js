import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import audi from "../assets/logo/re1.png";
import ferrari from "../assets/logo/events2.png";
import ford from "../assets/logo/events3.png";
// import kia from "../assets/bike/logo/re1.png";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // Import icons for next and previous buttons

import { Container } from "react-bootstrap";
import RecordingCard from "../cards/RecordingCard";

const RecordingEvent = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // for tablet screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // for mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="card-made-con">
      <h2 className="heading">
        Recording Of <span> Previous Events</span>
      </h2>

      <Slider {...settings}>
        <RecordingCard
          image={ferrari}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <RecordingCard
          image={ford}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <RecordingCard
          image={ferrari}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <RecordingCard
          image={ford}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
        <RecordingCard
          image={ford}
          name="Lorem ipsum sr."
          price="PKR 234,000"
        />
      </Slider>
    </Container>
  );
};

export default RecordingEvent;
