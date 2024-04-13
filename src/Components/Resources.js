import React from "react";
import {
  FaRuler,
  FaUser,
  FaRulerCombined,
  FaTasks,
  FaClipboardCheck,
  FaFileContract,
  FaCamera,
  FaUserPlus,
  FaFileInvoiceDollar,
} from "react-icons/fa";

import ResourceCateg from "../cards/ResourceCateg";
import { Container } from "react-bootstrap";

const Resources = () => {
  const templatesData = [
    { icon: <FaRuler />, text: "Delivery Measuring Guide Template" },
    { icon: <FaUser />, text: "Human Ruler Template" },
    { icon: <FaRulerCombined />, text: "Measure Your Space Template" },
    { icon: <FaTasks />, text: "Task Management Template" },
    { icon: <FaClipboardCheck />, text: "The Interior Designer Questionnaire" },
    { icon: <FaFileContract />, text: "Contract Template" },
    { icon: <FaCamera />, text: "Interior Photo Presets Guide" },
    { icon: <FaUserPlus />, text: "Client Welcome Package Template" },
    { icon: <FaFileInvoiceDollar />, text: "Quotation Template" },
  ];

  return (
    <Container>
      <h2 className="heading">
        USEFUL FEATURES FOR <span> INTERIOR DESIGNERS</span>
      </h2>
      <ResourceCateg templates={templatesData} />
    </Container>
  );
};

export default Resources;
