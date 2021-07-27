import React from 'react';
import { Grid, Image, Container } from 'theme-ui';
import './Profile.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import wics from './wics.png'
import hodp from './hodp.png'
import hccg from './hccg.png'
import Nav from './Nav'

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
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,

    color: 'black',
  },
  date: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightLight,
    color: 'black',
  },
  section: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: "600",
    color: 'black',
  }
}));

export default function Campus() {
  const classes = useStyles();
  
  return (
  <Container>
        <div>
          <Nav/>
          <div className="main">
            <div id="on-campus">
                <div className="section-title">
                  <Typography className={classes.section}>
                    On Campus
                  </Typography>
                </div>
                <br></br>
                <div>
                    <br></br>
                    <Grid gap={4} columns={[1, "1fr 1fr", "1fr 1fr", "3fr 7fr"]}>
                      <div>
                        <div id="club-logo">
                          <a href="https://harvardwics.com">
                            <Image src={wics}/>
                          </a>
                        </div>
                        <div id="club-space">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div id="club-name">
                          <Typography className={classes.heading}><a href="https://harvardwics.com">Harvard Women in CS</a></Typography>
                          <Typography className={classes.date}>
                            Project Manager
                          </Typography>
                        </div>
                      </div>
                      <div>
                        <Typography className={classes.date}>
                          I lead the resources project, creating and collecting career, academic, and advocacy resources for students to navigate CS at Harvard and beyond. In particular, I've devloped guides for getting involved in civic tech, product management, and social impact work. I'm also leading a team to build our first-ever member/alumni portal, an especially exciting challenge since we have over 300 members to support. Our club has so many events, opportunities, and resources, but no organized way to access them or to network. We tackled the problem by first interviewing and surveying members, and then undergoing a full product development process, including feature prioritization, Figma mocks, from-scratch implementation, and user testing.
                        </Typography>
                      </div>
                    </Grid>
                    <br></br>
                    <br></br>
                    <Grid gap={4} columns={[1, "1fr 1fr", "1fr 1fr", "3fr 7fr"]}>
                      <div>
                        <div id="club-logo">
                          <a href="https://hodp.org">
                            <Image src={hodp}/>
                          </a>
                        </div>
                        <div id="club-space">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div id="club-name">
                          <Typography className={classes.heading}><a href="https://hodp.org">Harvard Open Data Project</a></Typography>
                          <Typography className={classes.date}>
                            Managing Editor
                          </Typography>
                        </div>
                      </div>
                      <div>
                        <Typography className={classes.date}>
                          I ran all things content for HODP, an interdisciplinary data journalism publication. I worked cross-functionally across our 4 sub-teams to manage, edit, and publish content; create data visualizations; teach bootcamps; and launch new initiatives. I'm most proud of streamlining our publishing process to make writing with us easier and making our bootcamp and membership structure more inclusive.
                        </Typography>
                      </div>
                    </Grid>
                    <br></br>
                    <br></br>
                    <Grid gap={4} columns={[1, "1fr 1fr", "1fr 1fr", "3fr 7fr"]}>
                      <div>
                        <Grid gap={4} columns={[1]}>
                          
                        </Grid>
                        <div id="club-logo">
                          <a href="https://harvardconsulting.org">
                            <Image src={hccg}/>
                          </a>
                        </div>
                        <div id="club-space">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div id="club-name">
                          <Typography className={classes.heading}><a href="https://harvardconsulting.org">Harvard Consulting Group</a></Typography>
                          <Typography className={classes.date}>
                            Case Team Leader
                          </Typography>
                        </div>
                      </div>
                      <div>
                        <Typography className={classes.date}>
                          I consulted for non-profits through HCCG for two years. I worked on everything from imputing data for an international service organization to analyzing how the private sector could better support children's rights.
                        </Typography>
                      </div>
                    </Grid>
                  </div>
                <br></br>
                <br></br>
              </div>
          </div>
        </div>
      </Container>
  );
}