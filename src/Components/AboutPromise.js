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
              backgroundColor: "var(--offwhite)",
              padding: "1rem",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          >
            <Card.Body>
              <FaExclamation style={{ fontSize: "32px" }} />
              <h3
                style={{
                  fontSize: "33px",

                  fontWeight: "bold",
                  color: "var(--darkblue)",
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
              backgroundColor: "var(--offwhite)",
              padding: "1rem",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          >
            <Card.Body>
              <FaHandHolding style={{ fontSize: "32px" }} />
              <h3
                style={{
                  fontSize: "33px",

                  fontWeight: "bold",
                  color: "var(--darkblue)",
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
              backgroundColor: "var(--darkblue)",
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
                  color: "var(--offwhite)",
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
              backgroundColor: "var(--offwhite)",
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
                  color: "var(--darkblue)",
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
