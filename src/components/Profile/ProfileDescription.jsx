import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core/";
import SettingsModal from "./SettingsModal";
import EditProfile from "./EditProfile";

const useStyles = makeStyles({
  settingButton: {
    cursor: "pointer",
  },
});

export default function ProfileDescription(props) {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <Row className="d-flex align-items-center ">
              <Col className="d-flex align-items-center " xs={12}>
                {props.user.username}

                <span className="ml-3">
                  <EditProfile
                    user={props.user}
                    fetchProfile={props.fetchProfile}
                  />
                </span>
                <span className="ml-3">
                  <SettingsModal />
                </span>
              </Col>
            </Row>
            <Row className=" mt-4">
              <Col className="col-12 d-flex justify-content-between">
                <span>
                  <b>{props.user.posts.length}</b> posts
                </span>
                <span>
                  <b>{props.user.followers.length}</b> followers
                </span>
                <span>
                  <b>{props.user.follows.length}</b> following
                </span>
              </Col>
            </Row>
            <Row className=" align-items-center mt-4">
              <Col>
                <b>{props.user.name}</b>
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
