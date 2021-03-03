import "./App.css";
import Home from "./pages/Home/Home";
import DM from "./pages/DM/DM";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import { Switch, Route } from "react-router";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import CreateStory from "./components/Stories/CreateStory";
import Carousel from "./components/Stories/Carousel";
import StoryPlayer from "./components/Stories/StoryPlayer";

function App() {
  return (
    <>
      <NavBar />
      <StoryPlayer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dm" component={DM} />
        <Route path="/explore" component={Explore} />
        <Route path="/profile/:id" render={(props) => <Profile {...props} />} />
      </Switch>
    </>
  );
}

export default App;
