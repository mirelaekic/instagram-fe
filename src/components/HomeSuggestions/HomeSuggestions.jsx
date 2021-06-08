import React, { useState } from "react";
import "./HomeSuggestions.css";
import { ListGroup } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { followUser } from "../../redux/actions/followAction";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
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
  const [imFollowing, setImFollowing] = useState(false);
  const userData = useSelector((state) => state.loggedInUser);
  const allUsers = useSelector((state) => state.allUsers);
  const follow = useSelector((state) => state.follow);
  const dispatch = useDispatch();
  // error is coming somewhere here in this func
  const {INST_API} = process.env.REACT_APP_INST_API
  const toFollow = async (userId) => {
    try {
      const response = await fetch(
        INST_API + "/insta/follow/" + userId,
        {
          method: "POST",
          credentials: "include",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();
  return (
    <div>
      <ListGroup className="mt-3 homeSuggestionsList">
        <ListGroup.Item className="myProfile-list">
          <div className="profile-name profileAvatar">
            <Avatar src={userData.user.imgurl} className={classes.small} />
            <Link to="profile/me" className="link-me">
              <strong>{userData.user.username} </strong>
            </Link>
          </div>
          <Link to="profile/me">Switch</Link>
        </ListGroup.Item>
        <h3 className="suggestion-header">Suggestions For You</h3>
        {allUsers.users.slice(1, 5).map((user, i) => (
          <ListGroup.Item key={i}>
            <div className="profile-name">
              <Avatar src={user.imgurl} className={classes.small} />
              <div className="suggInfo">
                <Link className="linkUser" to={"profile/" + user.id}>
                  <strong>{user.username} </strong>
                </Link>
                <br />
                <p className="text-muted">followed by</p>
              </div>
            </div>
            <button className="followButton" onClick={() => toFollow(user.id)}>
              {userData.user.follows
                ? userData.user.follows.find(
                    (other) => other.following.id === user.id
                  )
                  ? "Unfollow"
                  : "Follow"
                : "Follow"}
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
