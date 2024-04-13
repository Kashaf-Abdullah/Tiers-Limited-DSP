import React from "react";
import PricingCard from "../cards/PricingCard";
const Pricing2 = () => {
  return (
    <div className="container-fluid dsp-pricing-sec">
      <h1 style={{ color: "var(--offwhite)" }}>SAVE 15% WHEN YOU PAY YEARLY</h1>
      <p
        style={{ textAlign: "center", fontSize: "22px", color: "var(--white)" }}
      >
        Déployez, gérez et hébergez votre serveur Grand Theft Auto 5 AltV plus
        rapidement chez Lordhosting.
      </p>
      <div className="container dsp-pricing-con">
        <PricingCard head="STARTER " price="$499 USD/monthly" pos="20px" />
        <PricingCard head="PROFESSIONAL" price="$699 USD/monthly" />
        <PricingCard head="ENTERPRISE" price="$999 USD/monthly" pos="20px" />
      </div>
    </div>
  );
};
export default Pricing2;
