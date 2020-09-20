import React from 'react';
import { Card, Grid, Image, Styled, Container, Divider } from "theme-ui";
import { useState } from "react";
import theme from './theme';
import './Profile.css';
import headshot from './headshot.jpg'
import Accordion from './Accordion.js'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Campus from './Campus'
import Projects from './Projects'

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
  text: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightLight,

    color: 'black',
  }
}));

function Profile(props) {

  const classes = useStyles();

  
  const subjects = [["Home", "home"], ["Experience", "experience"], ["On Campus", "on-campus"], ["Projects", "projects"]];
  const [activeCategory, setActiveCategory] = useState("Home");
  const cards = 
      subjects.map((subject) => {
          const included = activeCategory === subject[0];
          return (
            <a href={"#" + subject[1]}>
              <Card
                  variant="list"
                  sx={{
                  backgroundColor: included ? theme.colors.primary : theme.colors.background,
                  color: included ? theme.colors.background : theme.colors.black ,
                  alignContent: 'right',
                  wordWrap: "break-word",
                  "&:hover": {
                      bg: included ? theme.colors.primary : theme.colors.seocndary,
                  },
                  }}
                  onClick={() => {
                      setActiveCategory(subject[0]);
                  }}
                  >
                  <div>
                    {subject[0]}
                  </div>
              </Card>
            </a>
          );
      });
  return(
    <Container>
    <div>
      <Grid gap={3} columns={[1, 1, "1fr 3fr", "1fr 4fr"]}>
          <div
            sx={{ display: ["none", "initial", "initial", "initial"], mt: "40px" }}
          >
            <div className="content-desktop">
              <br></br>
              <div className="nav-items">
                {cards}
              </div>
            </div>
          </div>
          <div className="main">
            <div id="home">
              <Grid gap={4} columns={[1, "1fr 1fr", "1fr 1fr", "3fr 7fr"]}>
                <div className="headshot">
                <br></br>
                  <Image 
                    src={headshot}
                    sx={{
                        //borderRadius: "50%",
                    }}
                  />
                </div>
                <div id="bio-box">
                  <Styled.h1>
                    Sahana Srinivasan
                  </Styled.h1>
                  <Typography className={classes.text}>
                  Hi! I'm a junior at Harvard studying computer science and government. I'm interested in product management, tech policy, machine learning research, and software engineering. I manage the Harvard Open Data Project, teach theoretical CS, research fairness in machine learning, and bake cookies. 
                  <br></br>
                  <br></br>
                  You can find me on&nbsp;
                    <a id="social-link" href="https://www.github.com/sahana-srinivasan">GitHub</a>,&nbsp;
                    <a id="social-link" href="https://www.linkedin.com/in/sahana-srinivasan-009">Linkedin</a>, and the&nbsp;
                    <a id="social-link" href="https://hodp.org/people/sahana-srinivasan">HODP website&nbsp;</a>
                    (in the staff directory I built!)
                  </Typography>
                  <br></br>
                </div>
              </Grid>
            </div>
            <div id="experience">
              <br></br>
              <Styled.h2>
                Work Experience
              </Styled.h2>
              <Divider />
              <div>
                <Accordion/>
              </div>
              <br></br>
              
            </div>
            <div id="on-campus">
            <br></br>
              <Styled.h2>
                On Campus
              </Styled.h2>
              <Divider />
              <Campus/>
            </div>
            <div id="projects">
            <br></br>
              <Styled.h2>
                Projects
              </Styled.h2>
              <Divider />
              <Projects/>
            </div>
          </div>
          <div className="buffer"></div>

      </Grid>
    </div>
    </Container>
  );
}

export default Profile;