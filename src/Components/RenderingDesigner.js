import React from "react";
import { Container } from "react-bootstrap";
import RenderingDesignerCard from "../cards/RenderingDesignerCard";

const RenderingDesigner = () => {
  return (
    <>
      <h1 className="heading">
        Rendering For <span>Every Designer</span>
      </h1>
      
      <RenderingDesignerCard bcolor="var(--lighttgrey)" />
      <RenderingDesignerCard rr="row-reverse" bcolor="var(--white)" />
      <RenderingDesignerCard bcolor="var(--lighttgrey)" />
    </>
  );
};

export default RenderingDesigner;
