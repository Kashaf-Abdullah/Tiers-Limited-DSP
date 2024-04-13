import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import IntroSect from '../cards/IntroSect';
import intro from '../assets/bc6.PNG';

const ContactIntro = () => {
  return (
    <div className='intro'style={{ backgroundImage: `url(${intro})`, textAlign:"center",backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px', padding: '20px',margin:"5rem 0" }} >
    <Container >
      <Row>
       <IntroSect head1="CONTACT" head2="US"/>
      </Row>
    </Container>
    
  </div>
  
  )
}

export default ContactIntro
