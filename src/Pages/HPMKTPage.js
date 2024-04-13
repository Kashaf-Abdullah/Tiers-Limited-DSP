import React from "react";
import IntroHpmkt from "../Components/IntroHpmkt";
import HpmktEvent from "../Components/HpmktEvent";
import Footer from "../Components/Footer";
import Discover from "../Components/Discover";
import Visualizer from "../Components/Visualizer";
import Community from "../Components/Community";
import Navbarr from "../Components/Navbarr";

const HPMKTPage = () => {
  return (
    <div style={{ overflowY: "hidden" }}>
      <Navbarr />
      <IntroHpmkt />
      <HpmktEvent />
      <Visualizer />
      <Community />
      <Discover />
      <Footer />
    </div>
  );
};

export default HPMKTPage;
