import React, { useState } from "react";
import "./dashboard.css";
import DashboardSideBar from "./DashboardSideBar";
import DashboardNavbar from "./DashboardNavbar";
import DasboardMain from "./DasboardMain";
import p1 from "../../assets/object/o1.jpg";
import p2 from "../../assets/object/o2.jpg";
import p3 from "../../assets/object/o3.jpg";
import p4 from "../../assets/object//o4.jpg";
import p5 from "../../assets/object/o5.jpg";
import p6 from "../../assets/object/o6.jpg";
import p7 from "../../assets/object/o7.jpg";

const Dashboard = () => {
  const [selectedMainComponent, setSelectedMainComponent] = useState(null);

  return (
    <>
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <DashboardSideBar setSelectedMainComponent={setSelectedMainComponent} />

        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <DashboardNavbar />
          {/* <DasboardMain /> */}
          {selectedMainComponent === "Living Room" && (
            <DasboardMain
              component="Living Room"
              i1={p1}
              i2={p2}
              i3={p3}
              i4={p4}
              i5={p5}
            />
          )}
          {selectedMainComponent === "Kitchen" && (
            <DasboardMain
              component="Kitchen"
              i1={p6}
              i2={p7}
              i3={p3}
              i4={p4}
              i5={p5}
            />
          )}
          {selectedMainComponent === "Bathroom" && (
            <DasboardMain
              component="Bathroom"
              i1={p4}
              i2={p5}
              i3={p3}
              i4={p4}
              i5={p5}
            />
          )}
          {selectedMainComponent === "Outdoor" && (
            <DasboardMain
              component="Outdoor"
              i1={p6}
              i2={p7}
              i3={p3}
              i4={p4}
              i5={p5}
            />
          )}
          {selectedMainComponent === "Bedroom" && (
            <DasboardMain
              component="Bedroom"
              i1={p1}
              i2={p2}
              i3={p3}
              i4={p4}
              i5={p5}
            />
          )}
          {selectedMainComponent === "Commercial" && (
            <DasboardMain
              component="Commercial"
              i1={p4}
              i2={p5}
              i3={p3}
              i4={p4}
              i5={p5}
            />
          )}
          {selectedMainComponent === "Elevation" && (
            <DasboardMain
              component="Elevation"
              i1={p1}
              i2={p2}
              i3={p3}
              i4={p4}
              i5={p5}
            />
          )}
          {selectedMainComponent === "Mosque" && (
            <DasboardMain
              component="Mosque"
              i1={p4}
              i2={p5}
              i3={p3}
              i4={p4}
              i5={p5}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
