import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import intro from "../assets/background2.jpeg";
import star from "../assets/review.png";
import star2 from "../assets/review2.png";
import star3 from "../assets/review3.png";
import star4 from "../assets/review4.png";
import IntroSect from "../cards/IntroSect";

const Intro = () => {
  return (
    <div
      className="intro"
      style={{
        backgroundColor: "var(--offwhite)",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <Container
        style={{
          backgroundImage: `url(${intro})`,
          textAlign: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Row>
          <IntroSect
            head1="Crafting Tomorrow: "
            head2="A Visionary Approach to Design"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
