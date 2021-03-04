import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    borderRadius: "0.8rem",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: "140px",
    height: "auto",
  },
});

export default function NoPosts() {
  const classes = useStyles();
  return (
    <Container className="mt-3 rounded">
      <Row>
        <Col className="col-5">
          <img
            src="https://res.cloudinary.com/dsqdewodh/image/upload/v1614822545/Thumbnail%20Instagram%20clone/6efc710a1d5a_npvojz.jpg"
            alt="thumb"
            className={classes.image}
          />
        </Col>
        <Col className=" d-flex flex-column justify-content-center align-items-center">
          <p>
            <b>Start capturing and sharing your moments.</b>
          </p>
          <p>Get the app to share your first photo or video.</p>
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <Button>
                <img
                  src="https://res.cloudinary.com/dsqdewodh/image/upload/v1614825287/Thumbnail%20Instagram%20clone/google-play-badge_ef5kxy.png"
                  alt="google button"
                  className={classes.button}
                />
              </Button>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <Button>
                <img
                  src="https://res.cloudinary.com/dsqdewodh/image/upload/v1614825257/Thumbnail%20Instagram%20clone/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917_ctynyo.svg"
                  alt="apple button"
                  className={classes.button}
                />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
