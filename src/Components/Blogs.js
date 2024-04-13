import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../assets/blog1.png";

import BlogsCard from "../cards/BlogsCard";
const Blogs = () => {
  return (
    <Container>
      <h1 className="heading">
        ALL <span> BLOGS</span>
      </h1>

      <Row className="blog-row" style={{ margin: "4rem 0" }}>
        {" "}
        {/* Adding custom class to Row */}
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </Row>
    </Container>
  );
};

export default Blogs;
