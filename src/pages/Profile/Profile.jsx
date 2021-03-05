import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import ProfilePic from "../../components/Profile/ProfilePic";
import ProfileDescription from "../../components/Profile/ProfileDescription";
import NoPosts from "../../components/Profile/NoPosts";
import NoIGTV from "../../components/Profile/NoIGTV";
import NoSaved from "../../components/Profile/NoSaved";
import NoTagged from "../../components/Profile/NoTagged";
import ProfileFooter from "../../components/Profile/ProfileFooter";
import { makeStyles } from "@material-ui/core/styles";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import TvIcon from "@material-ui/icons/Tv";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import "./Profile.css";
import { connect } from "react-redux";
import backend from "../../client";
import PostsGrid from "../../components/Profile/PostsGrid";
const useStyles = makeStyles({
  Menu: {
    color: "1px solid #e3e3e3",
    paddingTop: "1rem",
    display: "flex",
    alignItems: "center",
    fontSize: "0.7rem",
    cursor: "pointer",
  },
});

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  loginUser: (credentls) =>
    dispatch({
      type: "LOGIN_USER",
      payload: credentls,
    }),
});

function Profile(props) {
  const classes = useStyles();

  const [target, setTarget] = useState("POSTS");
  const [posts, setPosts] = useState("1px solid black");
  const [igtv, setIgtv] = useState(null);
  const [saved, setSaved] = useState(null);
  const [tagged, setTagged] = useState(null);
  const [loading, setLoading] = useState(true);
  const handlePosts = () => {
    setTarget("POSTS");
    setPosts("1.3px solid black");
    setIgtv(null);
    setSaved(null);
    setTagged(null);
  };
  const handleIGTV = () => {
    setTarget("IGTV");
    setPosts(null);
    setIgtv("1.3px solid black");
    setSaved(null);
    setTagged(null);
  };
  const handleSaved = () => {
    setTarget("SAVED");
    setPosts(null);
    setIgtv(null);
    setSaved("1.3px solid black");
    setTagged(null);
  };
  const handleTagged = () => {
    setTarget("TAGGED");
    setPosts(null);
    setIgtv(null);
    setSaved(null);
    setTagged("1.3px solid black");
  };
  const authorize = async () => {
    try {
      const result = await backend.get("/insta/users/me");
      console.log("-----------------------", result);
      props.loginUser(result.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    authorize();
  }, []);
  const handleDisplay = () => {
    if (target === "POSTS") {
      if (props.loggedInUser.user.posts.length > 0) {
        return <PostsGrid posts={props.loggedInUser.user.posts} />;
      } else {
        return <NoPosts />;
      }
    }
    if (target === "IGTV") {
      return <NoIGTV />;
    }
    if (target === "SAVED") {
      if (props.loggedInUser.user.savedposts.length > 0) {
        return <PostsGrid posts={props.loggedInUser.user.savedposts} />;
      } else {
        return <NoSaved />;
      }
    }
    if (target === "TAGGED") {
      if (props.loggedInUser.user.taggeds.length > 0) {
        return <PostsGrid posts={props.loggedInUser.user.taggeds} />;
      } else {
        return <NoTagged />;
      }
    }
  };
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="mt-5 profilePage">
          <Container maxWidth="md" className="mt-5">
            <Row className="mb-5">
              <Col className="px-5 col-4 ">
                <ProfilePic url={props.loggedInUser.user.imgurl} />
              </Col>
              <Col className="col-8">
                <ProfileDescription user={props.loggedInUser.user} />
              </Col>
            </Row>

            <Row style={{ borderTop: "1px solid #e3e3e3" }}>
              <Col className="col-3"></Col>
              <Col className="col-6 d-flex justify-content-between">
                <span
                  className={classes.Menu}
                  onClick={handlePosts}
                  style={{ borderTop: posts }}
                >
                  <ViewModuleIcon className="mr-1" />
                  POSTS
                </span>
                <span
                  className={classes.Menu}
                  onClick={handleIGTV}
                  style={{ borderTop: igtv }}
                >
                  <TvIcon className="mr-1" />
                  IGTV
                </span>
                <span
                  className={classes.Menu}
                  onClick={handleSaved}
                  style={{ borderTop: saved }}
                >
                  <BookmarkBorderIcon className="mr-1" />
                  SAVED
                </span>
                <span
                  className={classes.Menu}
                  onClick={handleTagged}
                  style={{ borderTop: tagged }}
                >
                  <PermIdentityIcon className="mr-1" />
                  TAGGED
                </span>
              </Col>
              <Col className="col-3"></Col>
            </Row>
            <Row className="justify-content-center">
              <Col>{handleDisplay()}</Col>
            </Row>
            <Row>
              <Col>
                <ProfileFooter />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
