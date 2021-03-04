import React, { useEffect,useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Comments from "../Comments/Comments";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost,getPostById } from "../../redux/actions/postsAction";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "40rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const PostCard = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);


  const postsData = useSelector((state) => state.posts.posts);

  return (
    <>
    {postsData ? postsData.map((p, i) => (
        <div className="mb-4">
        <Card key={i} className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label={p.user.username} className={classes.avatar}>
                U
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={p.user.username}
          />
          <CardMedia className={classes.media} image={p.imgurl} />
          <Comments post={p}/>
        </Card>
    </div>
      )) : <h1>error</h1>}
      </>
  );
};
export default PostCard;
