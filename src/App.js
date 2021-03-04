import "./App.css";
import Home from "./pages/Home/Home";
import DM from "./pages/DM/DM";
import Explore from "./pages/Explore/Explore";
import { Switch, Route } from "react-router";
import NavBar from "./components/Navbar/NavBar";
import ProfilePage from "./pages/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <ProfilePage />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dm" component={DM} />
        <Route path="/explore" component={Explore} />
        <Route
          path="/profile/:id"
          render={(props) => <ProfilePage {...props} />}
        />
      </Switch>
    </>
  );
}

export default App;
