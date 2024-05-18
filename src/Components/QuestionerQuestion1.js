import React from "react";
import decorator from "../assets/decorator.png";
import designer from "../assets/designer.png";
import stager from "../assets/stager.png";
import student from "../assets/student.png";
import others from "../assets/others.png";

const Question1 = ({ answer1, handleAnswer1 }) => {
  const question1 = [
    {
      text: "Interior Designer/ Decorator",
      image: decorator,
    },
    {
      text: "E-Designer",
      image: designer,
    },
    {
      text: "Stager / Realtor",
      image: stager,
    },
    {
      text: "Student",
      image: student,
    },
    {
      text: "Other",
      image: others,
    },
  ];

  return (
    <div
      className="row"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {question1.map((item, index) => (
        <div
          key={index}
          className="col-lg-2 col-md-3 mx-auto text-left"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            background: "#e8e8e8",
            border:
              answer1 === item.text
                ? "3px solid var(--greenish_gray)"
                : "0px solid var(--greenish_gray)",
            boxShadow:
              answer1 !== item.text ? "0 0 10px 0 rgba(0, 0, 0, 0.2)" : "none",
            transition: "background-color 0.3s",
            borderRadius: "3px",
            height: "150px",
            textAlign: "center",
            margin: "10px 0",
          }}
          onClick={() => handleAnswer1(item.text)}
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
              margin: "10px 0",
            }}
          >
            <img src={item.image} alt="" width="30px" />
          </div>
          <p style={{ fontWeight: "600", margin: "0px 0px 10px 0px" }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Question1;
