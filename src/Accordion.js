import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container } from "theme-ui";
import './Profile.css'
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

const StyledDetails = withStyles({
  root: {
    padding: '0px 16px 0px',
  }
})(AccordionDetails);

const StyledAccordion = withStyles({
  root: {
    background: '#ffffff',
    boxShadow: '0 0 0 0',
  },
  label: {
    textTransform: 'capitalize',
  },
  heading: {
    fontSize: '24',
  },
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  '&$expanded': {
    margin: 'auto',
  },
  expanded: {},
})(Accordion);

const NewAccordionSummary = withStyles({
  root: {
    marginBottom: -2,
    minHeight: 50,
    '&$expanded': {
      minHeight: 50,
    },
  },
  content: {
    '&$expanded': {
      margin: '10px 0',
    },
  },
  expanded: {},
})(AccordionSummary);

export default function SimpleAccordion() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container>
      <div>
        <Nav/>
        <div className="main">
          <div id="experience">
            <div className="section-title">
              <Typography className={classes.section}>
                Work Experience
              </Typography>
            </div>
            <br></br>
            <div id="experience-content">
            <div className={classes.root}>
            <StyledAccordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              
              <NewAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Microsoft </Typography>&nbsp;&nbsp;<Typography className={classes.position}> Product Management Intern</Typography>
              </NewAccordionSummary>
              <div id="work-details">
                <StyledDetails>
                  <Typography className={classes.date}>
                        May 2021 – Present
                        <br></br>
                        <ul>
                          <li>Developing a new feature in Family Safety: analyzed live app feedback, ran 8-user study, translated customer pain points into requirements, and designed and user-tested UX mocks</li>
                          <li>Led 3 interns to launch new feature: collaborated across 5 stakeholding teams to define project requirements, resolve 2 previously-uncovered UX flaws, and run division-wide feature testing</li>
                          <li>My biggest learnings and success moments: the first time I successfully pitched a feature design, the first time I aligned stakeholders who initially completely disagreed on a decision, when I discovered a UX bug </li>
                        </ul>
                  </Typography>
                </StyledDetails>
              </div>
            </StyledAccordion>
            <StyledAccordion>
              
              <NewAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Microsoft </Typography>&nbsp;&nbsp;<Typography className={classes.position}> Product Management and Software Engineering Intern (Explore)</Typography>
              </NewAccordionSummary>
              <div id="work-details">
                <StyledDetails>
                  <Typography className={classes.date}>
                        May – Aug 2020
                        <br></br>
                        <ul>
                          <li>Designed and implemented feature that manages employee devices in enterprise product using REST APIs, C#, and .NET</li>
                          <li>Incorporated customer feedback and collaborated across 3 stake-holding teams with contrasting asks to gather and prioritize requirements for feature being shipped worldwide in 2021</li>
                          <li>Developed 20 user stories clarifying points of customer confusion, leading team to update longstanding UI</li>
                          <li>Optimized database design to improve load balancing and query time from previous product</li>
                          <li>Selected to present product specification at division-wide meeting to 200 program managers</li>
                        </ul>
                  </Typography>
                </StyledDetails>
              </div>
            </StyledAccordion>
            <StyledAccordion>
              <NewAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className={classes.heading}>Harvard University</Typography>&nbsp;&nbsp;<Typography className={classes.position}> Teaching Fellow</Typography>
              </NewAccordionSummary>
              <div id="work-details">
              <StyledDetails>
                <Typography className={classes.date}>
                    Aug – Dec 2020
                    <br></br>
                    <ul>
                      <li>Taught recitation to 20 students and hosted office hours for up to 50 students</li>
                      <li>Create supplementary lecture videos and practice problems explaning fundamental concepts of theoretical computer science, including uncomputability, algorithmic complexity, probabilistic computing, and reductions</li>
                    </ul>
                </Typography>
              </StyledDetails>
              </div>
            </StyledAccordion>
            <StyledAccordion>
              <NewAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography className={classes.heading}>Hiro Systems </Typography>&nbsp;&nbsp;<Typography className={classes.position}> Software Engineering Intern</Typography>
              </NewAccordionSummary>
              <div id="work-details">
              <StyledDetails>
                <Typography className={classes.date}>
                    May – Aug 2019
                    <br></br>
                    <ul>
                      <li>Designed and built 4 tutorial webapps used by over 250 developers to learn Blockstack's developer tools </li>
                      <li>Tutorial webapp is now the first step in Blockstack's developer onboarding process</li>
                      <li>Minified and updated existing app codebase; wrote 40+ pages of product documentation</li>
                    </ul>
                </Typography>
              </StyledDetails>
              </div>
            </StyledAccordion>
          </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
      </div>
    </Container>
  );
}