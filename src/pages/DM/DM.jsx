/** @format */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./DM.css";
import RoomList from "./RoomList";
import ChatBox from "./ChatBox";
import axios from "axios";
import Pusher from "pusher-js";

const mapStateToProps = (state) => state;
const SOCKET_API = process.env.REACT_APP_SOCKET_API
const SOCKET_KEY = process.env.REACT_APP_PUSHER_KEY
function Dm(props) {
  const allUsers = useSelector((state) => state.user.users);
  const currentUser = useSelector((state) => state.user.currentUser);
  const filter = allUsers.filter((u) => {
    return u.id !== currentUser.id;
  });
  const [chats, setChats] = useState([]);
  const [target, setTarget] = useState({});
  const [targetUserMsg, setTargetUserMsg] = useState([]);
  useEffect(() => {
    handleTarget(filter[0])
    const pusher = new Pusher(SOCKET_KEY, {
      cluster: "eu",
      encrypted: true,
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", (data) => {
      setChats((oldChat) => [...oldChat, data]);
    });
  }, []);
  const sendMessage = (e, msg) => {
    e.preventDefault();
    const payload = {
      sender: currentUser.name,
      senderId: currentUser.id,
      message: msg,
      reciever: target.name,
      recieverId: target.id,
    };
    try {
      const res = axios.post(
        SOCKET_API+"socket/message",
        payload
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleTarget = async (user) => {
    setTarget(user);
    try {
      const res = await axios.get(
        `${SOCKET_API}socket/message/${currentUser.id}/${user.id}`
      );
      const data = await res.data;
      setTargetUserMsg(data);
      setChats([])
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="mt-5">
      <Row id="chat-page">
        <Col lg={4} className="users-list">
          <RoomList handleTarget={handleTarget} />
        </Col>
        <Col lg={8} className="chat-box">
          <ChatBox
            target={target}
            sendMessage={sendMessage}
            messages={chats}
            targetMsg={targetUserMsg}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps)(Dm);
