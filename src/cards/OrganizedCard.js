import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";

const OrganizedCard = (props) => {
  const tickStyle = {
    color: "var(--greenish_gray)",
    borderRadius: "50%",
    fontSize: "24px",
    position: "relative",
    top: "4px",
    marginRight: "6px",
    backgroundColor:"var(--white)"
     };

  const listStyle = {
    
  };
  const list = {
    margin: "10px 0",
  };
  return (
    <Row
      style={{ display: "flex", flexDirection: props.dir, margin: "5rem 0" }}
    >
      <Col lg={6} md={6} sm={12}>
        <h5
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "var(--greenish_gray)",
          }}
        >
          {props.head1}
        </h5>
        <h4
          style={{
            fontSize: "1.7rem",
            fontWeight: "600",
            color: "var(--black)",
          }}
        >
          {props.head2}
        </h4>

        <p style={{ fontSize: "15px", color: "var(--greenish_gray)", margin: "2rem 0" }}>
          {props.text}{" "}
        </p>
        <ul
          style={{
            display: props.dis,
            fontSize: "0.9rem",
            listStyleType: "none",
            paddingLeft: "0rem",
          }}
        >
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i> Post your Ad
            for Lorem ipsum dolor sit.
          </li>
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i> Get Genuine
            offers Lorem ipsum dolor sit amet.
          </li>
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i>Sell your car
            Fast Lorem ipsum dolor sit amet.
          </li>
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i>Post your Ad for
            Lorem ipsum dolor sit.
          </li>
          <li style={{ margin: "10px 0", color: "var(--greenish_gray)" }}>
            <i class="fa fa-check-circle" style={tickStyle}></i>Get Genuine
            offers Lorem ipsum dolor sit.
          </li>
        </ul>
        <button
          className="buttonn"
          style={{
            backgroundColor: "var(--greenish_gray)",
            color: "var(--white)",
            fontSize: "15px",
            fontWeight: "800",
            border: "3px solid var(--darkblue)",
          }}
        >
          Learn More
        </button>
      </Col>
      <Col lg={6} md={6} sm={12}>
        <img
          src={props.i1}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            backgroundColor: "#DFF0D8",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            margin: "2rem 0",
          }}
        />
      </Col>
    </Row>
  );
};

export default OrganizedCard;
