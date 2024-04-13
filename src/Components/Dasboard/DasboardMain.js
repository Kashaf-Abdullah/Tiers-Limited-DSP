import React, { useState } from "react";
import i from "../../assets/bc1.jpeg";
import UploadImage from "./UploadImage";
import DashCard from "./DashCard";
import UploadCard from "./UploadCard";

const DasboardMain = ({ component, i1, i2, i3, i4, i5 }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  const handleUploadClick = () => {
    console.log("Upload card clicked!");
  };

  return (
    <main class="py-6 dashboard-main">
      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "2rem",
          margin: "0.3rem 0 3rem 0",
          color: "var(--grey)",
        }}
      >
        <span
          style={{
            backgroundColor: "#aaa",
            content: "a0",
            flexGrow: "1",
            height: "2px",
            position: "relative",
            top: "0.6em",
            marginRight: "0.35em",
          }}
        ></span>
        {component}
        <span
          style={{
            backgroundColor: "#aaa",
            content: "a0",
            flexGrow: "1",
            height: "2px",
            position: "relative",
            top: "0.6em",
            marginLeft: "0.35em",
          }}
        ></span>
      </h1>
      {/* <UploadImage /> */}
      <div
        className="dash-main container"
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <UploadCard onClick={handleUploadClick} />

        <DashCard image={i1} />
        <DashCard image={i2} />
        <DashCard image={i3} />
        <DashCard image={i4} />
        <DashCard image={i5} />
        <DashCard image={i} />
        <DashCard image={i} />
        {showMore && <>{/* Render more DashCards as needed */}</>}
        {!showMore && (
          <div style={{ textAlign: "center", width: "100%" }}>
            <button
              onClick={handleShowMore}
              style={{
                backgroundColor: "var(--darkblue)",
                color: "var(--white)",
                fontSize: "15px",
                fontWeight: "600",
                margin: "1rem 0",
                border: "3px solid var(--darkblue)",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              See More
            </button>
          </div>
        )}
        {showMore && (
          <div style={{ textAlign: "center", width: "100%" }}>
            <button
              onClick={handleShowLess}
              style={{
                backgroundColor: "var(--darkblue)",
                color: "var(--white)",
                fontSize: "15px",
                fontWeight: "600",
                margin: "1rem 0",
                border: "3px solid var(--darkblue)",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default DasboardMain;
