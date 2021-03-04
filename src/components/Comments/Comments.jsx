import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkBorderSharp from "@material-ui/icons/BookmarkBorderSharp";
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import PostModal from "../PostModal/PostModal"
import "./Comments.css"
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../redux/actions/postsAction";

const useStyles = makeStyles((theme) => ({
  expand: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default function Comments(posts) {
  const dispatch = useDispatch()

  console.log(posts,"THE PROPS")
  const classes = useStyles();

  useEffect(() => {
    const match = post.id === posts.currentId
    console.log(match)
    dispatch(getPostById(posts.currentId));
  }, []);

  const post = useSelector((state) => state.singlePost.singlePost);

  return (
    <div className="commentContainer">
      {post.id === posts.currentId ? (
        <>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlined />
        </IconButton>
        <IconButton aria-label="comment">
          <ModeCommentOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton className={classes.expand}>
          <BookmarkBorderSharp />
        </IconButton>
      </CardActions>
      <CardContent>
        {post.likes.length > 0 ?
      <Typography paragraph>Liked by {post.likes.length} </Typography> :
      <Typography paragraph>Be the first one to like this</Typography> 
      }
      {
        post.description === null ? <Typography></Typography> : 
        <Typography paragraph>description</Typography>
      }
      {post.comments.length > -1 ? 
       ( <>
       <PostModal />
       {post.comments.map((c,i) => (
         <>
         <Typography paragraph>{c.text}</Typography>
         <Typography paragraph>Posted at</Typography>
         </>
       ))
        }
        </> ) : 
        (<Typography>Be the first one to comment</Typography>)}
        <div className="commentSection">
            <EmojiEmotionsOutlinedIcon/>
        <input className="commentInput" type="text" placeholder="Add a comment..." /><button>Post</button>
        </div>
      </CardContent>
      </>) : (<h1>something went wrong</h1>)}
      </div>
  );
}
