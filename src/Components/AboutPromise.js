import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaCheck,
  FaExclamation,
  FaHandHolding,
  FaMessage,
  FaUser,
} from "react-icons/fa6";
import AboutCard from "../cards/AboutCard";

const AboutPromise = () => {
  return (
    <Container>
      <h2 className="heading">
        Our Promise <span> To You</span>
      </h2>
      <Row className="justify-content-between">
        <Col xs={12} sm={6} md={3}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "var(-white)",
              padding: "1rem",
              borderRadius: "20px",
              marginBottom: "1rem",
              color:"var(--greenish_gray)"
            }}
          >
            <Card.Body>
              <FaExclamation style={{ fontSize: "32px" }} />
              <h3
                style={{
                  fontSize: "33px",

                  fontWeight: "bold",
                  color: "var(--greenish_gray)",
                }}
              >
                Privacy
              </h3>
              <p style={{ fontSize: "17px", color: "var(--lightbrown)" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat, culpa iure. Obcaecati?
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "var(--white)",
              padding: "1rem",
              borderRadius: "20px",
              marginBottom: "1rem",
              color:"var(--greenish_gray)"
            }}
          >
            <Card.Body>
              <FaHandHolding style={{ fontSize: "32px" }} />
              <h3
                style={{
                  fontSize: "33px",

                  fontWeight: "bold",
                  color: "var(--greenish_gray)",
                }}
              >
                Communicate
              </h3>
              <p style={{ fontSize: "17px", color: "var(--lightbrown)" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat, culpa iure. Obcaecati?
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor:"var(--greenish_gray)",
              padding: "1rem",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          >
            <Card.Body>
              <FaUser style={{ fontSize: "32px", color: "var(--white)" }} />
              <h3
                style={{
                  fontSize: "33px",

                  fontWeight: "bold",
                  color: "var(--white)",
                }}
              >
                PartnerShip
              </h3>
              <p style={{ fontSize: "17px", color: "var(--white)" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat, culpa iure. Obcaecati?
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "var(--white)",
              padding: "1rem",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          >
            <Card.Body>
              <FaCheck style={{ fontSize: "32px" }} />
              <h3
                style={{
                  fontSize: "33px",

                  fontWeight: "bold",
                  color: "var(--greenish_gray)"
                }}
              >
                Sucess
              </h3>
              <p style={{ fontSize: "17px", color: "var(--lightbrown)" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat, culpa iure. Obcaecati?
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPromise;
