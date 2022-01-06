import React from "react";
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
    marginLeft: theme.spacing(10),
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
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Landing({currentUser}) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Dom's Shop
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/SignUp" className={classes.link}>
            Sign Up
          </Link>
          <Link to="/SignIn" className={classes.link}>
            Sign In
          </Link>
          <Link to="/Cart" className={classes.link}>
            Cart
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Landing;
