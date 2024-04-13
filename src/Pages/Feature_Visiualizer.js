import React from "react";
import FeatureIntro from "../Components/FeatureIntro";
import RenderingDesigner from "../Components/RenderingDesigner";
import Designer_Feedback from "../Components/Designer_Feedback";
import RealisticRendering from "../Components/RealisticRendering";
import Footer from "../Components/Footer";
import Discover from "../Components/Discover";
import Testimonials from "../Components/Testimonials";
import Characteristic from "../Components/Characteristic";
import Resources from "../Components/Resources";
import Navbarr from "../Components/Navbarr";

const Feature_Visiualizer = () => {
  return (
    <>
      <Navbarr />
      <FeatureIntro />
      <RealisticRendering />

      <RenderingDesigner />
      <Characteristic />

      <Resources />

      <Designer_Feedback />
      <Discover />
      <Footer />
    </>
  );
};

export default Feature_Visiualizer;
