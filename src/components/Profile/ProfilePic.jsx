import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Avatar } from "@material-ui/core/";

const useStyles = makeStyles({
  Avatar: {
    width: 175,
    height: 175,
  },
});

export default function ProfilePic(props) {
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <div>
          <div>
            <Avatar
              alt="Travis Howard"
              src={props.url}
              className={classes.Avatar}
            />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
