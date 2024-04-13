import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Discover = () => {
  return (
    <div className="discover" style={{ margin: "4rem 0 0 0" }}>
      <Container className="discover-con">
        <h2>
          Lorem ipsum dolor sit.<span>ipsum</span> ipsum <br />{" "}
          <span> Lorem, ipsum dolor. </span> Lorem, ipsum.
        </h2>
        <div
          className="dis-btn"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            className="buttonn"
            style={{
              backgroundColor: "var(--lightbrown)",
              color: "var(--black)",
              border: "3px solid var(--lightbrown)",
            }}
          >
            Start a free trial
          </button>
          <button
            className="buttonn"
            style={{
              backgroundColor: "transparent",
              color: "var(--white)",
              border: "2px solid var(--white)",
            }}
          >
            See Demo
          </button>
        </div>
      </Container>
    </div>
  );
};
export default Discover;
