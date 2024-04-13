import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import i1 from '../assets/object/o1.jpg'
import i2 from '../assets/object/o2.jpg'
import i3 from '../assets/object/o3.jpg'
import i4 from '../assets/object/o4.jpg'

import user from '../assets/user.jpeg'
import user2 from '../assets/user2.jpg'
import t3 from '../assets/team7.png'

import OrganizedCard from '../cards/OrganizedCard'
import CommentsCard from '../cards/CommentsCard'
import RenderingDesigner from './RenderingDesigner'
import RenderingDesignerCard from '../cards/RenderingDesignerCard'
import DesignerCard from '../cards/DesignerCard'
const Organized = () => {
  return (
    <Container  data-aos="fade-up">
    {/* <h1 className="heading">STREAMLINE YOUR  <span>  */}
    {/* DESIGN PROCESS </span></h1> */}
{/* <OrganizedCard    dir="" head1="Lorem ipsum" head2="Lorem ipsum lorem ipsum" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem est veritatis,lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem est veritatis,Lorem ipsum dolor, sit amet !" i1={i1}/> */}
 
{/* <OrganizedCard dir="row-reverse" head1="VISUALIZER" head2="RENDER INTERIOR DESIGN PROJECTS IN MINUTES" text="Easily create stunning visualizations that open up new opportunities to grow your business. The fast, easy and intuitive software makes it easy to show off your designs in 3D" i1={i2}/> */}
{/* <RenderingDesignerCard bcolor="var(--lighttgrey)"/> */}
   
{/* <OrganizedCard dir="row-reverse" dis="none" head1="Lorem ipsum " head2="Lorem ipsum dolor sit." text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem est veritatis,lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem est veritatis,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem est veritatis! " i1={i3}/> */}

 <CommentsCard user={user}/>
{/* <OrganizedCard dir=""  head1="Lorem ipsum" head2="Lorem ipsumLorem ipsum" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem est veritatis,lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem est veritatis,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem est veritatis!" i1={i4}/> */}
 

 
{/* <OrganizedCard dir="" head1="TASK MANGEMENT" head2="ORGANIZE EVERY STEP OF YOUR " text="Grow your business on the go with DPS Studio’s mobile app. Available on Android and iOS devices, you’ll have access to all of your projects in the palm of your hand" i1={i5}/> */}
 
 {/* <OrganizedCard dir="row-reverse" head1="INTERIOR DESIGN PACKAGES " head2="GENERATE NEW CLIENT LEADS WITH EMBEDDEABLE DESIGN PACKAGES" text="Easily embed design packages into your website to generate new client interest, automate your discovery calls, and streamline your client intake process.DPS  helps you facilitate new business passively" i1={i6}></OrganizedCard> */}
  
 {/* <RenderingDesignerCard rr="row-reverse" bcolor="var(--white)"/> */}
     
 {/* <CommentsCard user={user2}/> */}
 {/* <DesignerCard bcolor="#ececec" rr="row" image={t3}></DesignerCard> */}
  {/* <OrganizedCard dir="" head1="PRODUCT SOURCING AND CURATION" head2="CURATE ,CATALOG, AND STOR YOUR FAVOURITE PRODUCTS" text="Eliminate the stress of product curation with DPS Studio’s smart tools that support you in looking for the perfect pieces for your clients’ spaces." i1={i1}></OrganizedCard>
   
   <OrganizedCard dir="row-reverse" head1="DESIGN BOARDS" head2="BUILD AND SHARE BEAUTIFUL MOOD BOARDS WITH YOUR CLIENTS"  text="Easily create multiple inspiring mood boards to share with your clients or use privately on your projects. Conveniently use products from your product catalogue in your mood boards." i1={i2}></OrganizedCard>
   
   <OrganizedCard dir="" head1="PURCHASE ORDER & INVOICING " head2="AUTOMATE YOUR ACCOUNTING AND GET PAID FASTER" text="Eliminate manual accounting by generating invoices and purchase orders with DPS Studio.  You’ll also get paid faster with our payment processor integration." i1={i3}></OrganizedCard>
  
 <CommentsCard user={user}/> */}
    </Container>
  )
}

export default Organized
