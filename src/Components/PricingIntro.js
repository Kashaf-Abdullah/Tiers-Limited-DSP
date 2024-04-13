import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import intro from "../assets/bc6.PNG";
import { TabList, TabPanel, Tab, Tabs } from "react-tabs";
import Pricing from "./Pricing";
import Pricing2 from "./Pricing2";

const PricingIntro = () => {
  const [key, setKey] = useState("tab2");

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
        margin: "5rem 0",
      }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="intro-content" style={{ margin: "6rem 0" }}>
              <h1 className="headingg">
                Choose the Plan that{" "}
                <span style={{ color: "var(--lightbrown)" }}>
                  {" "}
                  Suits Your Business Best
                </span>{" "}
              </h1>
              <h3
                style={{
                  fontSize: "2rem",
                  color: "var(--offwhite)",
                  fontWeight: "700",
                }}
              >
                Maximize Your Productivity with a Mydoma Plan Tailored to You
              </h3>
              <p style={{ fontSize: "22px", color: "var(--white)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                laborum et distinctio modi reprehenderit praesentium doloremque
                possimus accusantium voluptate voluptatum!
              </p>

              <Tabs
                className="Tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <TabList>
                  <Tab eventKey="tab1">Monthly</Tab>
                  <Tab eventKey="tab2">Yearly</Tab>
                </TabList>
                <TabPanel>
                  <Pricing />
                </TabPanel>
                <TabPanel>
                  <Pricing2 />
                </TabPanel>
              </Tabs>
            </div>
            <Button
              style={{
                backgroundColor: "var(--darkblue)",
                color: "var(--white)",
                width: "15rem",
                margin: "auto",
                padding: "20px",
                fontSize: "19px",
                border: "2px solid var(--darkblue)",
              }}
            >
              Live Consultation($25)
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingIntro;
