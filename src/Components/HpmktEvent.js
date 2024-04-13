import React from "react";
import { Container, Row } from "react-bootstrap";
import e1 from "../assets/logo/events5.png";
import e2 from "../assets/events1.png";
import e3 from "../assets/events1.png";

import e4 from "../assets/events1.png";

import HpmktCard from "../cards/HpmktCard";

const HpmktEvent = () => {
  return (
    <Container>
      <h2 className="heading">
        Events <span>Schedule</span>
      </h2>
      <HpmktCard
        head="How designers are using technology for new revenue streams"
        det="Sulman Ali  Feb 27, 202"
        image={e1}
      />
      <HpmktCard
        head="How designers are using technology for new revenue streams"
        det="Sulman Ali  Feb 27, 202"
        image={e1}
      />{" "}
      <HpmktCard
        head="How designers are using technology for new revenue streams"
        det="Sulman Ali  Feb 27, 202"
        image={e1}
      />{" "}
      <HpmktCard
        head="How designers are using technology for new revenue streams"
        det="Sulman Ali  Feb 27, 202"
        image={e1}
      />{" "}
      <HpmktCard
        head="How designers are using technology for new revenue streams"
        det="Sulman Ali  Feb 27, 202"
        image={e1}
      />
    </Container>
  );
};

export default HpmktEvent;
