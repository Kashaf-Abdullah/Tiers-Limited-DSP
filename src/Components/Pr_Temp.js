import React from "react";
import { Container, Row } from "react-bootstrap";

const Pr_Temp = () => {
  return (
    <Container>
      <Row>
        <h2 className="heading">PREMIUM TEMPLATE</h2>
        <h4
          style={{
            fontSize: "2.3rem",
            fontWeight: "700",
            color: "var(--lightbrown)",
            textAlign: "center",
          }}
        >
          Istallation Template Bundle
        </h4>
        <p
          style={{
            fontSize: "22px",
            color: "var(--grey)",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, in
          itaque beatae laboriosam at necessitatibus.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa
          deleniti debitis corporis veniam asperiores assumenda quos, cumque,
          vel nisi, consequuntur minus. Beatae.
        </p>
        <div
          className="dis-btn"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "1.2rem 0",
          }}
        >
          <button
            className="buttonn"
            style={{
              backgroundColor: "var(--darkblue)",
              color: "var(--white)",
              fontSize: "15px",
              fontWeight: "800",
              border: "3px solid var(--darkblue)",
            }}
          >
            Learn More
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default Pr_Temp;
