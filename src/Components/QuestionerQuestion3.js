import React from "react";
import create from "../assets/create.png";
import present from "../assets/present.png";
import submit from "../assets/submit.png";
import track from "../assets/track.png";
import task from "../assets/task.png";
import progress from "../assets/progress.png";

const Question3 = ({ answer3, setAnswer3 }) => {
  const question3 = [
    {
      text: `Create Floor Plans,
      MoodbOardS, and
      3D Room
      Renderings`,
      image: create,
    },
    {
      text: `Present designs
      and communicate
      with clients`,
      image: present,
    },
    {
      text: `Submit quotes,
      invoices and accept
      online payments`,
      image: submit,
    },
    {
      text: `Create and submit
      RFQs, pos and
      track order status`,
      image: track,
    },
    {
      text: `Task management
      and time tracking`,
      image: task,
    },
    {
      text: `QuickBooks
      integration and
      financial reports`,
      image: progress,
    },
  ];

  const handleAnswer3 = (index) => {
    const newAnswer3 = [...answer3];
    newAnswer3[index] = !newAnswer3[index];
    setAnswer3(newAnswer3);
  };

  return (
    <div
      className="row"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {question3.map((item, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-5 mb-4 ml-4 text-left"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            background: "#e8e8e8",
            border: answer3[index]
              ? "3px solid var(--greenish_gray)"
              : "0px solid var(--greenish_gray)",
            boxShadow: answer3[index]
              ? "0 0 10px 0 rgba(0, 0, 0, 0.2)"
              : "none",
            transition: "background-color 0.3s",
            borderRadius: "3px",
            height: "150px",
            textAlign: "center",
            margin: "10px 20px",
          }}
          onClick={() => handleAnswer3(index)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#fff",
              width: "50px",
              height: "50px",
              borderRadius: "25px",
              margin: "10px 10px",
              minWidth: "50px",
            }}
          >
            <img src={item.image} alt="" width="30px" />
          </div>
          <div
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              maxWidth: "200px",
            }}
          >
            <p style={{ fontWeight: "600", margin: "0px" }}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question3;
