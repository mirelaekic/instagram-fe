import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import InputBase from "@material-ui/core/InputBase";
import Avatar from "@material-ui/core/Avatar";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Container, IconButton } from "@material-ui/core";
import "./NavBar.css";
import instagramLogo from "../../logo/instagramLogo.jpg";
import { withRouter, Link, Redirect } from "react-router-dom";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import BookmarkBorderSharpIcon from "@material-ui/icons/BookmarkBorderSharp";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import SwapHorizRoundedIcon from "@material-ui/icons/SwapHorizRounded";
import PostImage from "../PostImage/PostImage";
import { useDispatch, useSelector } from "react-redux";
import {
  getMe,
  getUserById,
  logout,
  getAllUsers,
} from "../../redux/actions/usersActions";
import {browserHistory} from 'react-router'
const useStyles = makeStyles((theme) => ({
  root1: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgb(171 165 165 / 15%)",
    "&:hover": {
      backgroundColor: "rgb(171 165 165 / 16%)",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "16ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function NavBar() {
  useEffect(() => {
    dispatch(getMe());
    dispatch(getAllUsers());
  }, []);
  const classes = useStyles();
  const currentUser = useSelector((state) => state.user.currentUser);
  const users = useSelector((state) => state.user.users);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(users);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    setResult(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  function logOut() {
    dispatch(logout());
  }

  return (
    <div className={classes.root1} position="fixed">
      <AppBar position="fixed">
        <Container>
          <Toolbar className="navbarContent">
            <img className="instLogo" src={instagramLogo} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root1: classes.input,
                  input: classes.inputInput,
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
              <div className={search.length > 0 ? "suggestions" : "d-none"}>
                <ul className="suggestion-list">
                  {result.map((u, i) => (
                    <Link to={"/profile/"+ u.id} key={i}><li><Avatar src={u.imgurl} className="mr-3" alt={u.name}/>{u.name}</li></Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="iconsNavbar">
              <PostImage />
              <Link to="/">
                <HomeOutlinedIcon />
              </Link>
              <Link to="/dm">
                <SendOutlinedIcon />
              </Link>
              <Link to="/explore">
                <ExploreOutlinedIcon />
              </Link>
              <div>
                <FavoriteBorderOutlinedIcon />
              </div>
              <IconButton
                onClick={handleMenu}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <Avatar alt={currentUser.name} src={currentUser.imgurl} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to={"/profile/" + currentUser.id}>
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <AccountCircleRoundedIcon /> Profile
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <BookmarkBorderSharpIcon /> Saved
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <SettingsRoundedIcon /> Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <SwapHorizRoundedIcon /> Switch Accounts
                </MenuItem>
                <hr />
                <Link to="/login">
                  <MenuItem onClick={logOut}>Log Out</MenuItem>
                </Link>
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default withRouter(NavBar);
