import { Container, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import PostCard from "../../components/Card/PostCard";
import Carousel from "../../components/Stories/Carousel";
import "./Home.css";
import HomeSuggestions from "../../components/HomeSuggestions/HomeSuggestions";
import backend from "../../client";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const authorize = async () => {
    try {
      const result = await backend.get("/insta/posts");
      console.log(result);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    authorize();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <Container className="home-container">
          <Grid container spacing={2}>
            <Grid item xs={8}>
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
