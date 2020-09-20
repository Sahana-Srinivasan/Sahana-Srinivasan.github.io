import React from 'react';
import { Grid, Image, Card, Text } from 'theme-ui';
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

export default function Projects() {
  const classes = useStyles();
  
  return (

    <div>
       <br></br>
       <Grid gap={4} columns={[1, "1fr 1fr", "1fr 1fr 1fr"]}>
        <Card
          sx={{
            maxWidth: 256,
          }}>
          <Image src={wics} />
          <Text>
            Card
          </Text>
        </Card>
        <Card
          sx={{
            maxWidth: 256,
          }}>
          <Image src={hodp} />
          <Text>
            Card
          </Text>
        </Card>
        <Card
          sx={{
            maxWidth: 256,
          }}>
          <Image src={hccg} />
          <Text>
            Card
          </Text>
        </Card>
      </Grid>
    </div>
  );
}