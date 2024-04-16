import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCog } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
import logo from "../../assets/logodsp.png";
import dicon1 from "../../assets/dashboardicon/d_icon1.jpg";
import dicon2 from "../../assets/dashboardicon/d_icon2.jpg";
import dicon3 from "../../assets/dashboardicon/d_icon3.jpg";
import dicon4 from "../../assets/dashboardicon/d_icon4.jpg";
import dicon5 from "../../assets/dashboardicon/d_icon5.jpg";
import dicon6 from "../../assets/dashboardicon/d_icon6.jpg";
import dicon7 from "../../assets/dashboardicon/d_icon7.jpg";

const DashboardSideBar = ({ setSelectedMainComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [hoveredItem, setHoveredItem] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem("");
  };

  const handleItemClick = (item) => {
    setSelectedMainComponent(item);
    setIsSidebarOpen(false); // Close sidebar when item is clicked
  };

  const sidebarItems = [
    { name: "Living Room", icon: dicon7 },
    { name: "Kitchen", icon: dicon4 },
    { name: "Bathroom", icon: dicon1 },
    { name: "Outdoor", icon: dicon6 },
    { name: "Bedroom", icon: dicon5 },
    { name: "Commercial", icon: dicon2 },
  ];

  const sidebar_nav_link = {
    color: "black",
    fontWeight: "600",
  };

  const dashboard_icon = {
    width: "23px",
    height: "20px",
    marginRight: "13px",
    color: "black",
  };

  return (
    <nav
      style={{ backgroundColor: "var(--white)" }}
      className={`navbar navbar-vertical navbar-expand-lg navbar-light dashboard-sidebar ${
        isSidebarOpen ? "" : "sidebar-closed"
      }`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
          style={{ backgroundColor: "var(--offwhite)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand dash-sidebar-logo" href="#">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
            style={{
              width: "9rem",
              height: "6rem",
              borderRadius: " 0rem 0rem 1rem 1rem",
            }}
          />
        </a>

        <div
          className={`collapse navbar-collapse ${isSidebarOpen ? "show" : ""}`}
          id="sidebarCollapse"
        >
          <ul
            className="navbar-nav flex-column sidebarr"
            style={{ margin: "5px" }}
          >
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className="nav-item"
                onClick={() => handleItemClick(item.name)}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  className="nav-link"
                  href="#"
                  style={
                    hoveredItem === item.name
                      ? {
                          ...sidebar_nav_link,
                          backgroundColor: "var( --greenish_gray)",
                          color:"var(--white)"
                        }
                      : sidebar_nav_link
                  }
                >
                  <img
                    src={item.icon}
                    style={dashboard_icon}
                    alt={item.name}
                  ></img>
                  {item.name}
                  {item.badge && (
                    <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Settings item */}
          <div className="mt-auto">
            <ul
              className="navbar-nav flex-column sidebarr"
              style={{ margin: "5px" }}
            >
              <li
                className="nav-item"
                onClick={() => handleItemClick("Settings")}
                onMouseEnter={() => handleMouseEnter("Settings")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  className="nav-link"
                  href="#"
                  style={
                    hoveredItem === "Settings"
                      ? {
                          ...sidebar_nav_link,
                          backgroundColor: "var( --greenish_gray)",
                          color:"var(--white)"
                        }
                      : sidebar_nav_link
                  }
                >
                  <FontAwesomeIcon icon={faCog} style={dashboard_icon} />{" "}
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardSideBar;
