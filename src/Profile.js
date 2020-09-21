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
  navHighlight: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: "600",
    color: 'white',
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

function Profile(props) {

  const classes = useStyles();

  
  const subjects = [["Home", "home"], ["Experience", "experience"], ["On Campus", "on-campus"], ["Projects", "projects"], ["Interests", "interests"]];
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
                    <Typography className={included ? classes.navHighlight : classes.position }>
                      {subject[0]}
                    </Typography>
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
                  />
                </div>
                <div id="bio-box">
                  <br></br>
                  <Typography className={classes.names}>
                    Sahana Srinivasan
                  </Typography>

                  <Typography className={classes.text}>
                  Hi! I'm a junior at Harvard studying computer science and government. I'm interested in product management, tech policy, machine learning research, and software engineering. 
                  <br></br>
                  <br></br>
                  I manage the Harvard Open Data Project, teach theoretical CS, research fairness in machine learning, and bake cookies. 
                  <br></br>
                  <br></br>
                  You can find me on&nbsp;
                    <a id="social-link" href="https://www.github.com/sahana-srinivasan">GitHub</a>,&nbsp;
                    <a id="social-link" href="https://www.linkedin.com/in/sahana-srinivasan-009">Linkedin</a>, and the&nbsp;
                    <a id="social-link" href="https://hodp.org/people/sahana-srinivasan">HODP website</a>.
                  </Typography>
                  <br></br>
                </div>
              </Grid>
            </div>
            <div id="experience">
              <br></br>
              <br></br>
              <div className="section-title">
                <Typography className={classes.section}>
                  Work Experience
                </Typography>
              </div>
              <br></br>
              <div id="experience-content">
                <Accordion/>
              </div>
              <br></br>
              <br></br>
            </div>
            <div id="on-campus">
            <br></br>
              <div className="section-title">
                <Typography className={classes.section}>
                  On Campus
                </Typography>
              </div>
              <br></br>
              <Campus/>
              <br></br>
              <br></br>
            </div>
            <div id="projects">
            <br></br>
              <div className="section-title">
                <Typography className={classes.section}>
                  Projects
                </Typography>
              </div>
              <br></br>
              <Projects/>
              <br></br>
              <br></br>
            </div>
            <div id="interests">
              <div className="section-title">
                <Typography className={classes.section}>
                  Interests
                </Typography>
              </div>
              <br></br>
              <Typography className={classes.position}>
                Here are some other things I enjoy! Feel free to reach out over them, particularly if you have a favorite cookie recipe.
                <ul>
                  <li>Baking chocolate chip cookies</li>
                  <li>Playing online pictionary, codenames, Set, and Hanabi</li>
                  <li>Writing short fiction</li>
                  <li>Open data and journalism</li>
                  <li>Puzzles</li> 
                  <li>Stand-up comedy</li>
                  <li>The NYT mini crossword</li>
                </ul>
                <br></br>
                <br></br>
              </Typography>
            </div>
          </div>
          <div className="buffer"></div>
      </Grid>
    </div>
    </Container>
  );
}

export default Profile;