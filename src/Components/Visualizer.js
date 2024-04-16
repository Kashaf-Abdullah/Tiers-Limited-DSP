import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Visualizer = () => {
  return (
    <Container>
      <Row style={{ margin: "4rem 0" }}>
        <Col lg={6} md={6} sm={12}>
          <video
            controls
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              padding: "10px",
              backgroundColor: "#DFF0D8",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <source src="https://mydomastudio.com/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>

        <Col lg={6} md={6} sm={12}>
          <h4
            className="visual-head"
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              margin: "22px 0",
              color: "var(--greenish_gray)",
            }}
          >
            EXPLORE THE VISUALIZATION
          </h4>
          <h4
            className="visual-head"
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "var(--lightbrown)",
            }}
          >
            {" "}
            Lorem ipsum dolor sit.
          </h4>

          <p
            style={{ fontSize: "18px", color: "var(--grey)", margin: "2rem 0" }}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            corrupti esse! Totam architecto obcaecati error quos amet nobis
            quod. Nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Recusandae quasi fuga aliquid maxime inventore, dolorem
            consequuntur, atque facilis corrupti suscipit voluptas sequi eos
            laborum. Iusto dolore quidem delectus tempore explicabo.
          </p>
          {/* <button className='buttonn' style={{backgroundColor:"var(--lightbrown)",color:"var(--white)",fontSize:"15px",fontWeight:"800",border:"3px solid var(--lightbrown)"}}>Join the Community</button>  */}
        </Col>
      </Row>
    </Container>
  );
};

export default Visualizer;
