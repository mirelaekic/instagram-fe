import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { SwipeableDrawer, Button, Avatar, Badge } from "@material-ui/core/";
import { Image, Transformation } from "cloudinary-react";

const useStyles = makeStyles({
  Avatar: {
    width: 100,
    height: 100,
  },
});

export default function CreateStory() {
  const SmallIcon = withStyles((theme) => ({
    root: {
      width: 20,
      height: 20,
      color: "#fafafa",
      backgroundColor: "#0095f6",
      borderRadius: "1000rem",
      border: "solid 0.7px #fafafa",
    },
  }))(AddIcon);
  const classes = useStyles();
  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={<SmallIcon />}
            >
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                className={classes.Avatar}
              />
            </Badge>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
