import React from "react";
// import i1 from '../../img/ssd.m_Support.png'

const PricingCard = (props) => {
  return (
    <div
      className="pricing-card"
      style={{ position: "relative", bottom: props.pos }}
    >
      <h3 style={{ color: "var(--offwhite)" }}>{props.head}</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <h2 style={{ color: "var(--offwhite)" }}>{props.price}</h2>
      <p style={{ textAlign: "center", fontWeight: "700" }}>
        Lorem, ipsum dolor.
      </p>
      <button className="dsp-price-btn1" style={{ padding: "2px" }}>
        Economiszes 10%
      </button>

      <div className="dsp-pricing-det">
        <p>Lorem ipsum dolor sit.</p>
        <ul style={{ textAlign: "left", listStyle: "none" }}>
          <li>
            <img src={""} alt="" />
            Lorem, ipsum dolor.
          </li>
          <li>
            <img src={""} alt="" />
            Lorem, ipsum dolor.
          </li>
          <li>
            <img src={""} alt="" />
            Lorem, ipsum dolor.
          </li>
          <li>
            <img src={""} alt="" />
            Lorem, ipsum dolor.
          </li>
        </ul>
      </div>
      <div className="dsp-pricing-btn">
        <p style={{ textAlign: "center", fontWeight: "700" }}>
          Lorem ipsum dolor .
        </p>
        <button style={{ padding: "8px", width: "100%" }}>Commander</button>
      </div>
    </div>
  );
};

export default PricingCard;
