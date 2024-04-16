import React from "react";
import { Container, Badge } from "react-bootstrap";
import user from "../assets/user.jpeg";
const CommentsCard = () => {
  return (
    <Container>
      <blockquote class="quote-box">
        <p className="quotation-mark" style={{ color: "var(--greenish_gray)" }}>
          “
        </p>
        <p
          className="quote-text"
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "var(--greenish_gray)",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          debitis possimus unde, cumque aliquid sint.
        </p>
        <hr />
        <div className="blog-post-actions">
          <p
            className="blog-post-bottom pull-left"
            style={{ fontSize: "22px", color: "var(--greenish_gray)" }}
          >
            <img
              src={user}
              alt=""
              style={{
                width: "4rem",
                height: "4rem",
                marginRightt: "1.9rem",
                borderRadius: "50%",
              }}
            />
            &nbsp;&nbsp;Abraham Lincoln
          </p>
          <p className="blog-post-bottom pull-right">
            <Badge className="quote-badge">743</Badge> ❤
          </p>
        </div>
      </blockquote>
    </Container>
  );
};

export default CommentsCard;
