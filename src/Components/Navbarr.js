import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logodsp.png";
function Navbarr() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    console.log("Before:", expanded);
    setExpanded(false);
    console.log("After:", expanded);
  };

  return (
    <Navbar
      expand="lg"
      className=""
      expanded={expanded}
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        backgroundColor: "var(--lightgrey)",
        padding: "0.1rem 0",
        height: "7rem",
        
      }}
    >
      <Container style={{ backgroundColor: "var(--lightgrey)" }}>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img
            src={logo}
            alt=""
            style={{
              borderRadius: " 0rem 0rem 1rem 1rem",
              width: "6.3rem",
              height: "6.3rem",
              margin: "0 2rem",
              position: "relative",
              bottom: "3px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-items" navbarScroll>
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/features" onClick={handleNavLinkClick}>
                  Project Management
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={Link}
                  to="/features/visualizer"
                  onClick={handleNavLinkClick}
                >
                  Viusalizer
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/features" onClick={handleNavLinkClick}>
                  Client Portal
                </Nav.Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Nav.Link as={Link} to="/features" onClick={handleNavLinkClick}>
                  Mobile App
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/features" onClick={handleNavLinkClick}>
                  Task Management
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/pricing" onClick={handleNavLinkClick}>
              Pricing
            </Nav.Link>{" "}
            {/* New Route */}
            <NavDropdown title="Why DSP" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link
                  as={Link}
                  to="/online-shops"
                  onClick={handleNavLinkClick}
                >
                  How DSP works
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={Link}
                  to="/dsp-designer"
                  onClick={handleNavLinkClick}
                >
                  What Designers are saying
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Learn" id="basic-nav-dropdown">
              <NavDropdown.Item >
              <Nav.Link as={Link} to="/about"  onClick={handleNavLinkClick}>Our Story</Nav.Link> 
    
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Nav.Link as={Link} to="/learn-resource"  onClick={handleNavLinkClick}>Our resources for interior designs</Nav.Link> 
    
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Nav.Link as={Link} to="/learn-events"  onClick={handleNavLinkClick}>Events</Nav.Link> 
    
              </NavDropdown.Item>
              
            </NavDropdown> */}
            <Nav.Link as={Link} to="/contact-us" onClick={handleNavLinkClick}>
              Contact
            </Nav.Link>{" "}
            {/* New Route */}
            <Nav.Link as={Link} to="/about-us" onClick={handleNavLinkClick}>
              About Us
            </Nav.Link>{" "}
            {/* New Route */}
          </Nav>

          <Form
            className="d-flex nav-btns"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <button
              className="buttonn"
              style={{
                backgroundColor: "var(--greenish_gray)",
                color: "var(--white)",
                fontSize: "15px",
                fontWeight: "800",
                border: "3px solid var(--darkblue)",
              }}
            >
              Login
            </button>
            <button
              className="buttonn"
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                fontWeight: "800",
                color: "var(--lightbrown)",
                border: "2px solid var(--greenish_gray)",
              }}
            >
              Start free trial
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
