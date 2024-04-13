import React from "react";
import Chars_Card from "../cards/Chars_Card";

const Characteristic = () => {
  return (
    <>
      <h3 className="heading">
        DSP <span>Community</span>
      </h3>
      <div className="dsp-chars-sec container-fluid">
        <div className="dsp-chars-con container">
          <Chars_Card
            head="lorem Ipsum has been the industry"
            text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
          />
          <Chars_Card
            head="lorem Ipsum has been the industry"
            text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
          />
          <Chars_Card
            head="lorem Ipsum has been the industry"
            text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme."
          />
        </div>
      </div>
    </>
  );
};

export default Characteristic;
