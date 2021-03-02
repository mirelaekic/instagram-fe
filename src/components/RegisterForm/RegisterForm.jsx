import React from "react";
import { Form, Button } from "react-bootstrap";
import "./RegisterForm.css";

export default function RegisterForm() {
  return (
    <Form>
      <div className="reg-form">
        <input type="text" placeholder="Mobile Number or Email" />
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
      <button className="reg-button">Next</button>
      <p className="text-muted terms">
        By signing up, you agree to our <strong>Terms</strong> . Learn how we collect, use and
        share your data in our <strong>Data Policy</strong> and how we use cookies and similar
        technology in our <strong>Cookies Policy</strong>  .
      </p>
    </Form>
  );
}
