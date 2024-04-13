import React from "react";
import ContactForm from "../Components/ContactForm";

import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import Discover from "../Components/Discover";
import ContactIntro from "../Components/ContactIntro";
import Features from "../Components/Features";
import FeaturesLogo from "../Components/FeaturesLogo";
import FeatureIntro from "../Components/FeatureIntro";
import Organized from "../Components/Organized";
import OrganizedCard from "../cards/OrganizedCard";
import i1 from "../assets/object/o3.jpg";
import i2 from "../assets/object/o4.jpg";
import i3 from "../assets/object/o1.jpg";
import i4 from "../assets/i4.png";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";
import { Container } from "react-bootstrap";
import CommentsCard from "../cards/CommentsCard";
import Navbarr from "../Components/Navbarr";
const FeaturesPage = () => {
  return (
    <div style={{ overflowY: "hidden" }}>
      <Navbarr />
      <FeatureIntro />
      <FeaturesLogo />
      <Features />
      <Container>
        <OrganizedCard
          dir=""
          head1="PROJECT MANAGEMENT"
          head2="SPEND LESS TIME MANAGING AND MORE TIME DESIGNING"
          text="Get a full suite of time saving tools and perfect your process with DPS. With the ability to fully customize your experience,DPS  is the only platform you need."
          i1={i1}
        />

        <OrganizedCard
          dir="row-reverse"
          head1="VISUALIZER"
          head2="RENDER INTERIOR DESIGN PROJECTS IN MINUTES"
          text="Easily create stunning visualizations that open up new opportunities to grow your business. The fast, easy and intuitive software makes it easy to show off your designs in 3D"
          i1={i2}
        />

        <OrganizedCard
          dir=""
          head1="CLIENT PORTAL"
          head2="EVERYTHING YOU NEED FOR CLIENT MANAGEMENT IN ONE PLACE"
          text="Reduce administrative work and update your digital experience by giving your clients access to all of their project data in one central place."
          i1={i3}
        />

        <CommentsCard />
      </Container>
      <Discover />

      <Footer />
    </div>
  );
};

export default FeaturesPage;
