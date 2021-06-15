import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, OutlinedInput } from "@material-ui/core";
import { useSelector } from "react-redux";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import "./DM.css"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "-webkit-fill-available",
    backgroundColor: "white",
    border: "2px solid #dcdcdc",
    padding: "10px",
    borderRadius: "5px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
    height: "40rem",
  },
  flex: {
    marginTop:"1rem",
    display: "flex",
  },
  send: {
    backgroundColor: "white",
    color: "#0095f6",
    fontWeight: "600",
    border: "none",
  },
  sender: {
    backgroundColor: "#efefef",
    width: "fit-content",
    padding: "14px",
    borderRadius: "15px",
    flexWrap: "wrap",
    alignSelf: "flex-end",
    fontWeight: "400",
  },
  reciever: {
    fontWeight: "400",
    border: "1px solid #f3f3f3",
    width: "fit-content",
    padding: "14px",
    borderRadius: "15px",
  },
  list: {
    marginTop: "3px",
    display: "flex",
    flexDirection: "column",
    height: "30rem",
    overflow: "auto",
  },
  target: {
    padding: "10px",
    borderBottom: "1px solid  #f3f3f3",
    display: "flex",
    alignItems: "center",
  },
  icon:{
      marginLeft:"26rem"
  }
}));

export default function ChatBox({ sendMessage, messages, target, targetMsg }) {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user.currentUser);

  const updateMessage = (e, msg) => {
    sendMessage(e, msg);
    setMessage("");
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.target}>
          <Avatar src={target.imgurl} /> <h5 className="ml-3">{target.name}</h5>
          <InfoOutlinedIcon className={classes.icon} />
        </div>
        <div className={classes.list}>
         {targetMsg.map((m,i) => (
            <h6
                key={i}
              className={
                m.senderId === user.id ? classes.sender : classes.reciever
              }
            >
              {m.message}
            </h6>
          ))}  
          {messages.map((m,i) => (
            <h6
            key={i}
              className={
                m.senderId === user.id ? classes.sender : classes.reciever
              }
            >
              {m.message}
            </h6>
          ))}
        </div>
        <div className={classes.flex}>
          <input
            className="message-input"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {message.length > 0 ? <button
            className={classes.send}
            onClick={(e) => updateMessage(e, message)}
          >
            Send
          </button> : ""}
        </div>
      </div>
    </>
  );
}
