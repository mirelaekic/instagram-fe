import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const connOpt = {
  transports: ["websocket"],
};

let socket = io("http://localhost:9001", connOpt);

const mapStateToProps = (state) => state;

function DM(props) {
  const [message, setMessage] = useState("");
  const [allOnlineUsers, setAllOnlineUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    socket.on("connect", () => console.log("connected to socket"));
    socket.emit(
      "VERIFY_USER",
      props.loggedInUser.user.id.toString(),
      (data) => {
        setCurrentUser(data.user);
      }
    );
    socket.on("USER_CONNECTED", (data) => setAllOnlineUsers(data));
  }, []);

  return (
    <Container className="mt-5" id="chat-page">
      <Row>
        <Col xs={5} id="usersCol">
          <ul>
            <li>Global</li>
            {allOnlineUsers.length > 0 &&
              allOnlineUsers.map((user, i) => <li key={i}>{user.userId}</li>)}
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
