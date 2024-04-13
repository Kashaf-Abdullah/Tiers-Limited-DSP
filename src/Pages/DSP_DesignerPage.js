import React from "react";
import DesignerThought from "../Components/DesignerThough";
import Intro from "../Components/Intro";
import Designer_Feedback from "../Components/Designer_Feedback";
import Footer from "../Components/Footer";
import Discover from "../Components/Discover";
import Testimonials from "../Components/Testimonials";
import IntroDesigner from "../Components/IntroDesigner";
import Navbarr from "../Components/Navbarr";
const DSP_DesignerPage = () => {
  return (
    <div style={{ overflowY: "hidden" }}>
      <Navbarr />
      <IntroDesigner />
      <DesignerThought />

      <Designer_Feedback />
      <Discover />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default DSP_DesignerPage;
