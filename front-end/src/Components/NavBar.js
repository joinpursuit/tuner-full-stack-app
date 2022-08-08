// Followed guide on making a navbar out of a MUI Appbar here https://javascript.works-hub.com/learn/how-to-create-a-responsive-navbar-using-material-ui-and-react-router-f9a01

import React from "react";

//MUI Imports
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  // Allows for special in-line styling
  navlinks: {
    marginLeft: theme.spacing(0),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "cyan",
      borderBottom: "1px solid white",
    },
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Ultimate Music Playlist 9000
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/songs" className={classes.link}>
            Song List
          </Link>
          <Link to="/songs/new" className={classes.link}>
            Add Song
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
