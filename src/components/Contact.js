import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import backgroundbg from '../assets/backgroundbg.png';
import { Link } from 'react-router-dom';

import right from '../assets/right-red.png';
import howBackground from '../assets/background3.png';
import howBackground2 from '../assets/background4.png';
import megaphone from '../assets/megaphone.png';
import mail from '../assets/mail.png';
import whatsapp from '../assets/whatsapp.png';
import AnimatedText from 'react-animated-text-content';

const useStyle = makeStyles(theme => ({


  buttonContainer: {
    marginTop: "1em"
  },
  redBackground: {
    backgroundImage: `url(${right})`,
    alignItems: "flex-end",
    backgroundSize: "cover",
    height: "35em",
    width: "35em",
    textAlign: 'right',
    alignSelf: 'flex-end',
    [theme.breakpoints.down("sm")]: {
      height: "28em",
      width: "28em",
    }
  },
  whatsapp: {
    height: "8em",
    width: "8em",
    marginTop: "1em",
    marginLeft: "3em"
  },
  mail: {
    height: "8em",
    width: "8em",
    marginTop: "1em"
  },
}))

export default function LandingPage(props) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction='column'>

      
      <Grid item>{/*---Lets talk---*/}
        <Grid container direction='row' justify="flex-end" style={{ marginTop:  "4em", marginBottom:"5em"}}>
          <Grid item style={{ margin: "auto" }}>
            <Typography variant="h2" align='center'>
            <AnimatedText
              type="words"
              animationType="float"
            >
               Let's Talk!
            </AnimatedText>
             
            </Typography>
            <Typography variant="subtitle2" align='center'>
              We are here for you  <br /> for any question or request.
            </Typography>
            <Grid direction='row' container justify="center" className={classes.buttonContainer}>
              <Grid item component={"a"} href="https://play.google.com/store/apps" rel="noopener noreferrer" target="_blank">
                <img className={classes.mail} src={mail} alt="lightbulb" />
              </Grid>
              <Grid item component={"a"} href="https://play.google.com/store/apps" rel="noopener noreferrer" target="_blank">
                <img className={classes.whatsapp} src={whatsapp} alt="lightbulb" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{marginTop: matchesXS? "10em": "3em"}}>
            <img className={classes.redBackground} src={megaphone} alt="lightbulb" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}