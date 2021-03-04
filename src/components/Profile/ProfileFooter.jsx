import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";

const useStyles = makeStyles({
  link: {
    color: "#D8D8D8",
    "&:hover": {
      color: "#D8D8D8",
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  linkDropdown: {
    marginRight: "1rem",
    color: "#D8D8D8",
    "&:hover": {
      color: "#D8D8D8",
      cursor: "pointer",
      textDecoration: "none",
    },
  },
});

export default function ProfileFooter() {
  const classes = useStyles();
  return (
    <Container className="mt-3 rounded p-5">
      <Row>
        <Col className="d-flex justify-content-between">
          <Link className={classes.link}>About</Link>
          <Link className={classes.link}>Jobs</Link>
          <Link className={classes.link}>Help</Link>
          <Link className={classes.link}>API</Link>
          <Link className={classes.link}>Privacy</Link>
          <Link className={classes.link}>Terms</Link>
          <Link className={classes.link}>Top</Link>
          <Link className={classes.link}>Accounts</Link>
          <Link className={classes.link}>Hashtags </Link>
          <Link className={classes.link}>Locations</Link>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Link className={classes.linkDropdown}>Language</Link>
          <Link className={classes.link}>© 2021 Instagram from Facebook</Link>
        </Col>
      </Row>
    </Container>
  );
}
