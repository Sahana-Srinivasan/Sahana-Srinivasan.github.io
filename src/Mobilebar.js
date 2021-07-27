import { Card, Grid, Box, Flex } from "theme-ui";
import {Link, useLocation} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import theme from './theme';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/** @jsx jsx */ /** @jsxRuntime classic */ 
import { jsx } from "theme-ui";

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

function Mobilebar(props) { 
  const location = useLocation()
  const history = useHistory()

  const classes = useStyles();


  function handleChange(event) {
    props.onChange(false);
  }

  const subjects = [["Home", "home"], ["Experience", "experience"], ["Campus", "campus"], ["Projects", "projects"], ["Interests", "interests"]];
  const navItems = subjects.map((subject) => {
        const current = (location.pathname.replace('/','') === subject[1] || 
                        (subject[1] === 'home' && location.pathname === '/'));
        return (
          <Link 
            to={subject[1]} onClick={handleChange}
          > 
            <Card
                sx={{
                  backgroundColor: current ? 'primary' : 'white',
                  color: current ? 'white' : 'primary',
                  alignContent: 'center',
                  wordWrap: "break-word",
                  padding: 2,
                  borderRadius:'32px 32px 32px 32px',
                  marginLeft: 2,
                  marginRight: 2,
                  maxWidth:'100%',
                }}
                >
                <div>
                  <Typography className={current ? classes.navHighlight : classes.navRegular }>
                      {subject[0]}
                  </Typography>
                </div>
            </Card>
          </Link>
        );
      });
  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        <Box sx={{
          }}>
          <div>
            <Grid>
                <div>
                  <div>
                    <br></br>
                    <div sx={{
                      position: 'sticky',
                      textAlign: 'center',
                      top: '100px',
                      marginTop: '40px',
                      borderRadius: '32px 32px 32px 32px',
                      maxWidth: '70%',
                      marginLeft: '15%',
                    }}>
                      {navItems}
                    </div>
                  </div>
                </div>
            </Grid>
          </div>
          
        </Box>
      </div>
    </div>
  );
}

export default Mobilebar;