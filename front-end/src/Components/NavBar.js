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
  navlinks: {
    marginLeft: theme.spacing(0),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    textDecoration:"none",
    color:"white"
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
            <Link to="/" className={classes.logo}>Ultimate Jukebox 9000</Link>
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
