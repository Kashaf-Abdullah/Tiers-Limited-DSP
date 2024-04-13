import React from "react";

const RecordingCard = (props) => {
  return (
    <div className="dsp-fdb-card">
      <img src={props.image} alt={props.name} style={{ width: "15rem",borderRadius:"10px" }} />
     
    </div>
  );
};

export default RecordingCard;
