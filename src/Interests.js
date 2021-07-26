import React from 'react';
import { Card, Grid, Image, Container } from "theme-ui";
import { useState } from "react";
import theme from './theme';
import './Profile.css';
import headshot from './headshot.jpg'
import Accordion from './Accordion.js'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Campus from './Campus'
import Projects from './Projects'
import { Link } from "react-router-dom"
import Navbar from './Navbar'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: "600",
    color: '#A51C30',
  },
  position: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightLight,
    color: 'black',
  },
  navRegular: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightLight,
    color: 'black',
    '&:hover': {
      color: '#A51C30'
    }
    
  },
  navHighlight: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: "600",
    color: '#A51C30',
  },
  text: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightLight,
    color: 'black',
  },
  names: {
    fontSize: theme.typography.pxToRem(36),
    fontWeight: "600",
    color: 'black',
  },
  section: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: "600",
    color: 'black',
  }
}));

function Interests(props) {

  const classes = useStyles();

  
  return(
    <Container>
    <div>
      {/*<Grid gap={5} columns={[1, 1, "1fr 3fr", "1fr 4fr"]}>*/}

          <Navbar/>
          <div className="main">
            <div id="interests">
              <div className="section-title">
                <Typography className={classes.section}>
                  Interests
                </Typography>
              </div>
              <br></br>
              <Typography className={classes.position}>
                Here are some other things I've been up to recently!
                <ul>
                  <li>Cooking more! Trying out new recipes and trying to chop faster</li>
                  <li>Playing lots of Skribbl, Gartic phone, and codenames </li>
                  <li>Playing the NYT Spelling Bee and Letterboxed literally every day</li> 
                  <li>Watching stand-up comedy specials</li>
                  <li>Watching the Great British Bake-Off</li>
                </ul>
                <br></br>
                <br></br>
              </Typography>
            </div>
          </div>
          <div className="buffer"></div>
      {/*</Grid>*/}
    </div>
    </Container>
  );
}

export default Interests;