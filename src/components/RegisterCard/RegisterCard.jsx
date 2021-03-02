import React from "react";
import { Col,Row,Card } from "react-bootstrap";
import "./RegisterCard.css"
import logo2 from "../../logo/logo2.jpg"
import FacebookIcon from '@material-ui/icons/Facebook';
import RegisterForm from "../RegisterForm/RegisterForm"
import {withRouter,Link} from "react-router-dom"
import google from "../../logo/google.jpg"
import appStore from "../../logo/appStore.jpg"

function RegisterCard() {
  return (
    <>
    <Card style={{ width: "21rem" }} className="register-form" >
      <Card.Body>
          <div className="reg-form-header">
              <img src={logo2} />
              <p className="sign-text">Sign up to see photos and videos from your friends.</p>
             <button className="fb-login-button"> <FacebookIcon /> Log in with Facebook</button>
            <div className="hrs"><p className="ml-3 mr-3">OR</p></div>
            <RegisterForm />
          </div>
      </Card.Body>
    </Card>
    <Card style={{ width: "21rem" }} className="login" >
      <Card.Body>
          <div>
            Have an account? <Link to="/login">Log in</Link>
          </div>
      </Card.Body>
    </Card>
    <Card style={{ width: "21rem" }} className="dowload-app" >
      <Card.Body>
          <p className="getApp">Get the app.</p>
          <Row>
            <Col xs={5}lg={6}><a><img className="down" src={google} /></a></Col>
            <Col  xs={5}lg={6}><a><img className="down" src={appStore} /></a></Col>
          </Row>
      </Card.Body>
    </Card>
    </>
  );  
}
export default withRouter(RegisterCard)
