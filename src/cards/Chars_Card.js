import React from "react";

const Chars_Card = (props) => {
  return (
    <div className="dsp-chars-card dsp-chars-c3">
      <h4>{props.head}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default Chars_Card;
