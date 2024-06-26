import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import t1 from "../assets/team1.jpg";
import t2 from "../assets/team2.jpg";
import t3 from "../assets/team3.jpg";

import DesignerCard from "../cards/DesignerCard";
const DesignerThough = () => {
  return (
    <>
      <DesignerCard bcolor="var(--lightgrey)" rr="row-reverse" image={t1}></DesignerCard>
      <DesignerCard bcolor="var(--white)" rr="row" image={t2}></DesignerCard>
      <DesignerCard bcolor="var(--lightgrey)" rr="row-reverse" image={t3}></DesignerCard>
    </>
  );
};

export default DesignerThough;
