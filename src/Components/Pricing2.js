import React from "react";
import PricingCard from "../cards/PricingCard";
const Pricing2 = () => {
  return (
    <div className="container-fluid dsp-pricing-sec">
      <h1 style={{ color: "var(--white)" }}>SAVE 15% WHEN YOU PAY YEARLY</h1>
      <p
        style={{ textAlign: "center", fontSize: "22px", color: "var(--white)" }}
      >
        Déployez, gérez et hébergez votre serveur Grand Theft Auto 5 AltV plus
        rapidement chez Lordhosting.
      </p>
      <div className="container dsp-pricing-con">
        <PricingCard head="STAGING " price="$850 USD/Annualy" pos="20px" />
        <PricingCard head="DESIGN" price="$850 USD/Annualy" />
        <PricingCard head="STAGING & DESIGN " price="$850 USD/Annualy" pos="20px" />
      </div>
    </div>
  );
};
export default Pricing2;
