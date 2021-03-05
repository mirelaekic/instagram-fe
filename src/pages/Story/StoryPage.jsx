import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import instagramLogo from "../../logo/bestlogo.png";
import StoryPlayer from "../../components/Stories/StoryPlayer";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  storyBackground: {
    backgroundColor: "#1a1a1a",
    width: "100vw",
    height: "100vh",
  },
  storyPlayer: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    fontSize: "2rem",
    color: "#fafafa",
    cursor: "pointer",
  },
});

export default function StoryPage(props) {
  let history = useHistory();
  console.log(history);
  const classes = useStyles();
  return (
    <div className={classes.storyBackground}>
      <Container fluid>
        <Row>
          <Col className="py-3 ">
            <Link to="/">
              {" "}
              <img className="instLogo" src={instagramLogo} alt="logo" />
            </Link>
          </Col>
          <Col style={{ marginTop: "7rem" }}>
            <StoryPlayer className={classes.storyPlayer} />
          </Col>
          <Col className="py-3 d-flex justify-content-end">
            <span
              onClick={() => {
                history.goBack();
              }}
            >
              <CloseIcon className={classes.closeIcon} />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
