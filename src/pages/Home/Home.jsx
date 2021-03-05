import { Container, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import PostCard from "../../components/Card/PostCard";
import Carousel from "../../components/Stories/Carousel";
import "./Home.css";
import HomeSuggestions from "../../components/HomeSuggestions/HomeSuggestions";

function Home() {
  const user = localStorage.getItem("user");

  return (
    <>
      <Container className="home-container">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Carousel />
            <div className="homeCard mb-5">
              <PostCard />
            </div>
          </Grid>

          <Grid
            className="homeSug-grid"
            item
            xs={4}
            style={{ position: "-webkit-sticky !important" }}
          >
            <div className="home-suggestions">
              <HomeSuggestions />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default withRouter(Home);
