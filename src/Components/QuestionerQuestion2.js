import React from "react";
import two from "../assets/2-4.png";
import justme from "../assets/justme.png";
import five from "../assets/5--10.png";
import eleven from "../assets/11-20.png";
import twentyplus from "../assets/21+.png";

const Question2 = ({ answer2, setAnswer2 }) => {
  const question2 = [
    {
      text: "Just Me",
      image: justme,
    },
    {
      text: "2-4",
      image: two,
    },
    {
      text: "5-10",
      image: five,
    },
    {
      text: "11-20",
      image: eleven,
    },
    {
      text: "21+",
      image: twentyplus,
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
      {question2.map((item, index) => (
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
              answer2 === item.text
                ? "3px solid var(--greenish_gray)"
                : "0px solid var(--greenish_gray)",
            boxShadow:
              answer2 !== item.text ? "0 0 10px 0 rgba(0, 0, 0, 0.2)" : "none",
            transition: "background-color 0.3s",
            borderRadius: "3px",
            height: "150px",
            textAlign: "center",
            margin: "10px 0",
          }}
          onClick={() => setAnswer2(item.text)}
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

export default Question2;
