import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderSharp from "@material-ui/icons/BookmarkBorderSharp";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import PostModal from "../PostModal/PostModal";
import "./Comments.css";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../redux/actions/commentActions";
import Moment from "react-moment";
import { withRouter } from "react-router-dom";
import { getPost, likePost } from "../../redux/actions/postsAction";
import SingleComment from "./SingleComment";
const useStyles = makeStyles((theme) => ({
  expand: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));
function Comments({ post }) {
  const [text, setText] = useState("");
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleComment = async (e, txt, id) => {
    e.preventDefault();
    await dispatch(postComment(txt, id));
    await dispatch(getPost());
    setText("");
  };
  const handleLike = () => {
    setLike(!like);
    dispatch(likePost(post.id));
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div className="commentContainer">
      {post ? (
        <>
          <CardActions disableSpacing>
            <IconButton onClick={() => handleLike()}>
              {like ? <Favorite className="likedBtn" /> : <FavoriteBorder />}
            </IconButton>
            <IconButton aria-label="comment">
              <ModeCommentOutlinedIcon />
            </IconButton>
            <IconButton className={classes.expand}>
              <BookmarkBorderSharp />
            </IconButton>
          </CardActions>
          <CardContent>
            {post.likes.length > 0 ? (
              <Typography paragraph className="likedby">
                Liked by {post.likes.length}{" "}
              </Typography>
            ) : (
              <Typography paragraph></Typography>
            )}
            {post.description === null ? (
              <Typography></Typography>
            ) : (
              <Typography paragraph>{post.description}</Typography>
            )}
            <div className="viewmore">
              {post.comments.length > 3 ? (
                <div>
                  <button
                    className="ViewComments"
                    type="button"
                    onClick={handleOpen}
                  >
                    View all number comments
                  </button>
                  <PostModal key={post.id} id={post.id} like={handleLike} handleClose={handleClose} ifLiked={like} post={post} open={open} />
                </div>
              ) : (
                <Typography></Typography>
              )}
            </div>
            {post.comments.length > 0 ? (
              <>
                {post.comments
                  .sort((a, b) => b.createdAt - a.createdAt)
                  .slice(0, 3)
                  .map((c, i) => (
                    <SingleComment key={i} comment={c} />
                  ))}
              </>
            ) : (
              <Typography></Typography>
            )}
            <Typography className="text-muted postedAt" paragraph>
              <Moment fromNow>{post.updatedAt}</Moment>
            </Typography>
            <div className="commentSection">
              <EmojiEmotionsOutlinedIcon />
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="commentInput"
                type="text"
                minLength="2"
                placeholder="Add a comment..."
              />
              <button onClick={(e) => handleComment(e, text, post.id)}>
                Post
              </button>
            </div>
          </CardContent>
        </>
      ) : (
        <h1>something went wrong</h1>
      )}
    </div>
  );
}
export default withRouter(Comments);
