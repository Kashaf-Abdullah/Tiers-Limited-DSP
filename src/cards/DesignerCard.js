import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import d1 from "../assets/designer1.png";
const DesignerCard = (props) => {
  return (
    <Container fluid style={{ backgroundColor: props.bcolor }}>
      <Row style={{ padding: "4rem 2rem", flexDirection: props.rr }}>
        <Col lg={4} md={6} sm={6}>
          <img
            src={props.image}
            alt=""
            className="designer-img"
            style={{ width: "90%", height: "90%", padding: "10px" }}
          />
        </Col>
        <Col
          lg={8}
          md={6}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <h2
            className=""
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "var(--darkblue)",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet.
          </h2>
          <p style={{ fontSize: "18px", color: "var(--grey)" }}>
            Wendy Woloshchuk revolutionized Details Full Service Interiors by
            integrating DPS, which significantly improved efficiency,
            professionalism, and client engagement in her interior design
            business. Adopting technology enabled her to streamline project
            management, enhance her design presentations and expand her business
            into community building and future e-commerce opportunities.
          </p>
          <button
            className="buttonn designercard-btn"
            style={{
              backgroundColor: "var(--darkblue)",
              color: "var(--white)",
              fontSize: "15px",
              fontWeight: "800",
              border: "3px solid var(--darkblue)",
            }}
          >
            Learn More
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DesignerCard;
