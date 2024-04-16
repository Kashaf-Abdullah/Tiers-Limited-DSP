import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import d1 from "../assets/team3.jpg";
const RenderingDesignerCard = (props) => {
  return (
    <Container fluid style={{ backgroundColor: props.bcolor }}>
      <Container>
        <Row style={{ padding: "4rem 2rem", flexDirection: props.rr }}>
          <Col lg={2} md={2} sm={6}>
            <img
              src={d1}
              alt=""
              className=""
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",

                objectFit: "cover",
                objectPosition: "center right",
                border: "2px solid var(--greenish_gray)",
              }}
            />
          </Col>
          <Col
            lg={10}
            md={10}
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
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "var(--greenish_gray)",
              }}
            >
              Build high end marketing content
            </h2>
            <p style={{ fontSize: "22px", color: "var(--lightbrown)" }}>
              Building a portfolio in the beginning is difficult, but with
              Mydoma’s visualizer, you can let your talent shine. With
              photorealistic renderings and 3D tours that bring your unique
              design style to life, you’ll inspire prospective clients with
              beautiful designs.
            </p>

            <button
              className="buttonn designercard-btn"
              style={{
                backgroundColor: "var(--greenish_gray)",
                color: "var(--white)",
                fontSize: "15px",
                fontWeight: "800",
                border: "3px solid var(--darkblue)",
              }}
            >
              See More
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default RenderingDesignerCard;
