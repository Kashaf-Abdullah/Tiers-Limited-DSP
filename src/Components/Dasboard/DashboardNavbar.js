import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { TabList, TabPanel,Tab, Tabs } from 'react-tabs';
import "./dashboard.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
const DashboardNavbar = () => {
  const [reflectionChecked, setReflectionChecked] = useState(false);
  const [reflectionChecked2, setReflectionChecked2] = useState(false);

  const handleReflectionChange = (e) => {
    setReflectionChecked(e.target.checked);
  };

  const handleReflectionChange2 = (e) => {
    setReflectionChecked2(e.target.checked);
  };

  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header
      class="border-bottom pt-1 dashboard-nav"
      style={{ backgroundColor: "var(--white)" }}
    >
      <div class="container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div class="" style={{ display: "flex", gap: "10px" }}>
            <div
              className="dash-color-sel"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <p
                style={{
                  color: "var(--black)",
                  marginBottom: "0rem",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Preview
              </p>
              <input
                type="checkbox"
                id="reflection-checkbox"
                checked={reflectionChecked}
                onChange={handleReflectionChange}
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  color: "black",
                  cursor: "pointer",
                  border: "2px solid var(--black)",
                }}
              />
            </div>

            <div
              className="dash-color-sel"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <p
                style={{
                  color: "var(--black)",
                  marginBottom: "0rem",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Reflection
              </p>
              <input
                type="checkbox"
                id="reflection-checkbox"
                checked={reflectionChecked2}
                onChange={handleReflectionChange2}
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  backgroundColor: "darkgreen",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="secondary tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "var(--black)",
                  border: "1px solid black",
                },
              }}
            >
              <Tab
                value="one"
                label="2D"
                style={{
                  color: "var(--black)",
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              />
              <Tab
                value="two"
                label="3D"
                style={{
                  color: "var(--black)",
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }} 
              />
            </Tabs>
          </div>
          {/*  */}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
