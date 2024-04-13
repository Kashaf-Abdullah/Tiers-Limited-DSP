import React from "react";
import Intro from "../Components/Intro";
import EventForm from "../Components/EventForm";
import AllEvents from "../Components/AllEvents";
import Discover from "../Components/Discover";

import Integrations from "../Components/Integrations";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import Navbarr from "../Components/Navbarr";

const EventPage = () => {
  return (
    <div style={{ overflowY: "hidden" }}>
      <Navbarr />
      <Intro />
      <EventForm />
      <AllEvents />
      <Discover />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default EventPage;
