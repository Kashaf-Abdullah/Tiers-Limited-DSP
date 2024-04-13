import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import b1 from "../assets/brand1.png";
import b2 from "../assets/brand2.png";
import b3 from "../assets/brand3.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Brands = () => {
  const br_img = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "1rem",
    backgroundColor: "var(--white)",
    marginBottom: "22px",
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container data-aos="fade-up">
      <h1 className="heading">
        FEATURED <span> IN</span>
      </h1>
      <Row className="justify-content-center text-center">
        {" "}
        {/* Added text-center class */}
        <Col lg={4} md={4} sm={12} style={{ marginBottom: "22px" }}>
          <img src={b1} alt="" style={br_img} />
        </Col>
        <Col lg={4} md={4} sm={12} style={{ marginBottom: "22px" }}>
          <img src={b2} alt="" style={br_img} />
        </Col>
        <Col lg={4} md={4} sm={12} style={{ marginBottom: "22px" }}>
          <img src={b3} alt="" style={br_img} />
        </Col>
      </Row>
    </Container>
  );
};

export default Brands;
