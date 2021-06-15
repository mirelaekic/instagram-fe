import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
    IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";
import { deleteComment } from "../../redux/actions/commentActions";
import { getPost } from "../../redux/actions/postsAction";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  comment: {
    paddingLeft: "30px",
    paddingTop: "1px",
    paddingBottom: "0px",
  },
  text: {
    display: "inline",
    marginLeft: "5px",
  },
  link: {
    color: "black",
    "&:hover": {
      color: "black",
    },
  },
}));
export default function SingleComment({ comment }) {
  const userData = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    await dispatch(deleteComment(id));
    await dispatch(getPost());
  };
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start" className={classes.comment}>
      <ListItemAvatar>
        <Avatar alt={comment.user.username} src={comment.user.imgurl} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            <Link
              className={classes.link}
              to={"/profile/" + comment.user.id}
              variant="body2"
            >
              <strong>{comment.user.username}</strong>
            </Link>
            <Typography className={classes.text} color="textPrimary">
              {comment.text}
            </Typography>
          </>
        }
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="textSecondary">
              <Moment fromNow>{comment.createdAt}</Moment>
            </Typography>
          </React.Fragment>
        }
      />
      {comment.user.id === userData.id ? (
        <IconButton edge="end" onClick={() => handleDelete(comment.id)}>
          <HighlightOffIcon />
        </IconButton>
      ) : (
        <div></div>
      )}
    </ListItem>
  );
}
