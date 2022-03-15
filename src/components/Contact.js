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
import cash from '../assets/green.jpg';
import orange from '../assets/orange.jpg';
import blue from '../assets/blue.jpg';
import red from '../assets/red.jpg';
import purple from '../assets/purple.jpg';
import pink from '../assets/pink.jpg';
import yellow from '../assets/yellow.jpg';
import gray from '../assets/gray.png';
import report from '../assets/report.png';
import addwork from '../assets/addwork.png';
import config from '../assets/config.png';
import hourglass from '../assets/hourglass.png';
import phones from '../assets/phones.png';
import right from '../assets/right-red.png';
import howBackground from '../assets/background3.png';
import howBackground2 from '../assets/background4.png';
import megaphone from '../assets/megaphone.png';
import mail from '../assets/mail.png';
import whatsapp from '../assets/whatsapp.png';
import googleplay from '../assets/googleplay.png';
import FaceIcon from '@mui/icons-material/Face';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NfcIcon from '@mui/icons-material/Nfc';
import WifiIcon from '@mui/icons-material/Wifi';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import StyleIcon from '@mui/icons-material/Style';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AnimatedText from 'react-animated-text-content';

const useStyle = makeStyles(theme => ({

  downloadButton: {
    ...theme.typography.download,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145
  },
  specialtext: {
    fontFamily: "Pacifico",
    fontSize: "3rem",
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: "1em"
  },
  howContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
      marginTop: "0em",
    }
  },
  technologiesCard: {
    padding: 0,
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    height: "10em",
    width: "10em",
  },
  icon: {
    position: "absolute",
    height: "8em",
    width: "8em",
  },
  googleplayImage: {
    height: "5em",
    width: "14em",
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
  blueBackground: {
    backgroundImage: `url(${backgroundbg})`,
    backgroundSize: "cover",
    height: "33em",
    width: "40em",

    [theme.breakpoints.down("sm")]: {
      marginRight: "0em",
      height: "25em",
      width: "30em",
    }
  },
  howBackground: {
    backgroundImage: `url(${howBackground})`,
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  howBackground2: {
    backgroundImage: `url(${howBackground2})`,
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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
  howIcon: {
    position: "absolute",
    height: "10em",
    width: "10em",
    [theme.breakpoints.down("xs")]: {
      position: "unset"
    },
    [theme.breakpoints.down("sm")]: {
      position: "unset"
    }
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