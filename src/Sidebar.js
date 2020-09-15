import React from 'react';
import { Card, Grid, Image, Container } from "theme-ui";
import { useState } from "react";
import theme from './theme';
import './Profile.css';
import headshot from './headshot.jpg';

function Sidebar() {
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
    <Container>
      <div className="content-desktop">
        <div className="nav-items">
          {cards}
        </div>
      </div>
    </Container>
  );
}

export default Sidebar;