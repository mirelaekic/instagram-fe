import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Comments from "../Comments/Comments";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../../redux/actions/postsAction";
import NoPosts from "../Profile/NoPosts";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "40rem",
    backgroundSize: "cover",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  link: {
    color: "black",
    fontSize: "16px",
    "&:hover": {
      color: "black",
    },
  },
}));

export const PostCard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.post.posts);
  const currentUser = useSelector((state) => state.user.currentUser);
  const deletePost = (id) => {
    dispatch(removePost(id));
  };
  return (
    <div className="mt-3">
      {postsData ? (
        postsData.map((p, i) => (
          <div key={i} className="mb-4">
            <Card key={i} className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar
                    alt={p.user.username}
                    src={p.user.imgurl}
                    aria-label={p.user.username}
                  />
                }
                action={
                  p.userId === currentUser.id ? 
                  <Dropdown className="delete-dropdown">
                    <Dropdown.Toggle id="dropdown-basic">
                      <MoreVertIcon />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => deletePost(p.id)}>
                        Delete post
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> : ""
                }
                title={
                  <Link
                    variant="body2"
                    className={classes.link}
                    to={"/profile/" + p.user.id}
                  >
                    <strong>{p.user.username}</strong>
                  </Link>
                }
              />
              <CardMedia className={classes.media} image={p.imgurl} />
              <Comments post={p} />
            </Card>
          </div>
        ))
      ) : (
        <NoPosts />
      )}
    </div>
  );
};
export default PostCard;
