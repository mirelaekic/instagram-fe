import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import LaunchIcon from '@material-ui/icons/Launch';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "-webkit-fill-available !important",
    backgroundColor: "white",
    border: "2px solid #dcdcdc",
    padding: "10px",
    borderRadius: "5px",
    height: "40rem",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
  },
  inline: {
    display: "inline",
  },
  listItem: {
    margin: "0px !important",
    padding: "3px",
    marginBottom: "5px",
    borderBottom: "1px solid #dcdcdc",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#efefef",
      borderRadius: "5px",
    },
  },
  profil:{
      fontWeight:"600",
    margin: "5px !important",
    padding: "20px !important",
    marginBottom: "5px",
    borderBottom: "1px solid #dcdcdc",
    textAlign:"center"
  }
}));

export default function RoomList(props) {
  const users = useSelector((state) => state.user.users);
  const user = useSelector((state) => state.user.currentUser);
  const classes = useStyles();
  const filter = users.filter((u) => {
    return u.id !== user.id;
  });
  return (
    <List className={classes.root}>
        <div className={classes.profil}>{user.username} <LaunchIcon /></div>
      {filter.map((user, i) => (
        <ListItem
            key={i}
          onClick={() => props.handleTarget(user)}
          className={classes.listItem}
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.imgurl} />
          </ListItemAvatar>
          <ListItemText
            primary={<strong>{user.name}</strong>}
            secondary={
              <React.Fragment>{user.username}</React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
