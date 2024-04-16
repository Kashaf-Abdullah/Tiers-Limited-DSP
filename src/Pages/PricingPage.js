import React from "react";
import Navbarr from "../Components/Navbarr";
import Pricing from "../Components/Pricing";
import PricingIntro from "../Components/PricingIntro";
import PricingPro from "../Components/PricingPro";
import FAQs from "../Components/FAQs";
import Discover from "../Components/Discover";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

const PricingPage = () => {
  return (
    <div>
      <Navbarr />
      {/* <ContactForm/> */}
      <PricingIntro />
      {/* <PricingPro /> */}
      <Testimonials />
      <Discover />
      <FAQs />
      <Footer />
    </div>
  );
};

export default PricingPage;
