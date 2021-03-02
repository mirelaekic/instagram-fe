import React from 'react'
import RegisterCard from "../../components/RegisterCard/RegisterCard";
import {Container,Col,Row} from "react-bootstrap"
import login from "../../logo/exampleImg/login.jpg"
import "./Register.css"

export default function Register() {
    return (
        <Container>
            <Row>
            <Col  className="regImg">
            <div className="login-img">
                <img src={login} />
            </div>
            </Col>
            <Col >
            <RegisterCard /> 
            </Col>
            </Row>
        </Container>
    )
}
