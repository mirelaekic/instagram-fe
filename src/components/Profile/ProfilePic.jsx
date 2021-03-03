import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Avatar } from "@material-ui/core/";

const useStyles = makeStyles({
  Avatar: {
    width: 100,
    height: 100,
  },
});

export default function ProfilePic() {
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <div>
          <div>
            <Avatar
              alt="Travis Howard"
              src="http://placecorgi.com/260/180"
              className={classes.Avatar}
            />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
