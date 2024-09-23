// import React from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";

// const FreeTrial = () => {
//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Free Trial Registration</h2>
//       <Form className="free-trial-form">
//         {/* Name Input */}
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="firstName" className="mb-3">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your first name"
//                 required
//               />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="lastName" className="mb-3">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your last name"
//                 required
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Email Input */}
//         <Form.Group controlId="email" className="mb-3">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control type="email" placeholder="Enter your email" required />
//         </Form.Group>

//         {/* Phone Number Input */}
//         <Form.Group controlId="phone" className="mb-3">
//           <Form.Label>Phone Number</Form.Label>
//           <Form.Control
//             type="tel"
//             placeholder="Enter your phone number"
//             required
//           />
//         </Form.Group>

//         {/* Submit Button */}
//         <Button variant="dark" type="submit" className="w-100">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default FreeTrial;

import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredClass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Register for a Free Trial</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPreferredClass">
          <Form.Label>Preferred Class</Form.Label>
          <Form.Control
            as="select"
            name="preferredClass"
            value={formData.preferredClass}
            onChange={handleChange}
            required
          >
            <option value="">Select a class</option>
            <option value="Spin Class">Spin Class</option>
            <option value="Yoga">Yoga</option>
            <option value="HIIT">HIIT</option>
            <option value="Pilates">Pilates</option>
            <option value="Boxing">Boxing</option>
            <option value="CrossFit">CrossFit</option>
          </Form.Control>
        </Form.Group>

        <Button variant="dark" type="submit" className="my-4 w-100">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
