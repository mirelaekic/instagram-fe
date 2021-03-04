import React,{useState} from "react";
import { Form } from "react-bootstrap";
import "../RegisterForm/RegisterForm.css";
import { connect,useDispatch } from "react-redux";
import { Redirect, withRouter} from "react-router-dom"

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  loginUser: (credentls) => 
  dispatch({
    type:"LOGIN_USER",
    payload:credentls
  }),
  loginUserWithThunk: (credentls) => 
    dispatch(async (dispatch, getState) => {
      try { 
        const response = await fetch(
          "http://localhost:9001/insta/users/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            credentials:"include", 
            body: JSON.stringify(credentls),
          }, 
        );
        if (response.ok) {
          const resp = await response.json()
          console.log(resp)
          dispatch({
            type:"LOGIN_USER",
            payload:resp
          })
          console.log(response, "login response")
          localStorage.setItem("user", credentls.username);
        }
      } catch (error) {
        console.log(error);
      }
    })
});

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginUserWithThunk({username,password});
  };
const user = localStorage.getItem("user")
  return (
    <>
    {user ? (<Redirect to="/" /> ) : (
    <Form onSubmit={handleSubmit}>
      <div className="reg-form mt-4">
        <input required id="username" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username or username" />
        <input type="password" required id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </div>
      <button type="submit" className="reg-button">Log In</button> 
    </Form>
    )}
    </>
  );
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LoginForm));