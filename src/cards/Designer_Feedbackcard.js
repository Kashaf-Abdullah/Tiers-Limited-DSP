import React from "react";
const Designer_Feedbackcard = (props) => {
  return (
    <div className="dsp-fdb-card">
      <div className="left-feedback-card">
        <img
          src={props.image}
          alt={props.name}
          style={{
            backgroundColor: "#DFF0D8",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
      <div
        className="right-feedback-card"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h5
          style={{
            color: "var(--greenish_gray)",
            fontWeight: "800",
            fontSize: "2.2rem",
          }}
        >
          {props.name}
        </h5>
        <p style={{ color: "var(--lightbrown)", margin: "5px", fontSize: "18px" }}>
          {props.price}
        </p>
        <p
          style={{
            color: "var(--lightbrown)",
            margin: "5px",
            fontSize: "12px",
          }}
        >
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default Designer_Feedbackcard;
