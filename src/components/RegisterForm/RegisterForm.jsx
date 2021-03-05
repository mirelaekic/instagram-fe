import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./RegisterForm.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  registerUser: (credentials) =>
    dispatch({
      type: "REGISTER_USER",
      payload: credentials,
    }),
  registerUserWithThunk: (credentials) =>
    dispatch(async (dispatch, getState) => {
      try {
        const response = await fetch(
          "http://localhost:9001/insta/users/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          }
        );
        if (response.ok) {
          dispatch({
            type: "REGISTER_USER",
            payload: credentials,
          });
          console.log(response, "register response");
          localStorage.setItem("user", credentials);
        }
      } catch (error) {
        console.log(error);
      }
    }),
});

const RegisterForm = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState(12312314);
  const [imgurl, SetImgurl] = useState("whateevw");
  const [gender, setGender] = useState("whateevw");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerUserWithThunk({
      email,
      name,
      username,
      phonenumber,
      imgurl,
      gender,
      password,
    });
    props.history.push("/login");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="reg-form">
        <input
          type="text"
          required
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Mobile Number or Email"
        />
        <input
          type="text"
          required
          placeholder="Full Name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="reg-button">
        Next
      </button>
      <p className="text-muted terms">
        By signing up, you agree to our <strong>Terms</strong> . Learn how we
        collect, use and share your data in our <strong>Data Policy</strong> and
        how we use cookies and similar technology in our{" "}
        <strong>Cookies Policy</strong> .
      </p>
    </Form>
  );
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
);
