import { Container } from 'react-bootstrap'
import React from 'react'
import LoginCard from "../../components/LoginCard/LoginCard"
import "./Login.css"

export default function Login() {
    
    return (
        <Container>
        <div className="login-container">
            <LoginCard />
            </div>
        </Container>
    )
}
