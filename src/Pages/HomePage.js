import React from "react";
import Navbarr from "../Components/Navbarr";
import Intro from "../Components/Intro";
import Brands from "../Components/Brands";
import Visualizer from "../Components/Visualizer";
import Discover from "../Components/Discover";
import Organized from "../Components/Organized";
import Integrations from "../Components/Integrations";
import Blogs from "../Components/Blogs";
import Community from "../Components/Community";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import ContactForm from "../Components/ContactForm";
import AboutPromise from "../Components/AboutPromise";
import Designer_Feedback from "../Components/Designer_Feedback";
import RenderingDesignerCard from "../cards/RenderingDesignerCard";
import Characteristic from "../Components/Characteristic";
import Resources from "../Components/Resources";
import RecordingEvent from "../Components/RecordingEvent";

const HomePage = () => {
  return (
    <div>
      <Navbarr />
      <Intro></Intro>

      <Brands />
      <Visualizer />
      <Integrations></Integrations>
      <Discover />

      <Designer_Feedback />
      <Resources />

      <Organized />
      {/* <Characteristic/> */}
      {/* <Community/> */}
      <Discover />
      {/* <Blogs/> */}
      {/* <RecordingEvent/> */}
      <Footer />
    </div>
  );
};

export default HomePage;
