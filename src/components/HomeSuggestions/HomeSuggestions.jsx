import React from "react";
import "./HomeSuggestions.css";
import { ListGroup } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom"
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
  console.log(allUsers.users,"all users in homeSUgg")
  const classes = useStyles();
  const names = ["Ari","Sued","Abdul","Mirela"]


  return (
    <div>
      <ListGroup className="mt-3 homeSuggestionsList">
        <ListGroup.Item className="myProfile-list">
          <div className="profile-name profileAvatar">
            <Avatar src={userData.user.imgurl} className={classes.small}/>
            <Link to="profile/me" className="link-me">
            <strong>{userData.user.username}{" "}</strong>
            </Link>
          </div> 
          <Link to="profile/me" >
          Switch
          </Link>        
        </ListGroup.Item>
        <h3 className="suggestion-header">Suggestions For You</h3>
        {allUsers.users.slice(1,5).map((user,i) => (
           <ListGroup.Item key={i}>
          <div className="profile-name">
            <Avatar src={user.imgurl} className={classes.small}/>
            <div className="suggInfo">
              <Link className="linkUser" to={"profile/" + user.id} >
            <strong>{user.username}{" "}</strong>
            </Link>
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
