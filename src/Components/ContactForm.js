import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FaPhone } from "react-icons/fa";
import { Button, Container } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function ContactForm() {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: "800px",
          height: "400px",
          margin: "3rem 0 7rem 0",
          backgroundColor: "var(--darkblue)",
          borderRadius: "20px",
        }}
      >
        <MDBRow className="pt-3 mx-1">
          <MDBCol md="3">
            <div
              className="text-center"
              style={{ marginTop: "50px", marginLeft: "10px" }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "50%",
                  padding: "9px 9px",
                  display: "inline-block",
                }}
              >
                <FaPhone
                  style={{
                    color: "var(--darkblue)",
                    fontSize: "1.7rem",
                    position: "relative",
                    bottom: "2px",
                  }}
                />
              </div>
              <MDBTypography
                tag="h3"
                className="text-white"
                style={{
                  fontSize: "32px",
                  color: "var(--offwhite)",
                  fontWeight: "bold",
                }}
              >
                Contact Information
              </MDBTypography>
              <p className="white-text">
                We’d love to help you start exceeding your business goals!
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="logo-social-media"
                style={{ margin: "auto", position: "relative" }}
              >
                <FaFacebook
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "9px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
                <FaInstagram
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "9px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
                <FaYoutube
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "9px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
                <br />
                <FaPinterest
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "9px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
                <FaTwitter
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "9px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
                <FaLinkedin
                  style={{
                    background: "var(--darkblue)",
                    color: "var(--white)",
                    margin: "9px",
                    fontSize: "33px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    padding: "6px",
                  }}
                />
              </div>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard
              className="card-custom pb-4"
              style={{
                backgroundColor: "var(--offwhite)",
                marginBottom: "3rem",
              }}
            >
              <MDBCardBody className="mt-0 mx-1">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography
                    style={{ color: "var(--darkblue)", fontWeight: "bold" }}
                  >
                    CONTACT INFO
                  </MDBTypography>
                </div>

                <form className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label="First name" type="text" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label="Last name" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label="City" type="text" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label="Zip" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label="Address" type="text" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label="Email" type="text" />
                    </MDBCol>
                  </MDBRow>

                  <div className="float-end">
                    <button
                      className="buttonn"
                      style={{
                        backgroundColor: "var(--white)",
                        fontSize: "15px",
                        fontWeight: "800",
                        color: "var(--lightbrown)",
                        border: "2px solid var(--white)",
                      }}
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}
