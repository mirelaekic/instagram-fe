import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkBorderSharp from "@material-ui/icons/BookmarkBorderSharp";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import PostModal from "../PostModal/PostModal";
import "./Comments.css";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { useDispatch, useSelector } from "react-redux";
import {postComment } from "../../redux/actions/postsAction";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  expand: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default function Comments(posts) {
  const [text, setText] = useState("")
  const dispatch = useDispatch();

const handleComment = () => {
  dispatch(postComment(text,posts.post.id))
}
  console.log(posts.post, "THE PROPS");
  const classes = useStyles();

  return (
    <div className="commentContainer">
      {posts.post ? (
        <>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderOutlined />
            </IconButton>
            <IconButton aria-label="comment">
              <ModeCommentOutlinedIcon />
            </IconButton>
            <IconButton className={classes.expand}>
              <BookmarkBorderSharp />
            </IconButton>
          </CardActions>
          <CardContent>
            {posts.post.likes.length > 0 ? (
              <Typography paragraph>
                Liked by {posts.post.likes.length}{" "}
              </Typography>
            ) : (
              <Typography paragraph></Typography>
            )}
            {posts.post.description === null ? (
              <Typography></Typography>
            ) : (
              <Typography paragraph>{posts.post.description}</Typography>
            )}
            {posts.post.comments.length > 3 ? (
              <PostModal post={posts.post}/>
            ) : (
              <Typography></Typography>
            )}
            {posts.post.comments.length > 0 ? (
              <>
                {posts.post.comments.slice(0,3).map((c, i) => (
                  <>
                    <Typography paragraph className="comment"><strong>{c.user.username}</strong> {c.text}</Typography>
                  </>
                ))}
              </>
            ) : (
              <Typography></Typography>
            )}
            <Typography className="text-muted postedAt" paragraph><Moment fromNow>{posts.post.updatedAt}</Moment></Typography>
            <div className="commentSection">
              <EmojiEmotionsOutlinedIcon />
              <input
              id="text"
              onChange={(e) => setText(e.target.value)}
                className="commentInput"
                type="text"
                placeholder="Add a comment..."
              />
              <button onClick={handleComment}>Post</button>
            </div>
          </CardContent>
        </>
      ) : (
        <h1>something went wrong</h1>
      )}
    </div>
  );
}
