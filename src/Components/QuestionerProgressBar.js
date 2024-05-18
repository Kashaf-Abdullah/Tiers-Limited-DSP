// ProgressBar.js
import React from "react";

const ProgressBar = ({ currentQuestion, answer2, handleQuestionOpen }) => {
  return (
    <div>
      <p
        style={{
          color: "gray",
          fontSize: "12px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Question {currentQuestion} of{" "}
        {answer2 === "Just Me" ? <span>4</span> : <span>5</span>}
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {[1, 2, 3, 4, 5].map((questionNumber) =>
          // Conditionally render the progress bar div based on the selected answer for question 2
          answer2 === "Just Me" && questionNumber > 4 ? null : (
            <div
              key={questionNumber}
              style={{
                width: "50px",
                height: "8px",
                margin: "0 2px",
                backgroundColor:
                  currentQuestion >= questionNumber ? "#cccccc" : "#e8e8e8",
              }}
              onClick={() => handleQuestionOpen(questionNumber)}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
