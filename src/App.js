import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import DM from "./pages/DM/DM";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "./App.css";
import ProfilePage from "./pages/Profile/Profile";

const exclusionArray = ["/login", "/register", "/stories/:user/:storyId"];

function App(props) {
  return (
    <>
      {exclusionArray.indexOf(props.location.pathname) < 0 && <NavBar />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dm" component={DM} />
        <Route path="/explore" component={Explore} />
        <Route path="/profile/:id" render={(props) => <Profile {...props} />} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/stories/:user/:storyId" component={ProfilePage} />
      </Switch>
    </>
  );
}

export default withRouter(App);
