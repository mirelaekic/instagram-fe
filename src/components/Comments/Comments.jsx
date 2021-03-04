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
import {
  postComment,
  likePost,
  getPost,
  getLikes
} from "../../redux/actions/postsAction";
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
 function Comments(posts) {
  console.log(posts,"STATESSSSSSSS")
  const [text, setText] = useState("");
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.loggedInUser)
  console.log(userData, "USER")

  const handleComment = async () => {
    await dispatch(postComment(text, posts.post.id));
    dispatch(getPost());
    setText("");
  };
  /*const getLikes = async () => {
    if(!userData) {
      return (<Redirect to="/login" />)
    } else {
      await dispatch(getLikes(userData.user.id,posts.post.id))
    }
  }*/
/*useEffect(() => {
  dispatch(getLikes(userData.user.id,posts.post.id))
}) */

const Liked = useSelector((state) => state.liked)
console.log(Liked,"liked posts")

  const handleLike = () => {
    setLike(!like);
    dispatch(likePost(posts.post.id));
  };
  /*useEffect(() => {
    if (posts.post.likes.length > 0 && posts.post.likes.filter((like) => (like.userId === userData.user.id))){
      console.log(posts.post.likes[0].userId, "LIKED USER ID")
      console.log(userData.user.id, "USER ID ")
      setLike(true)
    }
  }, [])*/

  console.log(posts.liked, "THE LIKED");
  const classes = useStyles();

  return (
    <div className="commentContainer">
      {posts.post ? (
        <>
          <CardActions disableSpacing>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={handleLike}
                  icon={<FavoriteBorder />}
                  checkedIcon={like ? <FavoriteBorder /> : <Favorite />}
                  name="checkedH"
                />
              }
            />
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
              <PostModal post={posts.post} />
            ) : (
              <Typography></Typography>
            )}
            {posts.post.comments.length > 0 ? (
              <>
                {posts.post.comments.slice(0, 3).map((c, i) => (
                  <>
                    <Typography key={i} paragraph className="comment">
                      <strong>{c.user.username}</strong> {c.text}
                    </Typography>
                  </>
                ))}
              </>
            ) : (
              <Typography></Typography>
            )}
            <Typography className="text-muted postedAt" paragraph>
              <Moment fromNow>{posts.post.updatedAt}</Moment>
            </Typography>
            <div className="commentSection">
              <EmojiEmotionsOutlinedIcon />
              <input
                id="text"
                onChange={(e) => setText(e.target.value)}
                className="commentInput"
                type="text"
                minChar="2"
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