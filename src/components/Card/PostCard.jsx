import React, { useState, useEffect } from "react";
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
import {RootState} from "../../redux/store"
import { connect,useDispatch, useSelector } from "react-redux";
import {getProducts} from "../../redux/actions/postsAction"

export const PostCard = (props) => {
  
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getProducts())
}, [])


const postsData = useSelector(state => state.posts.posts)

console.log(props,"DATAAA")

  return (
    <>
    {postsData.map((p,i) => (
      <Card key={i}>
      <CardHeader
        avatar={<Avatar aria-label={p.user.username} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={p.username}
      />
      <h1>{p.imgurl}</h1>
      <CardMedia image={p.imgurl} />
      <Comments />
    </Card>
    ))
    }
    </>
  )
};
export default PostCard