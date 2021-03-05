import React from "react";
import "./HomeSuggestions.css";
import { ListGroup } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from "react-redux";
import {getAllUsers} from "../../redux/actions/usersActions"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function HomeSuggestions() {
  const userData = useSelector((state) => state.loggedInUser)
  const allUsers = useSelector((state) => state.allUsers)
  console.log(allUsers,"props in home suggestions")
const classes = useStyles();
const names = ["Ari","Sued","Abdul","Mirela"]


  return (
    <div>
      <ListGroup className="mt-3 homeSuggestionsList">
        <ListGroup.Item className="myProfile-list">
          <div className="profile-name profileAvatar">
            <Avatar src="/static/images/avatar/1.jpg" className={classes.small}/>
            <strong>{userData.user.username}{" "}</strong>
          </div>
          <a>Switch</a>
        </ListGroup.Item>
        <h3 className="suggestion-header">Suggestions For You</h3>
        {names.map((n) => (
           <ListGroup.Item>
          <div className="profile-name">
            <Avatar src="/static/images/avatar/1.jpg" className={classes.small}/>
            <div className="suggInfo">
            <strong>{n}{" "}</strong>
            <br />
            <p className="text-muted">followed by</p>
            </div>
          </div>
          <a>Follow</a>
        </ListGroup.Item> 
        ))}
      </ListGroup>
    </div>
  );
}
