import React, { useState, useEffect } from "react";
import { Avatar, CircularProgress, Container } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import ProfilePic from "../../components/Profile/ProfilePic";
import ProfileDescription from "../../components/Profile/ProfileDescription";
import NoPosts from "../../components/Profile/NoPosts";
import NoIGTV from "../../components/Profile/NoIGTV";
import NoSaved from "../../components/Profile/NoSaved";
import NoTagged from "../../components/Profile/NoTagged";
import ProfileFooter from "../../components/Profile/ProfileFooter";
import { makeStyles } from "@material-ui/core/styles";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import TvIcon from "@material-ui/icons/Tv";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import "./Profile.css";
import {  useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import PostsGrid from "../../components/Profile/PostsGrid";
import { getAllUsers, getMe, getUserById } from "../../redux/actions/usersActions";
import { CodeOutlined } from "@material-ui/icons";
const useStyles = makeStyles({
  Menu: {
    color: "1px solid #e3e3e3",
    paddingTop: "1rem",
    display: "flex",
    alignItems: "center",
    fontSize: "0.7rem",
    cursor: "pointer",
  },
  Avatar: {
    width: 175,
    height: 175,
  },
  loader:{
    position:"absolute",
    top:"50%",
    left:"50%"
  }
});

function Profile(props) {

  const classes = useStyles();
  const [target, setTarget] = useState("POSTS");
  const [posts, setPosts] = useState("1px solid black");
  const [igtv, setIgtv] = useState(null);
  const [saved, setSaved] = useState(null);
  const [tagged, setTagged] = useState(null);
  const loading = useSelector(state => state.user.loading)
  const user = useSelector(state => state.user.currentUser)
  const allposts = useSelector(state => state.post.posts)
  const filterUser = useSelector(state => state.user.user)

  const dispatch = useDispatch()
  let params = props.match.params.id
  let toInt = parseInt(params)
  useEffect(() => {
    dispatch(getUserById(params))
  },[])

  const handlePosts = () => {
    setTarget("POSTS");
    setPosts("1.3px solid black");
    setIgtv(null);
    setSaved(null);
    setTagged(null);
  };
  const handleIGTV = () => {
    setTarget("IGTV");
    setPosts(null);
    setIgtv("1.3px solid black");
    setSaved(null);
    setTagged(null);
  };
  const handleSaved = () => {
    setTarget("SAVED");
    setPosts(null);
    setIgtv(null);
    setSaved("1.3px solid black");
    setTagged(null);
  };
  const handleTagged = () => {
    setTarget("TAGGED");
    setPosts(null);
    setIgtv(null);
    setSaved(null);
    setTagged("1.3px solid black");
  };
  // DISPLAY WHEN CHECKING OUT OTHER USERS PROFILE
  const handleDisplay = () => {
    if (target === "POSTS") {
      if (filterUser.posts && filterUser.posts.length > 0) {
        return <PostsGrid posts={filterUser.posts} />;
      } else {
        return <NoPosts params={toInt} />;
      }
    }
    if (target === "IGTV") {
      return <NoIGTV params={toInt}/>;
    }

  }
  //DISPLAY WHEN CHECKING THE LOGGED IN USERS PROFILE
  const handleDisplayForLoggedInUser = () => {
     if (target === "POSTS") {
       if (user.posts && user.posts.length > 0) {
         return <PostsGrid posts={user.posts} />;
       } else {
         return <NoPosts params={toInt} />;
       }
     }
     if (target === "IGTV") {
       return <NoIGTV params={toInt}/>;
     }
     if (toInt === user.id) {
       if (target === "SAVED") {
         if (user.savedposts && user.savedposts.length > 0) {
           return <PostsGrid posts={user.savedposts} params={params}/>;
         } else {
           return <NoSaved />;
         }
       }
       if (target === "TAGGED") {
         if (user.tagged && user.taggeds.length > 0) {
           return <PostsGrid posts={user.taggeds} />;
         } else {
           return <NoTagged />;
         }
       }
     } else {
       return <div></div>
     }
  };
  console.log(filterUser, user,"THE CURRENT USERS AND THE LOGGEED IN USER PROFILE IN PROFILE.JSX")
  return loading ? (
    <CircularProgress className={classes.loader} />
  ) : (
        <div className="mt-5 profilePage">
          <Container maxWidth="md" className="mt-5">
             <Row className="mb-5">
               <Col className="px-5 col-4 ">
                {toInt === user.id ? <ProfilePic url={user.imgurl} /> : 
                <Avatar
                component="span"
                alt={filterUser.name}
                src={filterUser.imgurl}
                className={classes.Avatar}
                />}
              </Col> 
              <Col className="col-8">
                 <ProfileDescription sorted={toInt === user.id ? user : filterUser}
                /> 
              </Col>
            </Row>

            <Row style={{ borderTop: "1px solid #e3e3e3" }}>
              <Col className="col-3"></Col>
              <Col className="col-6 d-flex justify-content-between">
                <span
                  className={classes.Menu}
                  onClick={handlePosts}
                  style={{ borderTop: posts }}
                >
                  <ViewModuleIcon className="mr-1" />
                  POSTS
                </span>
                <span
                  className={classes.Menu}
                  onClick={handleIGTV}
                  style={{ borderTop: igtv }}
                >
                  <TvIcon className="mr-1" />
                  IGTV
                </span>
               { toInt === user.id ? 
               (
                <><span
                  className={classes.Menu}
                  onClick={handleSaved}
                  style={{ borderTop: saved }}
                >
                  <BookmarkBorderIcon className="mr-1" />
                  SAVED
                </span>
                <span
                  className={classes.Menu}
                  onClick={handleTagged}
                  style={{ borderTop: tagged }}
                >
                  <PermIdentityIcon className="mr-1" />
                  TAGGED
                </span>
                </> ) : <div></div>}
              </Col>
              <Col className="col-3"></Col>
            </Row>  
             <Row className="justify-content-center">
                {
            toInt === user.id ?
            <Col>{handleDisplayForLoggedInUser()}</Col> : <Col>{handleDisplay()}</Col>
               } 
               </Row>  
            <Row> 
              <Col>
                <ProfileFooter />
              </Col>
            </Row>
          </Container>
        </div>
  )
}
export default withRouter(Profile);
