import React, { useState } from "react";
import rightarrow from "../assets/rightarrow.png";
import ProgressBar from "../Components/QuestionerProgressBar";
import Question1 from "../Components/QuestionerQuestion1";
import Question2 from "../Components/QuestionerQuestion2";
import Question3 from "../Components/QuestionerQuestion3";
import Question4 from "../Components/QuestionerQuestion4";
import Question5 from "../Components/QuestionerQuestion5";

const Questioner = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer3, setAnswer3] = useState(Array(6).fill(false));
  const [showInputBox1, setShowInputBox1] = useState(false);
  const [showInputBox, setShowInputBox] = useState(false);
  const [otherAnswer1, setOtherAnswer1] = useState("");
  const [otherAnswer, setOtherAnswer] = useState("");

  const [formData, setFormData] = useState([
    { id: 1, email: "", option: "Manager" },
    { id: 2, email: "", option: "Manager" },
    { id: 3, email: "", option: "Manager" },
    { id: 4, email: "", option: "Manager" },
  ]);

  const handleChange = (index, key, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][key] = value;
    setFormData(updatedFormData);
  };

  const handleQuestionOpen = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };

  const addTeamMember = () => {
    const newId = formData.length + 1;
    setFormData([...formData, { id: newId, email: "", option: "" }]);
  };

  const handleAnswer1 = (text) => {
    setAnswer1(text);
    if (text === "Other") {
      setShowInputBox(true);
    } else {
      setShowInputBox(false);
    }
  };

  const handleEmailChange = (index, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index].email = value;
    setFormData(updatedFormData);
  };

  const handleAnswer4 = (text) => {
    setAnswer4(text);
    if (text === `Other (Please Specify)`) {
      setShowInputBox1(true);
    } else {
      setShowInputBox1(false);
    }
  };

  const handleOtherAnswerChange = (e) => {
    setOtherAnswer(e.target.value);
  };

  const handleOtherAnswerChange1 = (e) => {
    setOtherAnswer1(e.target.value);
  };

  return (
    <div>
      {currentQuestion === 1 ||
      currentQuestion === 2 ||
      currentQuestion === 3 ||
      currentQuestion === 4 ? (
        <div>
          <h1 className="questioner-section-heading">
            <span>design</span>stagepro
          </h1>
          <h3
            className="visual-head"
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              margin: "40px 0",
              textAlign: "center",
              color: "var(--greenish_gray)",
            }}
          >
            Help us get to know you better
          </h3>
        </div>
      ) : null}

      <ProgressBar
        currentQuestion={currentQuestion}
        answer2={answer2}
        handleQuestionOpen={handleQuestionOpen}
      />

      <p
        style={{
          color: "black",
          fontSize: "18px",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        {currentQuestion === 1 ? (
          <span>Select the role that best describes you.</span>
        ) : currentQuestion === 2 ? (
          <span>How many people work at your company?</span>
        ) : currentQuestion === 3 ? (
          <span>
            What is your main reason for choosing DesignFiles? Select all that
            apply.
          </span>
        ) : currentQuestion === 4 ? (
          <span>
            How did you hear about DesignFiles? Select all that apply.
          </span>
        ) : currentQuestion === 5 ? (
          <span>Why not invite your team to join?</span>
        ) : null}
      </p>

      <div
        className="row"
        style={{
          margin: "0px 30px 30px 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {currentQuestion === 1 && (
          <Question1
            answer1={answer1}
            handleAnswer1={handleAnswer1}
            showInputBox={showInputBox}
            otherAnswer={otherAnswer}
            handleOtherAnswerChange={handleOtherAnswerChange}
          />
        )}

        {currentQuestion === 2 && (
          <Question2 answer2={answer2} setAnswer2={setAnswer2} />
        )}

        {currentQuestion === 3 && (
          <Question3 answer3={answer3} setAnswer3={setAnswer3} />
        )}

        {currentQuestion === 4 && (
          <Question4
            answer4={answer4}
            handleAnswer4={handleAnswer4}
            showInputBox1={showInputBox1}
            handleOtherAnswerChange1={handleOtherAnswerChange1}
            otherAnswer1={otherAnswer1}
          />
        )}

        {currentQuestion === 5 && (
          <Question5
            formData={formData}
            handleChange={handleChange}
            addTeamMember={addTeamMember}
            handleEmailChange={handleEmailChange}
          />
        )}
      </div>

      <form>
        {showInputBox && currentQuestion === 1 ? (
          <div className="row" style={{ margin: "50px 10px" }}>
            <div className="col-lg-4 col-md-6 mx-auto text-left">
              <p style={{ fontWeight: "600", margin: "0px 0px 0px 0px" }}>
                Don't see our role listed? Enter it here:
              </p>
              <input
                type="text"
                value={otherAnswer}
                required
                onChange={handleOtherAnswerChange}
                placeholder="Your role..."
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <button
            type="button"
            disabled={
              (currentQuestion === 1 &&
                (!answer1 || (showInputBox && !otherAnswer))) ||
              (currentQuestion === 2 && !answer2) ||
              (currentQuestion === 3 &&
                answer3.every((answer) => answer === false)) ||
              (currentQuestion === 4 &&
                (!answer4 || (showInputBox1 && !otherAnswer1)))
            }
            style={{
              width: "150px",
              height: "40px",
              background: "var(--greenish_gray)",
              color: "var(--white)",
              fontWeight: "600",
              borderRadius: "3px",
            }}
            onClick={() => {
              if (
                !(answer2 === "Just Me" && currentQuestion === 4) &&
                currentQuestion < 5
              ) {
                handleQuestionOpen(currentQuestion + 1);
              }
            }}
          >
            {currentQuestion === 5 ? (
              <span>Finish </span>
            ) : answer2 === "Just Me" && currentQuestion === 4 ? (
              <span>Finish </span>
            ) : (
              <span>Continue </span>
            )}

            <span style={{ marginLeft: "5px" }}>
              <img src={rightarrow} alt="" width="16px" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questioner;
