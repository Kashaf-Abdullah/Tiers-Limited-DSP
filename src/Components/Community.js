// import React, { useEffect } from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import community from '../assets/community.jpg'
// import Aos from 'aos'
// import 'aos/dist/aos.css'
// const Community = () => {
//   useEffect(()=>{
//     Aos.init({ duration:2000})
//  },[])
//   return (

//    <Container  >
//     <Row style={{margin:"4rem 0"}}  data-aos="fade-up">
//         <Col lg={6} md={6} sm={12}>
// <img src={community} alt="" style={{width:"90%",height:"100%",borderRadius:"30px",padding:"10px"}} />
//         </Col>

//         <Col lg={6} md={6} sm={12}>
//         <h4 style={{fontSize:"3.2rem",fontWeight:"700",color:"var(--darkblue)"}}>OUR COMMUNITY</h4>
//   <p  style={{fontSize:"18px",color:"var(--grey)",margin:"2rem 0"}}>At DPS we’re much more than software. DPS Designers is a design community that provides meaningful connections, discussions and tailored content to support you along all stages of your design journey! The DPS Designers Community is about helping one another grow their businesses through collaboration, educational events and webinars. We invite you to become a member of The DPS Designers Community. It’s a safe place to ask questions and meet like-minded designers and get connected to a global community.</p>
//   <button className='buttonn' style={{backgroundColor:"var(--lightbrown)",color:"var(--white)",fontSize:"15px",fontWeight:"800",border:"3px solid var(--lightbrown)"}}>Join the Community</button>

//         </Col>
//     </Row>
//    </Container>
//   )
// }

// export default Community

import React from "react";

const Community = () => {
  return (
    <div>
      <section className="connect container-fluid">
        <div className="connect-sec container">
          <div className="connect-con">
            <h2 className="heading">
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Lorem ipsum dolor sit.!
            </h2>
            <p
              style={{
                fontSize: "22px",
                color: "var(--lightbrown)",
                textAlign: "center",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galle y of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
