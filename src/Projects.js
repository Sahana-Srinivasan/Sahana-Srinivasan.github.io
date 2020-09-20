import React from 'react';
import { Grid, Image, Card, Text } from 'theme-ui';
import './Profile.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import hodp2 from './hodp-website.png'
import vm from './vm-site.png'
import research from './research.png'
import hodp3 from './hodp-article.png'
import cm from './covid-mapper.png'
import journ from './journ.png'

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
       <Grid gap={1} columns={[1, "1fr 1fr"]}>
        <Card
          sx={{
            maxWidth: 500,
          }}>
          <Image src={vm} />
          <Text>
            Card
          </Text>
        </Card>
        <Card
          sx={{
            maxWidth: 500,
          }}>
          <Image src={cm} />
          <Text>
            Card
          </Text>
        </Card>
        <Card
          sx={{
            maxWidth: 500,
          }}>
          <Image src={hodp2} />
          <Text>
            Card
          </Text>
        </Card>
        <Card
          sx={{
            maxWidth: 500,
          }}>
          <Image src={research} />
          <Text>
            Card
          </Text>
        </Card>
        <Card
          sx={{
            maxWidth: 500,
          }}>
          <Image src={hodp3} />
          <Text>
            Card
          </Text>
        </Card>
        <Card
          sx={{
            maxWidth: 500,
          }}>
          <Image src={journ} />
          <Text>
            Card
          </Text>
        </Card>
      </Grid>
    </div>
  );
}