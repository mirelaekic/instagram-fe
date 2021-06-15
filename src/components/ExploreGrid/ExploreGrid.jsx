import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Container, Row, Col } from "react-bootstrap";
import "./ExploreGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../redux/actions/postsAction";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { GridListTileBar, IconButton } from "@material-ui/core";
import PostModal from "../PostModal/PostModal";
import OpenModal from "../PostModal/OpenModal";
import Image from "./Image";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "-webkit-fill-available",
    height: "auto",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

export default function ExploreGrid({changePost,selectedPost}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(false);

  const posts = useSelector((state) => state.post.posts);
  const handleLike = (id) => {
    setLike(!like);
    dispatch(likePost(id));
  };
  const handleOpen = (id) => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container columns">
      {posts.map((post, index) =>(
       <Image
       {...post}
       key={index}
       changePost={changePost}
       selectedPost={selectedPost}
              />
      ))}
    </div>
  );
}
