/** @format */

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./DM.css";
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
      setChatHistory(parsedResp);
      if (target.hasOwnProperty("messageHistory")) {
        const index = chatHistory.findIndex(
          (history) => history.withUserId === target.userId
        );
        setTarget({
          ...target,
          messageHistory: chatHistory[index].messageHistory,
        });
      }
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
  }, []);

  useEffect(() => {
    socket.on("PRIVATE_MESSAGE", (data) => getChatHistory());
  }, []);

  useEffect(() => {
    return () => {
      socket.emit("LOGOUT", { userId: props.loggedInUser.user.id.toString() });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getChatHistory();
    socket.emit("USER_CONNECTED", currentUser);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    await socket.emit("PRIVATE_MESSAGE", {
      reciever: target.userId,
      sender: props.loggedInUser.user.id.toString(),
      message: message,
    });
    setTimeout(() => {
      getChatHistory();
    }, 1000);

    setMessage("");
  };

  const handleTarget = (user) => {
    const online = displayUsers.find(
      (onlineUser) => onlineUser.userId === user.withUserId
    );
    const info = allUsers.find(
      (fullUser) => fullUser.id.toString() === user.withUserId
    );
    if (online) {
      user = { ...user, ...online, ...info };
    } else {
      user = { ...user, ...info };
    }
    setTarget(user);
  };

  const hideButton = () => {

  }

  const handleHarder = (user) => {
    const info = allUsers.find(
      (fullUser) => fullUser.id.toString() === user.userId
    );
    user = { ...user, ...info };
    setTarget(user);
  };

  return (
    <Container className="mt-5">
      <Row id="chat-page">
        <Col id="usersCol" className="mr-0 pr-0">
          <div id="usersColBox">
            <ul id="stupidC">
              <div id="profileCardBox">
                <li id="stupidC2">FETCH PROFILE HERE !</li>
              </div>
              {displayUsers.length > 0 &&
                displayUsers.map((user, i) =>
                  chatHistory.find(
                    (history) => history.withUserId === history.userId
                  ) ? (
                    ""
                  ) : (
                    <li onClick={() => handleHarder(user)}>{user.userId}</li>
                  )
                )}
              {chatHistory.length > 0 &&
                chatHistory.map((user, i) => (
                  <>
                    <li key={i} id="stupidC2">
                      <div className="d-flex">
                        <img
                          src={
                            allUsers.find(
                              (fullUser) =>
                                fullUser.id.toString() === user.withUserId
                            )
                              ? allUsers.find(
                                  (fullUser) =>
                                    fullUser.id.toString() === user.withUserId
                                ).imgurl
                              : ""
                          }
                          width="30px"
                        ></img>
                        <span onClick={() => handleTarget(user)}>
                          {allUsers.find(
                            (fullUser) =>
                              fullUser.id.toString() === user.withUserId
                          )
                            ? allUsers.find(
                                (fullUser) =>
                                  fullUser.id.toString() === user.withUserId
                              ).username
                            : ""}
                        </span>
                        <span>
                          {displayUsers.find(
                            (onlineUser) =>
                              onlineUser.userId === user.withUserId
                          )
                            ? ": online"
                            : ""}
                        </span>
                      </div>
                    </li>
                  </>
                ))}
            </ul>
          </div>
        </Col>
        <Col className="ml-0 pl-0" id="chatCol">
          <div id="chatColBox">
            <div id="centeredMessageButton">
              <Button id="stupidButton" onClick={(e) => handleSubmit(e)}>
                Send Messages
              </Button>
            </div>
            {target.hasOwnProperty("id") && (
              <div>
                <span id="chattingWith">Chatting with {target.username}</span>
              </div>
            )}
            <div id="chatBody">
              <ul className="w-100 chatBody" id="stupidC">
                {target.hasOwnProperty("messageHistory") &&
                  target.messageHistory.length > 0 &&
                  target.messageHistory.map((message) => (
                    <li
                      id="stupidC2"
                      className={
                        message.send === props.loggedInUser.user.id.toString()
                          ? "ml-auto"
                          : "mr-auto"
                      }
                    >
                      {message.text} - {message.createdAt}
                    </li>
                  ))}
              </ul>
            </div>
            <div id="chatForm">
              <form id="chat" onSubmit={(e) => sendMessage(e)}>
                <input
                  id="inputForm"
                  autoComplete="off"
                  value={message}
                  placeholder="Start a conversation"
                  onChange={(e) => setMessage(e.currentTarget.value)}
                />
                <Button type="submit" className="rounded-0">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps)(DM);
