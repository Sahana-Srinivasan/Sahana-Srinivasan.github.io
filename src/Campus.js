import React from 'react';
import { Grid, Image } from 'theme-ui';
import './Profile.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import wics from './wics.png'
import hodp from './hodp.png'
import hccg from './hccg.png'



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
  }
}));

export default function Campus() {
  const classes = useStyles();
  
  return (

    <div>
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
            I run all things content for HODP, an interdisciplinary data journalism publication. This usually involves working across all our teams and with all our members to manage, edit, and publish content; create data visualizations; teach bootcamps; and launch new initiatives.
          </Typography>
        </div>
       </Grid>
       <br></br>
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
            I lead the resources project, creating and collecting career, academic, and advocacy resources for students to navigate CS at Harvard and beyond.
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
            I consulted for non-profits through HCCG for two years. I worked on everything from imputing data for an international service organization to analyzing the role of the private sector in child development.
          </Typography>
        </div>
       </Grid>
    </div>
  );
}