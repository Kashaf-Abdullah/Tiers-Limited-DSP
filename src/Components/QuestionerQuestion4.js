import React from "react";
import search from "../assets/search.png";
import dollar from "../assets/dollar.png";
import share from "../assets/share.png";
import edit from "../assets/edit.png";
import comment from "../assets/comment.png";
import others from "../assets/others.png";

const Question4 = ({
  answer4,
  handleAnswer4,
  showInputBox1,
  handleOtherAnswerChange1,
  otherAnswer1,
}) => {
  const question4 = [
    {
      text: `Online Search
      (Google, Yahoo!,
      Bing, etc.)`,
      image: search,
    },
    {
      text: `Advertising`,
      image: dollar,
    },
    {
      text: `Social Media
      (Facebook,
      Instagram,
      Pinterest, etc.)`,
      image: share,
    },
    {
      text: `Blog or publication`,
      image: edit,
    },
    {
      text: `Recommended by
      Friend or
      Organization`,
      image: comment,
    },
    {
      text: `Other (Please Specify)`,
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
      {question4.map((item, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-5 mb-4 ml-4 text-left"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            background: "#e8e8e8",
            border:
              answer4 === item.text
                ? "3px solid var(--greenish_gray)"
                : "0px solid var(--greenish_gray)",
            boxShadow:
              answer4 !== item.text ? "0 0 10px 0 rgba(0, 0, 0, 0.2)" : "none",
            transition: "background-color 0.3s",
            borderRadius: "3px",
            height: "150px",
            textAlign: "center",
            margin: "10px 20px",
          }}
          onClick={() => handleAnswer4(item.text)}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "45%",
              transform: "translateY(-50%)",
              background: "#fff",
              width: "50px",
              height: "50px",
              borderRadius: "25px",
              margin: "10px 20px",
              minWidth: "50px",
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{ marginTop: "10px" }}
              width="30px"
            />
          </div>
          <div
            style={{
              marginLeft: "60px",
              marginRight: "10px",
              maxWidth: "200px",
            }}
          >
            <p style={{ fontWeight: "600", margin: "0px" }}>{item.text}</p>
          </div>
        </div>
      ))}
      {showInputBox1 ? (
        <div
          className="row"
          style={{ margin: "50px 10px", marginBottom: "0px" }}
        >
          <div className="col-lg-4 col-md-6 mx-auto text-left">
            <p style={{ fontWeight: "600", margin: "0px 0px 0px 0px" }}>
              Enter it here:
            </p>
            <input
              type="text"
              value={otherAnswer1}
              required
              onChange={handleOtherAnswerChange1}
              placeholder="How did you hear about us?"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "3px",
                fontSize: "14px",
                border: "2px solid var(--greenish_gray)",
                marginBottom: "20px",
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Question4;
