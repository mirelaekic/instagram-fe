import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Dm from "./pages/DM/DM";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import { withRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "./App.css";
import ProfilePage from "./pages/Profile/Profile";
import StoryPage from "./pages/Story/StoryPage";
import { useSelector,useDispatch } from "react-redux";
import {getAllUsers, getMe} from "./redux/actions/usersActions"
import functional from "./pages/DM/functional";

const exclusionArray = ["/login", "/register", "/stories/:user/:storyId"];

function App(props) {
  const allUsers = useSelector((state) => state.allUsers)
  const dispatch = useDispatch()

  return (
    <>
      {exclusionArray.indexOf(props.location.pathname) < 0 && <NavBar />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dm" component={Dm} />
        <Route path="/explore" component={Explore} />
        <Route path="/profile/:id" render={(props) => <Profile {...props} />} /> 
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/stories/:user/:storyId" component={StoryPage} /> 
      </Switch>
    </>
  );
}

export default withRouter(App);
