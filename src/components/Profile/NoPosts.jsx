import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import google from "./img/google-play-badge.png";
import apple from "./img/apple.PNG";
import noPost from "./img/noPost.png"
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  root: {
    borderRadius: "0.8rem",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  GoogleButton: {
    width: "168px",
    height: "auto",
  },
  AppleButton: {
    width: "130px",
    height: "auto",
  },
  header: { 
    fontSize: "3rem",
    marginTop:"0rem",
    color:"#272727",
 },
 noPost:{
   width:"80px",
  
 },
 noPostRow:{
   marginTop:"4rem",
   justifyContent:"center"
 },
 otherUser:{
  marginBottom:"3rem"
 }
});

export default function NoPosts({ params }) {
  const user = useSelector(state => state.user.currentUser)
  const classes = useStyles();
  return params === user.id ? (
    <Container className="mt-3 rounded">
      <Row>
        <Col className="col-5">
          <img
            src="https://www.freepngimg.com/thumb/logo/69768-logo-computer-layout-instagram-icons-png-file-hd.png"
            alt="thumb"
            className={classes.image}
          />
        </Col>
        <Col className=" d-flex flex-column justify-content-center align-items-center">
          <p>
            <p>Start capturing and sharing your moments.</p>
          </p>
          <p>Get the app to share your first photo or video.</p>
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <Button
                className={classes.GoogleButton}
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              >
                <img
                  src={google}
                  alt="google button"
                  className={classes.GoogleButton}
                />
              </Button>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <Button
                target="_blank"
                href="https://apps.apple.com/de/app/instagram/id389801252"
              >
                <img
                  src={apple}
                  alt="apple button"
                  className={classes.AppleButton}
                />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  ) : (
    <div className={classes.otherUser}>
    <Row className={classes.noPostRow}>
      <img className={classes.noPost} src={noPost} alt="no post user" /> 
    </Row>
    <Row className="justify-content-center align-items-center">
      <span className={classes.header}>No Posts Yet</span>
    </Row>
    </div>
  );
}
