import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function EventForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    role: "",
    recommend: "",
    service: "",
    improvements: [],
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    let updatedImprovements = [...formData.improvements];

    if (checked) {
      updatedImprovements.push(value);
    } else {
      updatedImprovements = updatedImprovements.filter(
        (item) => item !== value
      );
    }

    setFormData({
      ...formData,
      [name]: updatedImprovements,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your form submission logic
  };

  return (
    <Container>
      <h1 className="heading">
        OUR <span> EVENTS</span>
      </h1>

      <main>
        <Form
          id="events-form"
          onSubmit={handleSubmit}
          style={{
            margin: "48px auto 36px auto",
            backgroundColor: "var(--offwhite)",
            padding: "48px 36px",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              color: "var(--darkblue)",
              textAlign: "center",
            }}
          >
            Want to be the first to find out about upcoming events? Sign up
            below 👇
          </p>
          <Form.Group controlId="name">
            <Form.Label
              style={{
                fontSize: "17px",
                color: "var(--lightbrown)",
                fontWeight: "700",
              }}
            >
              {" "}
              First Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="age">
            <Form.Label
              style={{
                fontSize: "17px",
                color: "var(--lightbrown)",
                fontWeight: "700",
              }}
            >
              Last Name{" "}
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your Last Name"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="13"
              max="120"
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label
              style={{
                fontSize: "17px",
                color: "var(--lightbrown)",
                fontWeight: "700",
              }}
            >
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Other Form Fields */}

          <button
            className="buttonn"
            style={{
              backgroundColor: "var(--darkblue)",
              color: "var(--white)",
              fontSize: "15px",
              fontWeight: "800",
              margin: "1rem 0",
              border: "3px solid var(--darkblue)",
            }}
          >
            Submit{" "}
          </button>
        </Form>
      </main>
    </Container>
  );
}

export default EventForm;
