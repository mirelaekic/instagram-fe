import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, Badge } from "@material-ui/core/";

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
      borderRadius: "100%",
      border: "solid 1px #fafafa",
    },
  }))(AddIcon);
  const classes = useStyles();
  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div>
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
                  src="http://placecorgi.com/260/180"
                  className={classes.Avatar}
                />
              </Badge>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
