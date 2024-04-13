import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import intro from "../assets/bc6.PNG";
import { FaClock, FaComment, FaEye, FaUser, FaCalendar } from "react-icons/fa6";
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

const IntroHpmkt = () => {
  const list_an = {
    textDecoration: "none",
    border: "1px solid var(--offwhite)",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "var(--offwhite)",
    fontWeight: "600",
  };
  return (
    <>
      <Container fluid style={{ backgroundColor: "var(--darkblue)" }}>
        <Container>
          <Row style={{ margin: "7rem 0 1rem 0" }}>
            <Col
              lg={6}
              md={6}
              sm={12}
              style={{
                backgroundImage: `url(${intro})`,
                textAlign: "center",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                padding: "20px",
                margin: "3rem 0",
              }}
            >
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    fontWeight: "700",
                    fontSize: "2.3rem",
                    color: "var(--white)",
                  }}
                >
                  {" "}
                  Lorem, ipsum dolor.<span>Lorem, ipsum.</span> Lorem.
                  <br /> <span> Lorem, ipsum dolor.</span> Lorem, ipsum.
                </h2>

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
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="intro-content" style={{ margin: "3rem 0" }}>
                <h1
                  style={{
                    fontSize: "3.1rem",
                    fontWeight: "700",
                    color: "var(--offwhite)",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Lorem ipsum dolor sit amet.{" "}
                </h1>
                <h4
                  style={{
                    fontSize: "2.3rem",
                    fontWeight: "700",
                    color: "var(--lightbrown)",
                  }}
                >
                  {" "}
                  Lorem ipsum dolor sit.
                </h4>

                <p style={{ fontSize: "22px", color: "var(--offwhite)" }}>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div
                  className="dis-btn"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "left",
                    margin: "1.2rem 0",
                  }}
                >
                  <button
                    className="buttonn"
                    style={{
                      backgroundColor: "var(--offwhite)",
                      color: "var(--darkblue)",
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
                <p style={{ color: "var(--white)" }}>
                  Get started for free – no credit card required
                </p>
                <div class="blog-tags">
                  <ul
                    style={{
                      paddingLeft: "0rem",
                      margin: "2rem 0",
                      listStyle: "none",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "left",
                      gap: "22px",
                    }}
                  >
                    <li>
                      <a style={list_an} href="#">
                        <FaCalendar
                          style={{ position: "relative", bottom: "3px" }}
                        />{" "}
                        Multiple Dates
                      </a>
                    </li>
                    <li>
                      <a style={list_an} href="#">
                        <FaUser
                          style={{ position: "relative", bottom: "3px" }}
                        />{" "}
                        Multiple Times
                      </a>
                    </li>
                    <li>
                      <a style={list_an} href="#">
                        <FaClock
                          style={{ position: "relative", bottom: "3px" }}
                        />{" "}
                        2 days ago
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="intro-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4e7352"
            fill-opacity="1"
            d="M0,288L720,192L1440,320L1440,0L720,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default IntroHpmkt;
