import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

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

export default function NoTagged() {
  const classes = useStyles();
  return (
    <Container className="mt-3 rounded p-5">
      <Row>
        <Col>
          <Row className="justify-content-center align-items-center">
            <span className={classes.iconBorder}>
              <PermIdentityIcon className={classes.icon} />
            </span>
          </Row>
          <Row className="justify-content-center align-items-center">
            <span className={classes.header}>Photos of you</span>
          </Row>
          <Row className="justify-content-center align-items-center">
            <span className={classes.caption}>
              When people tag you in photos, they'll appear here.
            </span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
