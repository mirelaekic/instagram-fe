import { Container, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import PostCard from "../../components/Card/PostCard";
import Carousel from "../../components/Stories/Carousel";
import "./Home.css";
import HomeSuggestions from "../../components/HomeSuggestions/HomeSuggestions";
import { useSelector } from "react-redux";

function Home(props) {
  const loggedUser = useSelector((state) => state.loggedInUser);
  console.log(loggedUser, "ME");
  const user = localStorage.getItem("user");

  return (
    <>
      {loggedUser.user === undefined ? (
        <Redirect to="/login" />
      ) : (
        <Container className="home-container">
          <Grid container spacing={2}>
            <Grid item xs={8} className="storyCarousel">
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
      )}
    </>
  );
}

export default withRouter(Home);
