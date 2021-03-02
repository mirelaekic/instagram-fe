import React from "react";
import { Form } from "react-bootstrap";
import "../RegisterForm/RegisterForm.css";

export default function LoginForm() {
  return (
    <Form>
      <div className="reg-form mt-4">
        <input type="text" placeholder="Username or Email" />
        <input type="password" placeholder="Password" />
      </div>
      <button className="reg-button">Log In</button>
    </Form>
  );
}