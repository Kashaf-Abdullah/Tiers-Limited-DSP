import React from "react";
import Intro from "../Components/Intro";
import Resources from "../Components/Resources";
import Pr_Temp from "../Components/Pr_Temp";
import Pr_Events from "../Components/Pr_Events";
import RecordingEvent from "../Components/RecordingEvent";
import Footer from "../Components/Footer";
import Navbarr from "../Components/Navbarr";

const LearnPage = () => {
  return (
    <div>
      <Navbarr />
      <Intro />
      <Resources />
      <Pr_Temp />
      <Pr_Events />
      <RecordingEvent />
      <Footer />
    </div>
  );
};

export default LearnPage;
