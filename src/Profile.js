import React from 'react';
import { Card, Grid, Image, Styled, Container } from "theme-ui";
import { useState } from "react";
import theme from './theme';
import './Profile.css';
import headshot from './headshot.jpg'
import Accordion from './Accordion.js'

function Profile(props) {
  const subjects = [["Home", "home"], ["Experience", "experience"], ["On Campus", "on-campus"], ["Projects", "projects"]];
  const [activeCategory, setActiveCategory] = useState("Home");
  const cards = 
      subjects.map((subject) => {
          const included = activeCategory === subject[0];
          return (
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
                    <a href={"#" + subject[1]}>{subject[0]}</a>
                  </div>
              </Card>
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
            <br></br>
            <br></br>
            <div id="home">
              <Styled.h1>
                Sahana Srinivasan
               </Styled.h1>
              <Grid gap={4} columns={[1, "1fr 1fr", "1fr 1fr", "3fr 7fr"]}>
                <div className="headshot">
                <Image 
                  src={headshot}
                  sx={{
                      //borderRadius: "50%",
                  }}
              />
                </div>
                <div id="bio-box">
                  Hi, I'm Sahana! a junior at Harvard studying computer science and government. I'm intersted in product management, tech policy, machine learning research, and software engineering. I manage the Harvard Open Data Project, teach theoretical CS, research fairness in machine learning, and bake cookies. 
                </div>
              </Grid>
            </div>
            <div id="experience">
              <br></br>
              <Styled.h2>
                Work Experience
              </Styled.h2>
              <Accordion/>
              <br></br>
              
            </div>
            <div id="on-campus">
              On Campus
            </div>
            <div id="projects">
              Projects
            </div>
          </div>
          <div className="buffer"></div>

      </Grid>
    </div>
    </Container>
  );
}

export default Profile;