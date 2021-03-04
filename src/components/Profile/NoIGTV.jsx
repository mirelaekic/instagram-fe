import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import TvIcon from "@material-ui/icons/Tv";

const useStyles = makeStyles({
  root: {
    borderRadius: "0.8rem",
  },
  image: {
    fontSize: "2rem",
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
        <Col>
          <Row className="justify-content-center align-items-center">
            <TvIcon />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
