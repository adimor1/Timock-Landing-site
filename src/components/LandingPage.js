import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import animationData from '../animations/landinganimation/data'
import { Button } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import { Typography } from '@material-ui/core';
import customSoftwareIcon from "../assets/Custom Software Icon.svg"
import { useMediaQuery } from '@material-ui/core';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import revolutionBackground from '../assets/background2.svg';
import infoBackground from '../assets/backgroundbg.png';
import CallToAction from './ui/CallToAction';
import { Link } from 'react-router-dom';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/green.jpg';
import orange from '../assets/orange.jpg';
import blue from '../assets/blue.jpg';
import red from '../assets/red.jpg';
import purple from '../assets/purple.jpg';
import pink from '../assets/pink.jpg';
import yellow from '../assets/yellow.jpg';
import stopwatch from '../assets/stopwatch.svg';
import website from '../assets/phonecomputer.png';
import googleplay from '../assets/googleplay.png';
import FaceIcon from '@mui/icons-material/Face';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NfcIcon from '@mui/icons-material/Nfc';
import WifiIcon from '@mui/icons-material/Wifi';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import StyleIcon from '@mui/icons-material/Style';
import { animateText, samples } from "react-punch";

const useStyle = makeStyles(theme => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    mraginLest: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
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
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145
  },

  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  specialtext: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  subtitle: {
    marginBottom: "1em"
  },

  servicesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },
  revolutionBackground: {

    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "5em",
    width: "5em"
  },
  revolutionCard: {

    padding: 0,
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    height: "12em",
    width: "12em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingRight: 0,
      paddingLeft: 0,
      paddingBottom: "8em",
      borderRadius: 0,
      width: "5em",

    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",

  },
  icon: {
    position: "absolute",
    height: "8em",
    width: "8em",
  },
  icon2: {
    position: "absolute",

  },
  image: {
    height: "100%",
    width: "100%",

  },
  image2: {
    height: "5em",
    width: "14em",
marginTop:"1em"

  }
}))


export default function LandingPage(props) {


  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (



    <Grid container direction='column'>

      {/*welcome*/}
      <Grid item>
        <Grid container style={{ height: "40em" }} alignItems="center" direction='row' className={classes.infoBackground}>
          <Grid item >
            <img className={classes.image} src={website} alt="lightbulb" />
          </Grid>
          <Grid direction='row' align='center' >
            <Typography variant='h2'  >
              Time Tracking <br /> For Your Business
            </Typography>
            <Typography variant='subtitle1' >
              Free. Newest Technologies. Friendly.
            </Typography>
            
            <Grid item >
              <img className={classes.image2} src={googleplay} alt="lightbulb"  />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*Technologies*/}
      <Grid item container direction='row' justify='center' style={{ marginTop: "5em", marginBottom: "5em" }} >
        <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
          <Grid item>
            <Grid container alignItems='center' justify="center">
              <Card className={classes.revolutionCard}>
                <CardContent>
                  <img className={classes.icon} src={cash} alt="lightbulb" />
                  <FaceIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </Grid>
        <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
          <Grid item>
            <Grid container alignItems='center' justify="center">
              <Card className={classes.revolutionCard} behavior="slide">
                <CardContent>
                  <img className={classes.icon} src={red} alt="lightbulb" justify="center"/>
                  <QrCodeScannerIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid>

          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
          <Grid item>
            <Grid container alignItems='center' justify="center">
              <Card className={classes.revolutionCard}>
                <CardContent>
                  <img className={classes.icon} src={blue} alt="lightbulb" justify="center" />
                  <LocationOnIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid>

          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
          <Grid item>
            <Grid container alignItems='center' justify="center">
              <Card className={classes.revolutionCard}>
                <CardContent>
                  <img className={classes.icon} src={orange} alt="lightbulb" justify="center" />
                  <NfcIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction='row' justify='center' style={{ marginBottom: "20em" }} >
        <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
          <Grid item>
            <Grid container alignItems='center' justify="center">
              <Card className={classes.revolutionCard}>
                <CardContent>
                  <img className={classes.icon} src={purple} alt="lightbulb" justify="center" />
                  <WifiIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
          <Grid item>
            <Grid container alignItems='center' justify="center">
              <Card className={classes.revolutionCard}>
                <CardContent>
                  <img className={classes.icon} src={pink} alt="lightbulb" justify="center" />
                  <ModeEditIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid>
          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
          <Grid item>
            <Grid container alignItems='center' justify="center">
              <Card className={classes.revolutionCard}>
                <CardContent>
                  <img className={classes.icon} src={yellow} alt="lightbulb" justify="center" />
                  <StyleIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*End Technologies*/}
    </Grid>
  );

}