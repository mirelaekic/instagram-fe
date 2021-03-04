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
  const [allUsers, setAllUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [target, setTarget] = useState({});

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:9001/insta/users", {
        credentials: "include",
      });
      const allUsersArray = await response.json();
      setAllUsers(allUsersArray);
    } catch (error) {
      console.log(error);
    }
  };

  const getChatHistory = async () => {
    try {
      let history = await fetch(
        "http://localhost:9001/insta/users/give/me/those/chats",
        {
          credentials: "include",
        }
      );
      let parsedResp = await history.json();
      console.log(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.on("connect", () => console.log("connected to socket"));
    getAllUsers();
    getChatHistory();

    socket.emit("VERIFY_USER", props.loggedInUser.user.id.toString(), (data) =>
      setCurrentUser(data.user)
    );
    socket.on("USER_CONNECTED", async (data) => {
      helpMeGod(data);
      console.log("SOMEONE ELSE CONNECTING");
    });
    socket.on("USER_DISCONNECTED", async (data) => {
      helpMeGod(data);
      console.log("SOMEONE ELSE DISCONNECTING");
    });
    socket.on("PRIVATE_MESSAGE", (data) => getChatHistory());
  }, []);

  useEffect(() => {
    return () => {
      socket.emit("LOGOUT");
    };
  }, []);

  const helpMeGod = async (data) => {
    try {
      setAllOnlineUsers(data);
      const onlineUsers = [];
      data.forEach((user) => {
        let hope = allUsers.findIndex(
          (ele) => ele.id.toString() === user.userId
        );
        if (hope) {
          let onlineUser = { ...user, ...allUsers[hope] };
          onlineUsers.push(onlineUser);
        }
      });
      console.log("HHHHHHHHHHHHET", onlineUsers);
      console.log(data);
      setDisplayUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("USER_CONNECTED", currentUser);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    socket.emit("PRIVATE_MESSAGE", {
      reciever: target.userId,
      sender: props.loggedInUser.user.id.toString(),
      message: message,
    });
    getChatHistory();
    setMessage("");
  };

  return (
    <Container className="mt-5" id="chat-page">
      <Row>
        <Col xs={5} id="usersCol">
          <ul>
            <li>Global</li>
            {displayUsers.length > 0 &&
              displayUsers.map((user, i) => (
                <li key={i} onClick={() => setTarget(user)}>
                  {user.username ? user.username : user.userId}
                  {user.online && ": online"}
                </li>
              ))}
          </ul>
        </Col>
        <Col xs={7} id="chatCol">
          <Button onClick={(e) => handleSubmit(e)}>Send Messages</Button>
          {target.hasOwnProperty("userId") && (
            <span>Chatting with {target.userId}</span>
          )}
          <form id="chat" onSubmit={(e) => sendMessage(e)}>
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
