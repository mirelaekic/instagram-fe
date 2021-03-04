import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core/";

const useStyles = makeStyles({
  textStyle: "none",
});
const EditButton = withStyles((theme) => ({
  root: {
    color: "black",
    backgroundColor: "#fafafa[500]",
    textTransform: "none",
    fontSize: 13,
    border: "1.3px solid #8e8e8e",
    "&:hover": {
      backgroundColor: "#fafafa[700]",
    },
  },
}))(Button);

export default function ProfileDescription() {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <Container>
        <Row>
          <Col className="col-9">
            <Row className="justify-content-center align-items-center ">
              <Col className="col-3">Username</Col>
              <Col className="col-9">
                <EditButton>
                  <b>Edit Profile</b>
                </EditButton>
                <SettingsIcon className="ml-3" />
              </Col>
            </Row>
            <Row className=" mt-4">
              <Col className="col-12 d-flex justify-content-between">
                <span>
                  <b>0</b> posts
                </span>
                <span>
                  <b>0</b> followers
                </span>
                <span>
                  <b>0</b> following
                </span>
              </Col>
            </Row>
            <Row className=" align-items-center mt-4">
              <Col>
                <b>Name</b>
              </Col>
            </Row>
            <Row className=" align-items-center mt-2">
              <Col>
                <p>bio</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
