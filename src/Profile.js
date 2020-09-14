import React from 'react';
import { Card, Grid} from "theme-ui";
import { useState } from "react";
import theme from './theme';
import './Profile.css';

function Profile(props) {
  const subjects = [["Home", "home"], ["Experience", "experience"], ["On Campus", "on-campus"], ["Projects", "projects"], ["Contact", "contact"]];
  const [activeCategory, setActiveCategory] = useState("Projects");
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
    <div>
      <Grid gap={5} columns={[1, "2fr 4fr", "1fr 4fr"]}>
          <div className="content-desktop">
            <br></br>
            <div className="nav-items">
              {cards}
            </div>
          </div>
          <div>
            <br></br>
            <br></br>
            <div id="home">
              Home
              <Grid gap={4} columns={[1, "2fr 3fr", "3fr 7fr"]}>
                <div>
                  hi image
                </div>
                <div>
                  hi description
                </div>
              </Grid>
            </div>
            <div id="experience">
              Experience
            </div>
            <div id="on-campus">
              On Campus
            </div>
            <div id="projects">
              Projects
            </div>
            <div id="contact">
              Contact
            </div>
          </div>

      </Grid>
    </div>
  );
}

export default Profile;