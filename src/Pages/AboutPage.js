import React from "react";
import AboutPromise from "../Components/AboutPromise";
import Intro from "../Components/Intro";
import Characteristic from "../Components/Characteristic";
import Footer from "../Components/Footer";
import Discover from "../Components/Discover";
import IntroAbout from "../Components/IntroAbout";
import OrganizedCard from "../cards/OrganizedCard";
import i1 from "../assets/i1.png";
import { Container } from "react-bootstrap";
import CommentsCard from "../cards/CommentsCard";
import Navbarr from "../Components/Navbarr";
const AboutPage = () => {
  return (
    <div>
      <Navbarr />
      <IntroAbout />
      <AboutPromise />
        <Container>
        <OrganizedCard
          dir=""
          head1="Our  Story"
          head2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
          i1={i1}
        />
        <CommentsCard />
      </Container>
      <Discover />
      <Footer />
    </div>
  );
};

export default AboutPage;
