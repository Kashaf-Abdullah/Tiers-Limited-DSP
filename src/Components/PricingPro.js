import React from "react";
import { Row, Col, Card, Badge, Container } from "react-bootstrap";

const PricingPro = () => {
  return (
    <Container>
      <h2 className="heading">
        DSP VISUALIZER <span> PRO UPGRADE</span>
      </h2>
      <Row className="mt-4">
        <Col md={6}>
          <Card
            className="card-shadow border-2 mb-4"
            style={{
              border: "2px solid var(--greenish_gray)",
              backgroundColor: "var(--white)",
            }}
          >
            <Card.Body className="p-4">
              <div className="d-flex align-items-center">
                <h5
                  className="font-weight-medium mb-0"
                  style={{ fontSize: "1.6rem", color: "var(--greenish_gray)" }}
                >
                  Included on all plans{" "}
                </h5>
              </div>
              <Row>
                <Col lg={5} className="text-center">
                  <div
                    className="price-box my-3"
                    style={{ color: "var(--greenish_gray)", fontWeight: "700" }}
                  >
                    <sup>$</sup>
                    <span className="display-5">36</span>
                    <h6 className="">MONTHLY</h6>
                    <a
                      href="#"
                      className="btn font-14 border-0 text-white p-3 btn-block mt-3"
                      style={{ backgroundColor: "var(--greenish_gray)" }}
                    >
                      CHOOSE PLAN
                    </a>
                  </div>
                </Col>
                <Col lg={7} className="align-self-center">
                  <ul className="list-inline pl-3 font-14 font-weight-mediumk">
                    <li className="py-2">
                      <i className="icon-check text-info mr-2"></i>{" "}
                      <span>6 Days a Week </span>
                    </li>
                    <li className="py-2">
                      <i className="icon-check text-info mr-2"></i>{" "}
                      <span>Dedicated Trainer</span>
                    </li>
                    <li className="py-2">
                      <i className="icon-check text-info mr-2"></i>{" "}
                      <span>Diet Plan Included </span>
                    </li>
                    <li className="py-2">
                      <i className="icon-check text-info mr-2"></i>{" "}
                      <span>Morning and Evening Batches</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card
            className="card-shadow border-2 mb-4"
            style={{
              border: "2px solid var(--greenish_gray)",
              backgroundColor: "var(--white)",
            }}
          >
            <Card.Body className="p-4">
              <div className="d-flex align-items-center">
                <h5
                  className="font-weight-medium mb-0"
                  style={{ fontSize: "1.6rem", color: "var(--greenish_gray)" }}
                >
                  Included on all plans{" "}
                </h5>
              </div>
              <Row>
                <Col lg={5} className="text-center">
                  <div
                    className="price-box my-3"
                    style={{ color: "var(--greenish_gray)", fontWeight: "700" }}
                  >
                    <sup>$</sup>
                    <span className="display-5">30 </span>
                    <h6 className="">USD/MO</h6>
                    <a
                      href="#"
                      className="btn font-14 border-0 text-white p-3 btn-block mt-3"
                      style={{ backgroundColor: "var(--greenish_gray)" }}
                    >
                      CHOOSE PLAN
                    </a>
                  </div>
                </Col>
                <Col lg={7} className="align-self-center">
                  <ul className="list-inline pl-3 font-14 font-weight-medium">
                    <li className="py-2">
                      <i className="icon-check text-info mr-2"></i>{" "}
                      <span>6 Days a Week </span>
                    </li>
                    <li className="py-2">
                      <i className="icon-check text-info mr-2"></i>{" "}
                      <span>Dedicated Trainer</span>
                    </li>
                    <li className="py-2">
                      <i className="icon-check text-info mr-2"></i>{" "}
                      <span>Diet Plan Included </span>
                    </li>
                    <li className="py-2">
                      <i className="icon-check text-info mr-2"></i>{" "}
                      <span>Morning and Evening Batches</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingPro;
