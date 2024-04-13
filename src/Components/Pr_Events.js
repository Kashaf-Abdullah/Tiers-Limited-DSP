import React from "react";
import { Container } from "react-bootstrap";
import { FaCalendar, FaClock, FaUser } from "react-icons/fa";

const Pr_Events = () => {
  const list_an = {
    textDecoration: "none",
    border: "1px solid var(--grey)",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "var(--darkblue)",
    fontWeight: "600",
  };
  return (
    <Container>
      <h3 className="heading">Premium Events</h3>
      <div class="blog-container" style={{ margin: "2rem 0" }}>
        <div class="blog-header">
          <div class="blog-cover">
            <div class="blog-author">
              <h3>Russ Beye</h3>
            </div>
          </div>
        </div>

        <div class="blog-body">
          <h4
            style={{
              fontSize: "2.3rem",
              fontWeight: "700",
              color: "var(--lightbrown)",
            }}
          >
            {" "}
            Lorem ipsum dolor sit amet.
          </h4>
          <p
            style={{ fontSize: "22px", color: "var(--grey)", margin: "1rem 0" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, in
            itaque beatae laboriosam at necessitatibus.
          </p>

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
        </div>
      </div>
    </Container>
  );
};

export default Pr_Events;
