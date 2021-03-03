import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import { Grid, Link, Button } from "@material-ui/core/";

const useStyles = makeStyles({});
const EditButton = withStyles((theme) => ({
  root: {
    color: "black",
    backgroundColor: "#fafafa[500]",
    textTransform: "none",
    fontSize: 16,
    border: "1.3px solid #8e8e8e",
    "&:hover": {
      backgroundColor: "#fafafa[700]",
    },
  },
}))(Button);

export default function ProfileDescription() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          Username
        </Grid>
        <Grid item xs={5}>
          <EditButton>
            <b>Edit Profile</b>
          </EditButton>
        </Grid>
        <Grid item xs={2}>
          <strong>
            <SettingsIcon />
          </strong>
        </Grid>
      </Grid>
    </div>
  );
}
