import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home/Home";
import DM from "./pages/DM/DM";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile"
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Router path="/dm" component={DM} />
      <Router path="/explore" component={Explore} />
      <Route path="/profile/:id" render={(props) => (<Profile {...props} />)} />
    </BrowserRouter>
  );
}

export default App;
