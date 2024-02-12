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
import { Link, useLocation } from "react-router-dom"


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

function Navbar(props) {

  const classes = useStyles();
  const location = useLocation();

  
  const subjects = [["Home", "home"], ["Experience", "experience"],  ["Projects", "projects"]];
  const [activeCategory, setActiveCategory] = useState("Home");
  
  const cards = 
      subjects.map((subject) => {
        const current =
          location.pathname.replace("/", "") === subject[1] ||
          (subject[1] === "home" &&
            location.pathname ===
              "/");
          const included = activeCategory === subject[0];
          return (
            <Link to={subject[1]} key={subject[1]}>
              <Card
                  variant="list"
                  sx={{
                  backgroundColor: theme.colors.background,
                  alignContent: 'center',
                  wordWrap: "break-word",

                  }}
                  onClick={() => {
                      setActiveCategory(subject[0]);
                  }}
                  >
                  <div>
                    <Typography className={current ? classes.navHighlight : classes.navRegular }
                    >
                      {subject[0]}
                    </Typography>
                  </div>
              </Card>
            </Link>
          );
      });
  return(
    <Container>
      <div>
        <div className="content-desktop">
          <br></br>
          <div className="nav-items">
            <Grid gap={1} columns={[3, "1fr 1fr 1fr"]}>
              {cards}
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;