import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core/";
import { Link, withRouter, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  cssAvatar: {
    width: 100,
    height: 100,
    border: "solid 4px white",
  },
  Border: {
    padding: "4px",
    marginLeft: "",
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    borderRadius: "100%",
  },
});

function CreateStory(props) {
  const location = useLocation();
  const classes = useStyles();
  const [margin, setMargin] = useState(0);
  const handleClick = () => {
    setMargin("2.5px");
  };
  const handleLeave = () => {
    setMargin(null);
  };
  console.log("this are the fucking", location.pathname);
  return (
    <Grid container>
      <React.Fragment>
        <Link to="/stories/:user/:storyId">
          <div
            className={classes.Border}
            style={{ marginLeft: margin }}
            onClick={handleClick}
            onMouseLeave={handleLeave}
            onMouse
          >
            <Avatar
              className={classes.cssAvatar}
              alt="Travis Howard"
              src="http://placecorgi.com/260/180"
            />
          </div>
        </Link>
      </React.Fragment>
    </Grid>
  );
}
export default withRouter(CreateStory);
