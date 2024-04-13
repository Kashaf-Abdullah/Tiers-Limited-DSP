import React from "react";
import { Row } from "react-bootstrap";
import { FaClock, FaComment, FaEye, FaUser, FaCalendar } from "react-icons/fa6";

const HpmktCard = (props) => {
  const list_an = {
    textDecoration: "none",
    border: "1px solid var(--darkblue)",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "var(--darkblue)",
    fontWeight: "600",
  };
  return (
    <Row>
      <div
        className="hpmkt-det"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#fafafa",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          marginBottom: "22px",
        }}
      >
        <div className="left-hpmkt-det">
          <h5
            style={{
              fontSize: "2.3rem",
              fontWeight: "700",
              color: "var(--darkblue)",
            }}
          >
            {props.head}
          </h5>

          <h5
            style={{
              fontSize: "1.9rem",
              fontWeight: "700",
              color: "var(--lightbrown)",
            }}
          >
            {props.head}
          </h5>
          <p
            style={{
              fontSize: "1.5rem",

              color: "var(--grey)",
            }}
          >
            {props.det}
          </p>
          <button
            className="buttonn"
            style={{
              backgroundColor: "var(--lightbrown)",
              color: "var(--white)",
              fontWeight: "700",
              border: "3px solid var(--lightbrown)",
            }}
          >
            Register Now
          </button>

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
                  <FaCalendar style={{ position: "relative", bottom: "3px" }} />{" "}
                  Multiple Dates
                </a>
              </li>
              <li>
                <a style={list_an} href="#">
                  <FaUser style={{ position: "relative", bottom: "3px" }} />{" "}
                  Multiple Times
                </a>
              </li>
              <li>
                <a style={list_an} href="#">
                  <FaClock style={{ position: "relative", bottom: "3px" }} /> 2
                  days ago
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-hpmkt-det">
          <img src={props.image} alt="" />
        </div>
      </div>
    </Row>
  );
};

export default HpmktCard;
