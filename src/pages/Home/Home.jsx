import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Card from "../../components/Card/Card"
import "./Home.css"

export default function Home() {
    return (
        <Container className="home-container">
        <Grid container spacing={2}>
            <Grid item xs={8} lg={8}>
            <div className="homeCard">
            <Card /> 
            </div>
            <div className="homeCard">
            <Card /> 
            </div>
            </Grid>
            <Grid className="homeSug-grid" item xs={4} style={{position:"-webkit-sticky !important"}}>
                <div className="home-suggestions">
                <h1>PROFILE</h1>
                <h1>SUGGESTIONS</h1>
                </div>
            </Grid>
            </Grid>
            </Container>
    )
}
