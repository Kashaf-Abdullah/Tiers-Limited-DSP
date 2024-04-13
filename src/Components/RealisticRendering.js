import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import o1 from "../assets/object/o1.jpg";
import o2 from "../assets/object/o2.jpg";
import o3 from "../assets/object/o3.jpg";
import o4 from "../assets/object/o4.jpg";
import o5 from "../assets/object/o5.jpg";
import o6 from "../assets/object/o6.jpg";

const RealisticRendering = () => {
  return (
    <Container>
      <h2 className="heading">
        Create realistic renderings <span> with a suite of tools</span>
      </h2>

      <Row className="d-flex justify-content-center">
        <Col lg={3} md={3} sm={12} className="mb-3">
          <img src={o1} className="tools-img" alt="o1" />
        </Col>
        <Col lg={3} md={3} sm={12} className="mb-3">
          <img src={o2} className="tools-img" alt="o2" />
        </Col>
        <Col lg={3} md={3} sm={12} className="mb-3">
          <img src={o3} className="tools-img" alt="o3" />
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col lg={3} md={3} sm={12} className="mb-3">
          <img src={o4} className="tools-img" alt="o4" />
        </Col>
        <Col lg={3} md={3} sm={12} className="mb-3">
          <img src={o5} className="tools-img" alt="o5" />
        </Col>
        <Col lg={3} md={3} sm={12} className="mb-3">
          <img src={o6} className="tools-img" alt="o6" />
        </Col>
      </Row>
    </Container>
  );
};

export default RealisticRendering;
