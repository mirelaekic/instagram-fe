import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  copyright: {
    textAlign: "center",
  },

  linkHover: {
    color: "#D8D8D8",
    "&:hover": {
      color: "#D8D8D8",
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  footer: {
    color: "#D8D8D8",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>About</Link>
        </Grid>
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>Help</Link>
        </Grid>{" "}
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>Press</Link>
        </Grid>{" "}
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>API</Link>
        </Grid>{" "}
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>Jobs</Link>
        </Grid>{" "}
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>Privacy</Link>
        </Grid>{" "}
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>Terms</Link>
        </Grid>{" "}
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>Locations</Link>
        </Grid>{" "}
      </Grid>
      <Grid container spacing={2}>
        {" "}
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>Top Accounts</Link>
        </Grid>
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>Hashtags</Link>
        </Grid>
        <Grid item xs={1.5}>
          <Link className={classes.linkHover}>Language</Link>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {" "}
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.footer}>
          © 2021 Instagram from Facebook
        </Grid>
      </Grid>
    </div>
  );
}
