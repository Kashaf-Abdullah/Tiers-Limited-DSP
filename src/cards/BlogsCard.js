import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { FaClock, FaComment, FaEye, FaUser } from "react-icons/fa6";

import b_img from "../assets/bc2.jpg";
const BlogsCard = () => {
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
          <Card.Title>Lorem Ipsum is not simply random </Card.Title>
          <small className="text-muted cat">
            <FaClock style={{ position: "relative", bottom: "2px" }} /> 30
            minutes
            <FaUser
              style={{ position: "relative", bottom: "2px", marginLeft: "6px" }}
            />{" "}
            4 portions
          </small>
          <Card.Text>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by inject
          </Card.Text>
          <Button
            style={{
              backgroundColor: "var(--darkblue)",
              border: "1px solid var(--darkblue)",
            }}
          >
            Read More
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM</div>
          <div className="stats">
            <FaEye style={{ position: "relative", bottom: "2px" }} /> 1347
            <FaComment
              style={{ position: "relative", bottom: "2px", marginLeft: "6px" }}
            />{" "}
            12
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default BlogsCard;
