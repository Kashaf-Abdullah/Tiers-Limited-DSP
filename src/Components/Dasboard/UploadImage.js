import React, { useState } from "react";

const ProfileImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const dash_card = {
    backgroundColor: "#D3B683",
    margin: "1rem 0",
    borderRadius: "12px",
  };
  const dash_card_img = {
    width: "15rem",
    margin: " 13px",
  };

  return (
    <div className="container">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-input"
      />
      <label
        htmlFor="file-input"
        style={{
          width: "100%",
          backgroundColor: "var(--darkblue)",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        UPLOAD PICTURE
      </label>
      {selectedFile && (
        <div
          className="dash-main container"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className="dash-cards" style={dash_card}>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded File"
              style={dash_card_img}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImageUploader;
