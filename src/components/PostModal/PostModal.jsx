import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import {  ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./PostModal.css";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderSharp from "@material-ui/icons/BookmarkBorderSharp";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { useDispatch } from "react-redux";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { postComment } from "../../redux/actions/commentActions";
import SingleComment from "../Comments/SingleComment";
import { getPost } from "../../redux/actions/postsAction";
import { Link } from "react-router-dom";
import { ListItemAvatar, ListItemText } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #000",
    boxShadow: theme.shadows[5],
    padding: "0px",
  },
  links: {
    color: "black",
    "&:hover": {
      color: "black",
    },
  },
}));

export default function PostModal(post) {
  const classes = useStyles();
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleComment = async (e, txt, id) => {
    e.preventDefault();
    await dispatch(postComment(txt, id));
    await dispatch(getPost());
    setText("");
  };
  return (
    <Modal
      aria-labelledby={post.post.id}
      className={classes.modal}
      open={post.open}
      onClose={post.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={post.open}>
        <div className={classes.paper}>
          <Row id={post.post.id}>
            <div className="imageModal">
              <img className="modalimg" src={post.post.imgurl} />
            </div>
            <div className="commModal">
              <ListGroup className="commentInModal">
                <ListGroupItem className="post-owner">
                  <ListItemAvatar>
                    <Avatar
                      className="post-owner-avatar"
                      alt={post.post.user.username}
                      src={post.post.user.imgurl}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <>
                        <Link
                          className={classes.links}
                          to={"/profile/" + post.post.user.id}
                          variant="body2"
                        >
                          <strong> {post.post.user.username}</strong>
                        </Link>
                      </>
                    }
                  />
                </ListGroupItem>
                <div className="commentList">
                  {post.post.comments.reverse().map((c, i) => (
                    <div className="middleDiv">
                      {post.post.description === null ? (
                        <ListGroupItem>{post.post.description}</ListGroupItem>
                      ) : (
                        <> </>
                      )}
                      <SingleComment comment={c} key={i} />
                    </div>
                  ))}
                </div>
              </ListGroup>
              <div className="commentAction">
                <CardActions disableSpacing>
                  <IconButton onClick={post.handleLike}>
                    {post.ifLiked ? (
                      <Favorite className="likedBtn" />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>
                  <IconButton aria-label="comment">
                    <ModeCommentOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <BookmarkBorderSharp />
                  </IconButton>
                  {post.post.likes.length > 0 ? (
                    <Typography paragraph className="likedLength text-muted">
                      Liked by {post.post.likes.length}{" "}
                    </Typography>
                  ) : (
                    <Typography paragraph></Typography>
                  )}
                </CardActions>
                <div className="commentSection">
                  <EmojiEmotionsOutlinedIcon />
                  <input
                    value={text}
                    minLength="2"
                    onChange={(e) => setText(e.target.value)}
                    className="commentInput"
                    type="text"
                    placeholder="Add a comment..."
                  />
                  <button onClick={(e) => handleComment(e, text, post.post.id)}>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Fade>
    </Modal>
  );
}
