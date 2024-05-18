import React from "react";

const Question5 = ({
  formData,
  handleChange,
  addTeamMember,
  handleEmailChange,
}) => {
  return (
    <div
      className="col-lg-9 col-md-9 text-left"
      style={{
        padding: "10px 20px",
        background: "#e8e8e8",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "3px",
        textAlign: "center",
        margin: "10px 20px",
      }}
    >
      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="col-lg-6 col-md-6 text-left"
          style={{ padding: "20px" }}
        >
          <p
            style={{
              color: "#202020",
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "left",
            }}
          >
            Enter your teammates' emails and designated roles
          </p>
          {formData.map((data, index) => (
            <div
              key={data.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <input
                type="email"
                style={{
                  width: "60%",
                  marginRight: "10px",
                  padding: "5px 10px",
                  background: "#00000000",
                  border: "1px solid #d5d5d5",
                  borderRadius: "3px",
                }}
                placeholder="Email Address...."
                value={data.email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
              />
              <select
                style={{
                  width: "40%",
                  padding: "5px 10px",
                  background: "#00000000",
                  border: "1px solid #d5d5d5",
                  borderRadius: "3px",
                }}
                value={data.option}
                onChange={(e) => handleChange(index, "option", e.target.value)}
              >
                <option value="Manager">Manager</option>
                <option value="Designer">Designer</option>
              </select>
            </div>
          ))}
          <div style={{ textAlign: "left" }}>
            <button
              onClick={addTeamMember}
              style={{
                padding: "4px",
                marginTop: "0px",
                background: "#00000000",
                color: "var(--greenish_gray)",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              <i
                className="fas fa-plus-circle"
                style={{ marginRight: "5px" }}
              ></i>
              <span style={{ color: "#000" }}>Add Team Member</span>
            </button>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 text-left"
          style={{ padding: "20px", textAlign: "center" }}
        >
          <p
            style={{
              color: "#202020",
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "left",
            }}
          >
            Team Benefits
          </p>
          <ul
            style={{ textAlign: "left", listStyleType: "none", padding: "0" }}
          >
            <li style={{ marginBottom: "10px" }}>
              <span
                style={{ marginRight: "10px", color: "var(--greenish_gray)" }}
              >
                &#10003;
              </span>{" "}
              Collaborate on and assign tasks within your team
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span
                style={{ marginRight: "10px", color: "var(--greenish_gray)" }}
              >
                &#10003;
              </span>{" "}
              Team and client communication from one central location+ ability
              to create and share private notes
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span
                style={{ marginRight: "10px", color: "var(--greenish_gray)" }}
              >
                &#10003;
              </span>{" "}
              Real-time email and in-app notifications to keep everyone in the
              loop
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span
                style={{ marginRight: "10px", color: "var(--greenish_gray)" }}
              >
                &#10003;
              </span>{" "}
              Easily add or remove team members as needed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Question5;
