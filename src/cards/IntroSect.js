import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const IntroSect = (props) => {
  return (
    <Col lg={12}>
      <div className="intro-content" style={{ margin: "6rem 0" }}>
        <h1 className="headingg" style={{ color: "var(--darkblue)" }}>
          {props.head1}{" "}
          <span style={{ color: "var(--white)" }}>{props.head2}</span>{" "}
        </h1>
        {/* <p style={{ fontSize: "22px", color: "var(--white)" }}>Win more projects and wow your clients with DSP, the premier platform for Interior Designers.</p> */}
        <div
          className="dis-btn"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "1.2rem 0",
          }}
        >
          <button
            className="buttonn"
            style={{
              backgroundColor: "var(--darkblue)",
              color: "var(--white)",
              fontSize: "15px",
              fontWeight: "800",
              border: "3px solid var(--darkblue)",
            }}
          >
            Start a free trial
          </button>
          <button
            className="buttonn"
            style={{
              backgroundColor: "var(--white)",
              fontSize: "15px",
              fontWeight: "800",
              color: "var(--lightbrown)",
              border: "2px solid var(--white)",
            }}
          >
            See Demo
          </button>
        </div>
        <div className="logo-social-media" style={{ margin: "1rem 0" }}>
          <FaFacebook
            style={{
              background: "var(--darkblue)",
              color: "var(--white)",
              margin: "2px",
              fontSize: "33px",
              borderRadius: "50%",
              marginRight: "4px",
              padding: "6px",
            }}
          />

          <FaInstagram
            style={{
              background: "var(--darkblue)",
              color: "var(--white)",
              margin: "2px",
              fontSize: "33px",
              borderRadius: "50%",
              marginRight: "4px",
              padding: "6px",
            }}
          />

          <FaYoutube
            style={{
              background: "var(--darkblue)",
              color: "var(--white)",
              margin: "2px",
              fontSize: "33px",
              borderRadius: "50%",
              marginRight: "4px",
              padding: "6px",
            }}
          />
          <FaPinterest
            style={{
              background: "var(--darkblue)",
              color: "var(--white)",
              margin: "2px",
              fontSize: "33px",
              borderRadius: "50%",
              marginRight: "4px",
              padding: "6px",
            }}
          />
          <FaTwitter
            style={{
              background: "var(--darkblue)",
              color: "var(--white)",
              margin: "2px",
              fontSize: "33px",
              borderRadius: "50%",
              marginRight: "4px",
              padding: "6px",
            }}
          />

          <FaLinkedin
            style={{
              background: "var(--darkblue)",
              color: "var(--white)",
              margin: "2px",
              fontSize: "33px",
              borderRadius: "50%",
              marginRight: "4px",
              padding: "6px",
            }}
          />
        </div>

        <p style={{ color: "var(--white)" }}>
          "Discover your space's potential with our interactive interior design
          solutions."
        </p>
        {/* <Row className='intro-rev'>
                <Col><img src={star} alt="" /></Col>
                <Col><img src={star2} alt="" /></Col>
                <Col><img src={star3} alt="" /></Col>
                <Col><img src={star4} alt="" /></Col>
              </Row> */}
      </div>
    </Col>
  );
};
export default IntroSect;
