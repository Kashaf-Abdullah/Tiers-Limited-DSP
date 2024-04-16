import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import intro from "../assets/bc6.PNG";
import { TabList, TabPanel, Tab, Tabs } from "react-tabs";
import Pricing from "./Pricing";
import Pricing2 from "./Pricing2";
import d1 from "../assets/team3.jpg";
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
                  color: "var(--white)",
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
                backgroundColor: "var(--greenish_gray)",
                color: "var(--white)",
                width: "26rem",
                margin: "auto",
                padding: "20px",
                fontSize: "26px",
                border: "2px solid var(--greenish_gray)",
              }}
            >
            Live Consultation - $29/hr
            <br /> 
           
             $300/lifetime of membership
             <br />
            
  <img
              src={d1}
              alt=""
              className=""
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",

                objectFit: "cover",
                objectPosition: "center right",
                border: "2px solid var(--greenish_gray)",
              }}
            />
           </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingIntro;
