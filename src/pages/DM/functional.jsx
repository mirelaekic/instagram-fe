import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const connOpt = {
  transports: ["websocket"],
};
const INST_API = process.env.REACT_APP_INST_API

let socket = io(INST_API, connOpt);

const mapStateToProps = (state) => state;

function DM(props) {
  const [message, setMessage] = useState("");
  const [allOnlineUsers, setAllOnlineUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await fetch(INST_API+"/insta/users", {
        credentials: "include",
      });
      const allUsersArray = await response.json();
      setAllUsers(allUsersArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.on("connect", () => console.log("connected to socket"));
    getAllUsers();
    socket.emit(
      "VERIFY_USER",
      props.loggedInUser.user.id.toString(),
      (data) => {
        setCurrentUser(data.user);
        console.log("POPULATING WITH ALL USERS");
      }
    );

    socket.on("USER_CONNECTED", async (data) => {
      setAllOnlineUsers(data);
      console.log("SOMEONE ELSE CONNECTING");
    });
    socket.on("USER_DISCONNECTED", async (data) => {
      setAllOnlineUsers(data);
      console.log("SOMEONE ELSE DISCONNECTING");
    });
    return () => {
      socket.emit("LOGOUT");
    };
  }, []);

  return (
    <Container className="mt-5" id="chat-page">
      <Row>
        <Col xs={5} id="usersCol">
          <ul>
            <li>Global</li>
            {allUsers.length > 0 &&
              allUsers.map((user, i) => (
                <li key={i}>
                  {user.username}
                  {user.online && ": online"}
                </li>
              ))}
          </ul>
        </Col>
        <Col xs={7} id="chatCol">
          <form id="chat">
            <input
              autoComplete="off"
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
            <Button type="submit" className="rounded-0">
              Send
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps)(DM);
