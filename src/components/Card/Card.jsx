import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import BookmarkBorderSharp from "@material-ui/icons/BookmarkBorderSharp";
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "550px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="user" className={classes.avatar}>
            U
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="UserName"
      />
      <CardMedia
        className={classes.media}
        image="https://www.pixelstalk.net/wp-content/uploads/2016/12/Free-Beautiful-Landscape-Image.jpg"
      />
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
        <Typography paragraph>Comments:</Typography>
        <Typography paragraph>Comment1</Typography>
        <Typography paragraph>Comment2</Typography>
      </CardContent>
    </Card>
  );
}
