import React from "react";
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

const useStyles = makeStyles((theme) => ({
  expand: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div>
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
      <Typography paragraph>Liked by </Typography>
        <Typography paragraph>description</Typography>
        <PostModal />
        <Typography paragraph>Comment1</Typography>
        <Typography paragraph>Posted at</Typography>
        <hr/>
        <div className="commentSection">
            <EmojiEmotionsOutlinedIcon/>
        <input className="commentInput" type="text" placeholder="Add a comment..." /><button>Post</button>
        </div>
      </CardContent>
      </div>
  );
}
