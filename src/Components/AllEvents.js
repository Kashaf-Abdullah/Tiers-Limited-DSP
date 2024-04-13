import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../assets/blog1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import EventsCard from "../cards/EventsCard";
const AllEvents = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container data-aos="fade-up">
      <h1 className="heading">
        ALL <span> EVENTS</span>
      </h1>

      <Row className="blog-row" style={{ margin: "4rem 0" }}>
        {" "}
        {/* Adding custom class to Row */}
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </Row>
    </Container>
  );
};

export default AllEvents;
