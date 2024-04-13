import React from "react";

const DashCard = ({ image }) => {
  const dash_card = {
    backgroundColor: "#F9F6EE",
    margin: "1rem 0",
    borderRadius: "12px",
    boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  };

  const dash_card_img = {
    width: "15rem",
    margin: " 13px",
    borderRadius: "9px",
    height: "11.5rem",
  };

  return (
    <div className="dash-cards" style={dash_card}>
      <img src={image} alt="" style={dash_card_img} />
    </div>
  );
};

export default DashCard;
