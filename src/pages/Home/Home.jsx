import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import PostCard from "../../components/Card/PostCard";
import Carousel from "../../components/Stories/Carousel";
import "./Home.css";
import HomeSuggestions from "../../components/HomeSuggestions/HomeSuggestions";
import { useDispatch,useSelector } from "react-redux";
import { getPost } from "../../redux/actions/postsAction";
import Loader from "../../components/Loader/Loader"
function Home() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.post.loading)
  const posts = useSelector(state => state.post.posts)
  console.log(posts,"is this loading")

  useEffect(() => {
      dispatch(getPost())
  },[])

  return loading ? <Loader /> : (
    <>
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
    </>
  );
}

export default withRouter(Home);
