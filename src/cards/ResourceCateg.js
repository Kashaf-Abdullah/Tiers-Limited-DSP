import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ResourceCateg = ({ templates }) => {
  return (
    <Container>
      <Row style={{ margin: "3rem 0" }}>
        <Col
          lg={12}
          className="template-cards-container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {templates.map((template, index) => (
            <div
              key={index}
              className="template-card"
              style={{
                boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",

                padding: "1.5rem",
                margin: "10px",
                width: "12rem",
                height: "10rem",
              }}
            >
              <div
                className="template-icon"
                style={{
                  fontSize: "1.7rem",
                  textAlign: "center",
                  color: "var(--darkblue)",
                }}
              >
                {template.icon}
              </div>
              <div
                className="template-text"
                style={{
                  fontSize: "0.9rem",
                  textAlign: "center",
                  fontWeight: "600",
                  color: "var(--lightbrown)",
                }}
              >
                {template.text}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ResourceCateg;
