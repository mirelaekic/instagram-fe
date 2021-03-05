import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderSharp from "@material-ui/icons/BookmarkBorderSharp";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import PostModal from "../PostModal/PostModal";
import "./Comments.css";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import {
  postComment,
  likePost,
  getPost,
  getLikes
} from "../../redux/actions/postsAction";

import {getComments, deleteComment} from "../../redux/actions/commentActions"
import Moment from "react-moment";
import Checkbox from "@material-ui/core/Checkbox";
import {Redirect,withRouter} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  expand: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));
 function Comments({post}) {
  const [text, setText] = useState("");
  const [like, setLike] = useState(false);
  const [currentComment, setCurrentComment] = useState()
  const [loading,setLoading] = useState(true)
  const [commentId, setCommentId] = useState()
  const userData = useSelector((state) => state.loggedInUser)
  const commentsData = useSelector((state) => state.comments)
  const dispatch = useDispatch()

  const handleComment = async () => {
    dispatch(postComment(text, post.id));
    await dispatch(getComments());
    setText("");
  };
  /*useEffect(() => {
    handleComment()
  }, [setCurrentComment])*/

  useEffect(() => {
    dispatch(getLikes(userData.user.id,post.id))
  },[setLike])   
  const handleLike = () => {
    setLike(!like);
    dispatch(likePost(post.id));    
  };

/*  const handleDelete = (id) => {
  console.log(id,"commentID")
  dispatch(deleteComment(id))
}*/
  const classes = useStyles();
  return (
    <div className="commentContainer">
      {post ? (
        <>
          <CardActions disableSpacing>
            <IconButton onClick={() => handleLike()}>
            {like ? <Favorite className="likedBtn"/> : <FavoriteBorder />}
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
              <PostModal like={handleLike} ifLiked={like} post={post} />
            ) : (
              <Typography></Typography>
            )}
            </div>
            {post.comments.length > 0 ? (
              <>
                {post.comments.sort((a,b) => b.createdAt - a.createdAt).slice(0, 3).map((c, i) => (
                  <>
                    <Typography key={i} paragraph className="comment">
                      <strong>{c.user.username}</strong> {c.text}
                  { /*c.user.id === userData.user.id ?
                    //// <IconButton onClick={() => handleDelete(c.id)}>
                     // <DeleteIcon />
                  //</IconButton> : <div></div>*/}
                    </Typography>
                  </>
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
export default withRouter(Comments)