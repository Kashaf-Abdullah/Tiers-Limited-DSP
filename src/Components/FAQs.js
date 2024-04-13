import React, { useState } from "react";

import FAQ from "./FaqsComp";

export default function FAQs() {
  const [faqs, setFaqs] = useState([
    {
      question: "What services do you offer?",
      answer:
        "I offer web design, development, e-commerce solutions, and maintenance services..",
      open: true,
    },
    {
      question: " How do you handle project timelines?",
      answer:
        "Timelines are tailored to project scope and discussed during consultations.",
      open: false,
    },
    {
      question: " How do you handle client feedback during the project?",
      answer:
        "I welcome client feedback at every stage of the project and incorporate it iteratively to ensure the final product meets their vision and expectations",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <section className="App" id="faqs">
      <h1
        className="port-head"
        style={{
          textAlign: "center",
          fontSize: "1.9rem",
          fontWeight: "800",
          color: "rgb(0,0,0)",
          margin: "2rem 0",
        }}
      >
        FAQs
      </h1>

      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </section>
  );
}
