import React from "react";
import intro from "../assets/bc6.PNG";
import star from "../assets/review.png";
import star2 from "../assets/review2.png";
import star3 from "../assets/review3.png";
import star4 from "../assets/review4.png";
import IntroSect from "../cards/IntroSect";

import { Container, Row, Col } from "react-bootstrap";

const FeatureIntro = () => {
  return (
    <div
      className="intro"
      style={{
        backgroundImage: `url(${intro})`,
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        padding: "20px",
        margin: "5rem 0 1rem 0",
      }}
    >
      <Container>
        <Row>
          <IntroSect
            head1="Discover the premier platform"
            head2="for Interior Designers"
          />
        </Row>
      </Container>
    </div>
  );
};

export default FeatureIntro;
