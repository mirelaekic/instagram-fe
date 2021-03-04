import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import ProfilePic from "../../components/Profile/ProfilePic";
import ProfileDescription from "../../components/Profile/ProfileDescription";
import NoPosts from "../../components/Profile/NoPosts";
import NoIGTV from "../../components/Profile/NoIGTV";
import { makeStyles } from "@material-ui/core/styles";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import TvIcon from "@material-ui/icons/Tv";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

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

export default function Profile() {
  const classes = useStyles();

  const [target, setTarget] = useState("MENU");
  const [posts, setPosts] = useState("1px solid black");
  const [igtv, setIgtv] = useState(null);
  const [saved, setSaved] = useState(null);
  const [tagged, setTagged] = useState(null);

  const handlePosts = () => {
    setTarget("MENU");
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
    setTarget("IGTV");
    setPosts(null);
    setIgtv(null);
    setSaved(null);
    setTagged("1.3px solid black");
  };

  return (
    <Container maxWidth="md" className="mt-5">
      <Row className="mb-5">
        <Col className="px-5 col-4 ">
          <ProfilePic />
        </Col>
        <Col className="col-8">
          <ProfileDescription />
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
        <Col>
          <NoPosts />
        </Col>
      </Row>
    </Container>
  );
}
