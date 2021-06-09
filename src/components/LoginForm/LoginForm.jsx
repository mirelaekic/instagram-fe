import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "../RegisterForm/RegisterForm.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";
import { getMe, login } from "../../redux/actions/usersActions";
const INST_API = process.env.REACT_APP_INST_API

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({username,password}))

  };
  const user = useSelector((state) => state.loggedInUser);
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <div className="reg-form mt-4">
            <input
              required
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
            <input
              type="password"
              required
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="reg-button">
            Log In
          </button>
        </Form>
      </>
    );
  } 
export default withRouter(
 LoginForm
);
