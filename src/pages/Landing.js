import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
// import SignIn from "../components/signin";

import Image from '../Images/123.jpeg';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Image})`,
    maxWidth: '120%',
    height: '55vw'
}});

const theme = createTheme();

export default function Album() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ShoppingBasketIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Flata Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 40,
            pb: 0,
          }}
          className={classes.root}
        >
          <Container sx={{mb: 10}}maxWidth="sm" >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary.main"
              gutterBottom
            >
              Welcome To Flata Shop
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Ready to shop?
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" component={Link} to="/signin">Sign In</Button>
              <Button variant="outlined" component={Link} to="/signup">Sign Up</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   makeStyles,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import SignIn from "../components/signin";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(10),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

// function Landing({currentUser}) {
//   const classes = useStyles();

//   return (
//     <>
//     <AppBar position="static">
//       <CssBaseline />
//       <Toolbar>
//         <Typography variant="h4" className={classes.logo}>
//           Dom's Shop
//         </Typography>
//         <div className={classes.navlinks}>
//           <Link to="/SignUp" className={classes.link}>
//             Sign Up
//           </Link>
//           <Link to="/SignIn" className={classes.link}>
//             Sign In
//           </Link>
//           <Link to="/Cart" className={classes.link}>
//             Cart
//           </Link>
//         </div>
//       </Toolbar>
//     </AppBar>
//     <SignIn/>
//     </>
//   );
// }

// export default Landing;


