/** @format */

import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "@material-ui/core/";
import {  useDispatch, useSelector } from "react-redux";
import "./EditProfile.css";
import { withRouter} from "react-router";
import { editProfile, getMe } from "../../redux/actions/usersActions";

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


function EditProfile() {
  const u = useSelector((state) => state.user.user)
  const user = useSelector((state) => state.user.currentUser)
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [number, setNumber] = useState(user.number);
  const [gender, setGender] = useState(user.gender);

  const handleToggle = (e) => {
    e.preventDefault();
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const dispatch = useDispatch()
  const handleEdit = async (e) => {
    e.preventDefault(e);
    const bodyEdit = {
      name: name,
      username: username,
      email: email,
      number: number,
      gender: gender,
    };
    await dispatch(editProfile(bodyEdit,user.id))
    await dispatch(getMe())
    setOpen(false)
  };

  return (
    <div>
      {user.id === u.id ? <EditButton onClick={(e) => handleToggle(e)}>
        <b>Edit Profile</b>
      </EditButton> : <div></div>}
      <Container className={open === true ? "editProf" : "editProf d-none"}>
        <Row className="h-100">
          <Col className="h-100" xs={3}>
            <div id="rightSideYeet">
              <ul id="rightSideUl">
                <li>Change Profile</li>
                <li>Change Password</li>
                <li>Apps and Websites</li>
                <li>E-mail and SMS</li>
                <li>Push-Notifications</li>
                <li>Contacts</li>
                <li>Privacy</li>
                <li>Login-Activity</li>
              </ul>
            </div>
          </Col>
          <Col xs={9}>
            <Row>
              <Col xs={12} id="mainContainer">
                <Form id="mainFormBox" onSubmit={(e) => handleEdit(e)}>
                  <Form.Group className="editInput">
                    <Form.Label className="mr-2">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.currentTarget.value)}
                    />
                  </Form.Group>
                  <Form.Group className="editInput">
                    <Form.Label className="mr-2">Username</Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.currentTarget.value)}
                    />
                  </Form.Group>
                  <Form.Group className="editInput">
                    <Form.Label className="mr-2">Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                  </Form.Group>
                  <Form.Group className="editInput">
                    <Form.Label className="mr-2">Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      value={number}
                      onChange={(e) => setNumber(e.currentTarget.value)}
                    />
                  </Form.Group>
                  <Form.Group className="editInput">
                    <Form.Label className="mr-2">Bio</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Bio"
                      value={gender}
                      onChange={(e) => setGender(e.currentTarget.value)}
                    />
                  </Form.Group>
                  <Button className="w-100" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default withRouter(EditProfile)