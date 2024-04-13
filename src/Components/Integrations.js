import React from "react";
import intg from "../assets/i7.png";
import { Col, Container, Row } from "react-bootstrap";
const Integration = () => {
  return (
    <Container class="in-side-by-side">
      <h2 className="heading">
        <span>DSP Features</span>
      </h2>

      <Row>
        <Col lg={6} md={6} sm={12} class="in-section">
          <div className="in-det">
            <h4>Staging Professionals.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              animi maxime sunt architecto! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quis itaque temporibus dolores.
            </p>
          </div>

          <div className="in-det">
            <h4>Design Professionals.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              error repellat officia placeat eveniet? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quis itaque temporibus dolores.
            </p>
          </div>
        </Col>

        <Col lg={6} md={6} sm={12} class="in-section">
          <img src={intg} alt="" className="intg-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Integration;
