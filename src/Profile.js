import React from 'react';
import { Grid, Image, Container } from "theme-ui";
import './Profile.css';
import headshot from './thesis_cropped.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
    fontSize: theme.typography.pxToRem(33),
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

  
  return(
    <Container>
    <div>
      {/*<Grid gap={5} columns={[1, 1, "1fr 3fr", "1fr 4fr"]}>*/}

          <Nav/>
          <div className="main">
            <div id="home">
              <Grid gap={5} columns={[1, "1fr 1fr", "1fr 1fr", "3fr 7fr"]}>
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
                  <br></br>
                  <Typography className={classes.text}>
                  Hi! I'm passionate about building safe and ethical technology that helps people, leveraging policy and the product development process.
                  <br></br>
                  <br></br>
                  I'm currently a product manager at <a id="social-link" href="https://www.schmidtfutures.org/">Schmidt Futures</a> in the <a id="social-link" href="https://www.schmidtfutures.org/our-work-old/technologists-for-global-transformation/">Technologists for Global Transformation</a> program, a rotational fellowship for technologists working in social impact. I formerly worked at Microsoft and graduated from Harvard with a bachelor's in computer science and government, where I focused on fairness and privacy.
                  <br></br>
                  <br></br>
                  Find me on&nbsp;
                    <a id="social-link" href="https://www.github.com/sahana-srinivasan">GitHub</a> and&nbsp;
                    <a id="social-link" href="https://www.linkedin.com/in/sahana-srinivasan-009">Linkedin</a>, or by&nbsp;
                    <a id="social-link" href="mailto:sahanas009@gmail.com">email</a>.
                  </Typography>
                  <br></br>
                  <br></br>
                </div>
              </Grid>
            </div>
          </div>
          <div className="buffer"></div>
      {/*</Grid>*/}
    </div>
    </Container>
  );
}

export default Profile;