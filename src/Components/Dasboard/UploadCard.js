import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const UploadCard = () => {
  const fileInputRef = useRef(null);

  const upload_card = {
    backgroundColor: "var(--offwhite)",
    margin: "1rem 0",
    borderRadius: "12px",
    width: "17rem",
    height: "13rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    padding: "1rem",
  };

  const icon_style = {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  };

  const text_style = {
    fontSize: "1rem",
    fontWeight: "bold",
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={upload_card} onClick={handleUploadClick}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => console.log("File uploaded:", e.target.files[0])} // Handle file upload here
      />
      <FontAwesomeIcon icon={faCamera} style={icon_style} />
      <span style={text_style}>Upload Photo</span>
    </div>
  );
};

export default UploadCard;
