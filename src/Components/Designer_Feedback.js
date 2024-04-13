import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from "../assets/team1.jpg";
import t2 from "../assets/team2.jpg";
import t3 from "../assets/team3.jpg";
import t4 from "../assets/team4.jpg";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // Import icons for next and previous buttons

import { Container } from "react-bootstrap";
import Designer_Feedbackcard from "../cards/Designer_Feedbackcard.js";

const Designer_Feedback = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow next" onClick={onClick}>
        <FaArrowCircleRight
          style={{
            borderRadius: "50%",
            fontSize: "33px",
            color: "var(--peach)",
          }}
        />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow prev" onClick={onClick}>
        <FaArrowCircleLeft
          style={{
            borderRadius: "50%",
            fontSize: "33px",
            color: "var(--peach)",
          }}
        />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // for tablet screens
        settings: {
          slidesToShow: 1,
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
      <h2 className="heading">What Our Designer Say</h2>

      <Slider {...settings}>
        <Designer_Feedbackcard
          image={t1}
          name="LRichard McClintock"
          price="Lorem Ipsum which looks reasonable"
          para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years"
        />
        <Designer_Feedbackcard
          image={t2}
          name="Richard McClintock."
          price="Lorem Ipsum which looks reasonable"
          para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years"
        />
        <Designer_Feedbackcard
          image={t3}
          name="Richard McClintock."
          price="Lorem Ipsum which looks reasonable"
          para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years"
        />
        <Designer_Feedbackcard
          image={t4}
          name="Richard McClintock."
          price="Lorem Ipsum which looks reasonable"
          para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years"
        />
        <Designer_Feedbackcard
          image={t1}
          name="Richard McClintock."
          price="Lorem Ipsum which looks reasonable"
          para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years"
        />
      </Slider>
    </Container>
  );
};

export default Designer_Feedback;
