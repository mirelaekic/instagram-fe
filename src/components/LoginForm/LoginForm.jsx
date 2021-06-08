import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "../RegisterForm/RegisterForm.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";
const INST_API = process.env.REACT_APP_INST_API
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  loginUser: (credentls) =>
    dispatch({
      type: "LOGIN_USER",
      payload: credentls,
    }),
  loginUserWithThunk: (credentls) =>
    dispatch(async (dispatch, getState) => {
      try {
        const response = await fetch(
          INST_API+"/insta/users/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(credentls),
          }
        );
        if (response.ok) {
          const resp = await response.json();
          dispatch({
            type: "LOGIN_USER",
            payload: resp,
          });
          console.log(response, "login response");
        }
      } catch (error) {
        console.log(error);
      }
    }),
});

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.loginUserWithThunk({ username, password });
    props.history.push("/");
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
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
