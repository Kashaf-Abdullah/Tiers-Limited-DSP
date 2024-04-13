import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { FaClock, FaComment, FaEye, FaUser, FaCalendar } from "react-icons/fa6";
import b_img from "../assets/bc2.jpg";

const EventsCard = () => {
  const list_an = {
    textDecoration: "none",
    border: "1px solid var(--grey)",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "var(--darkblue)",
    fontWeight: "600",
  };
  return (
    <Col xs={12} sm={8} md={6} lg={4} style={{ margin: "1rem 0" }}>
      <Card>
        <Card.Img src={b_img} alt="Bologna" />
        <div className="card-img-overlay">
          <Button variant="light" size="sm">
            Lorem Ipsum{" "}
          </Button>
        </div>
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "24px",
              color: "var(--lightbrown)",
              fontWeight: "600",
            }}
          >
            Lorem Ipsum is not simply random{" "}
          </Card.Title>

          <Card.Text style={{ fontSize: "15px", color: "var(--grey)" }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by inject
          </Card.Text>
          <div class="blog-tags">
            <ul
              style={{
                paddingLeft: "0rem",
                marginBottom: "2rem",
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
        </Card.Body>
      </Card>
    </Col>
  );
};
export default EventsCard;
