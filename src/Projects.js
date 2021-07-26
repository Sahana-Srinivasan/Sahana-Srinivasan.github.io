import React from 'react';
import { Grid, Image, Card, Text, Container } from 'theme-ui';
import './Profile.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import hodp2 from './hodp-website.png'
import vm from './vm-site.png'
import research from './research.png'
import hodp3 from './hodp-article.png'
import cm from './covid-mapper.png'
import wicsportal from './wics-portal.png'
//import journ from './journ.png'
import thissite from './this-site.png'
import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
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
  tech: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: "400",
    color: 'black',
  },
  links: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: "400",
    color: 'black',
  },
  section: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: "600",
    color: 'black',
  }
}));

export default function Projects() {
  const classes = useStyles();
  
  return (
    <Container>
        <div>
          <Navbar/>
          <div className="main">
              <div id="projects">
                <br></br>
                <br></br>
                <Grid gap={1} columns={[1, "1fr 1fr"]}>
                <Card
                    sx={{
                      maxWidth: 500,
                    }}>
                    <a href="https://the-voting-methods.web.app"><Image src={wicsportal} /></a>
                    <Text>
                      <div className="project-header">
                        <Typography className={classes.heading} id="project-name">
                          <a href="https://the-voting-methods.web.app">Member Portal for Harvard Women in Computer Science&nbsp;&nbsp;</a>
                        </Typography>
                        <Typography className={classes.date} id="project-date">
                          2021
                        </Typography>
                      </div>
                      <Typography className={classes.date}>
                        Defined requirements for, designed, and built searchable calendar, member directory, and announcements feature
                      </Typography>
                      <Typography className={classes.tech}>
                      <button className="project-tech">
                        React
                      </button>&nbsp;
                      <button className="project-tech">
                        Firebase
                      </button>
                      </Typography>
                      <Typography className={classes.links}>
                        <a className="project-link">Source code private for security</a>&nbsp;
                        <a className="project-link">Site internal to club</a>
                      </Typography>
                    </Text>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 500,
                    }}>
                    <a href="https://the-voting-methods.web.app"><Image src={vm} /></a>
                    <Text>
                      <div className="project-header">
                        <Typography className={classes.heading} id="project-name">
                          <a href="https://the-voting-methods.web.app">Voting Methods Simulator&nbsp;&nbsp;</a>
                        </Typography>
                        <Typography className={classes.date} id="project-date">
                          2020
                        </Typography>
                      </div>
                      <Typography className={classes.date}>
                        Visualizes effects of voting methods on election outomes and interactively explains types of voting methods. Presented to 10 political strategists and activists. Site used for educational purposes by reform groups in 2020 election.  
                      </Typography>
                      <Typography className={classes.tech}>
                      <button className="project-tech">
                        React
                      </button>&nbsp;
                      <button className="project-tech">
                        D3
                      </button>
                      </Typography>
                      <Typography className={classes.links}>
                        <a className="project-link" href="https://the-voting-methods.web.app">Live site</a>&nbsp;
                        <a className="project-link" href="https://github.com/mwjkwan/voting-methods">Source code</a>
                      </Typography>
                    </Text>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 500,
                    }}>
                    <a href="https://github.com/mattweidman/covid-mapper"><Image src={cm}/></a>
                    <Text>
                      <div className="project-header">
                        <Typography className={classes.heading} id="project-name">
                          <a href="https://github.com/mattweidman/covid-mapper">Covid-19 Map Generator&nbsp;&nbsp;</a>
                        </Typography>
                        <Typography className={classes.date} id="project-date">
                          2020
                        </Typography>
                      </div>
                      <Typography className={classes.date}>
                          Creates custom COVID-19 data visualizations in D3 from user-inputted mathematical expressions. Produces time graphs and maps, and parses terms and math syntax natively. Voted Top 3 in category and org in Microsoft’s 2020 Global Hackathon.
                      </Typography>
                      <Typography className={classes.tech}>
                        <button className="project-tech">
                          Javascript
                        </button>&nbsp;
                        <button className="project-tech">
                          D3
                        </button>
                      </Typography>
                      <Typography className={classes.links}>
                        <a className="project-link" href="https://github.com/mattweidman/covid-mapper">Source code</a>&nbsp;
                        <a className="project-link">Live site in progress</a>
                      </Typography>
                    </Text>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 500,
                    }}>
                    <a href="https://hodp.org"><Image src={hodp2} /></a>
                    <Text>
                      <div className="project-header">
                        <Typography className={classes.heading} id="project-name">
                          <a href="https://hodp.org">Harvard Open Data Project Website&nbsp;&nbsp;</a>
                        </Typography>
                        <Typography className={classes.date} id="project-date">
                          2020
                        </Typography>
                      </div>
                      <Typography className={classes.date}>
                        Site that natively hosts projects and a staff directory. Helped scope project features; evaluated headless CMSes; and implemented staff directory, profiles, and bios from scratch.
                      </Typography>
                      <Typography className={classes.tech}>
                        <button className="project-tech">
                        React
                        </button>&nbsp;
                        <button className="project-tech">
                        GraphQL
                        </button>&nbsp;
                        <button className="project-tech">
                        Sanity CMS
                        </button>
                      </Typography>
                      <Typography className={classes.links}>
                        <a className="project-link" href="https://hodp.org/people">Live site</a>&nbsp;
                        <a className="project-link" href="https://github.com/HarvardOpenData/HarvardOpenData.github.io">Source code</a>
                      </Typography>
                    </Text>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 500,
                    }}>
                    <a href="https://github.com/Sahana-Srinivasan/mri-ventricle-segmentation"><Image src={research} /></a>
                    <Text>
                      <div className="project-header">
                        <Typography className={classes.heading} id="project-name">
                          <a href="https://github.com/Sahana-Srinivasan/mri-ventricle-segmentation">Image Segmentation Research&nbsp;&nbsp;</a>
                        </Typography>
                        <Typography className={classes.date} id="project-date">
                          2016-2017
                        </Typography>
                      </div>
                      <Typography className={classes.date}>
                        Used deep learning to develop novel pipeline for segmeneting lateral ventricles in 3D brain MRIs and potentially melanomatous skin lesions in lay images. Wrote two academic papers. Poster at AMIA 2018. 2nd place in regional science fair. Siemens Competition semifinalist (top 300 in nation).
                      </Typography>
                      <Typography className={classes.tech}>
                          <button className="project-tech">
                          Python
                          </button>&nbsp;
                          <button className="project-tech">
                          Keras
                          </button>&nbsp;
                          <button className="project-tech">
                          Scikit-learn
                          </button>&nbsp;
                          <button className="project-tech">
                          Scikit-image
                          </button>
                      </Typography> 
                      <Typography className={classes.links}>
                        <a className="project-link" href="https://github.com/aarun/mel">Skin lesion source code</a>&nbsp;
                        <a className="project-link" href="https://github.com/Sahana-Srinivasan/mri-ventricle-segmentation">MRI source code</a>
                      </Typography>
                    </Text>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 500,
                    }}>
                      <a href="https://www.hodp.org/people/sahana-srinivasan/"><Image src={hodp3} /></a>
                    <Text>
                      <div className="project-header">
                        <Typography className={classes.heading} id="project-name">
                          <a href="https://www.hodp.org/people/sahana-srinivasan/">Data Journalism Articles&nbsp;&nbsp;</a>
                        </Typography>
                        <Typography className={classes.date} id="project-date">
                          2019-2020
                        </Typography>
                      </div>
                      <Typography className={classes.date}>
                        Reported on <a id="social-link" href="https://www.hodp.org/project/what-will-harvard-students-do-this-fall">student needs </a>
                        during COVID-19, campus 
                        <a id="social-link" href="https://www.hodp.org/project/harvard-student-opinion-on-the-second-democratic-debate"> political opinion, </a>
                        and the <a id="social-link" href="https://www.hodp.org/project/what-s-almost-left-unsaid-an-analysis-of-harvard-confessions">average sentiment </a>of our school confessions page. Re-reported by the 
                        <a id="social-link" href="https://www.thecrimson.com/article/2020/7/14/hodp-fall-semester-survey/"> Crimson </a> and received 10k+ views.
                      </Typography>
                      <Typography className={classes.tech}>
                        <button className="project-tech">
                        R
                        </button>&nbsp;
                        <button className="project-tech">
                        Python
                        </button>&nbsp;
                        <button className="project-tech">
                        ggplot
                        </button>
                      </Typography>
                      <Typography className={classes.links}>
                        <a className="project-link" href="https://www.hodp.org/people/sahana-srinivasan/">Articles</a>&nbsp;
                        <a className="project-link" href="https://github.com/TheKeveloper/HODP-Fall-2020-Analysis">Analysis source code</a>
                      </Typography>
                    </Text>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 500,
                    }}>
                    <a href="https://github.com/Sahana-Srinivasan/Sahana-Srinivasan.github.io"><Image src={thissite} /></a>
                    <Text>
                      <div className="project-header">
                        <Typography className={classes.heading} id="project-name">
                          <a href="https://github.com/Sahana-Srinivasan/Sahana-Srinivasan.github.io">This Personal Website&nbsp;&nbsp;</a>
                        </Typography>
                        <Typography className={classes.date} id="project-date">
                          2020
                        </Typography>
                      </div>
                      <Typography className={classes.date}>
                        Built from scratch.
                      </Typography>
                      <Typography className={classes.tech}>
                        <button className="project-tech">
                        React
                        </button>
                      </Typography>
                      <Typography className={classes.links}>
                        <a className="project-link" href="https://github.com/Sahana-Srinivasan/Sahana-Srinivasan.github.io">Source code</a>
                      </Typography>
                    </Text>
                  </Card>
                </Grid>
              </div>
            </div>
          </div>
        </Container>
  );
}