import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles({
  root: {
    borderRadius: "0.8rem",
  },
  icon: {
    fontSize: "3.2rem",
  },
  iconBorder: {
    border: "2px solid black",
    borderRadius: "10000px",
    padding: "7px",
  },
  header: { fontSize: "3rem" },
  captions: {},
});

export default function NoSaved() {
  const classes = useStyles();
  return (
    <Container className="mt-3 rounded p-5">
      <Row>
        <Col>
          <Row className="justify-content-center align-items-center">
            <span className={classes.iconBorder}>
              <BookmarkBorderIcon className={classes.icon} />
            </span>
          </Row>
          <Row className="justify-content-center align-items-center">
            <span className={classes.header}>Save</span>
          </Row>
          <Row className="justify-content-center align-items-center">
            <span className={classes.caption}>
              Save photos and videos that you want to see again. No{" "}
            </span>
            <span className={classes.caption}>
              one is notified, and only you can see what you've saved.
            </span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
