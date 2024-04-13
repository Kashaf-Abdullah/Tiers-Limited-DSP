import React from "react";
import ContactForm from "../Components/ContactForm";

import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import Discover from "../Components/Discover";
import ContactIntro from "../Components/ContactIntro";
import Navbarr from "../Components/Navbarr";

const ContactPage = () => {
  return (
    <div style={{ overflowY: "hidden" }}>
      <Navbarr />
      <ContactIntro />
      <ContactForm />
      <div className="contact-sec"></div>
      <Testimonials />
      <Discover />
      <Footer />
    </div>
  );
};

export default ContactPage;
