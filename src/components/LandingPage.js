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
import right from '../assets/right-red.png';
import talk from '../assets/talk.png';
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
    marginTop: "1em"

  },
  button: {
    height: 60,
    width: 165,
    borderRadius: "50px",
    borderWidth: 3,

  },
  infoBackground2: {
    backgroundImage: `url(${right})`,

    backgroundSize: "cover",
    justifyContent: "flex-end",
    height: "40em",
    width: "40em",
    [theme.breakpoints.down("sm")]: {
      height: "28em",
      width: "28em",
    }
  },
  image3: {
    height: "25em",
    width: "25em",

  },
  parent: {
    position: "relative",
    top: 0,
    left: 0,
  },
  image4: {
    position: "relative",
    top: 0,
    left: 0,
   
  },
  image5: {
    position: "absolute",
    top: "30px",
    left: "30px"
   
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
        <Grid container style={{ height: "40em" }} alignItems="center" direction='row' className={classes.infoBackground} style={{ marginBottom: "10em", marginTop: "5em" }}>
          <Grid item >
            <img className={classes.image} src={website} alt="lightbulb" />
          </Grid>
          <Grid align='center' >
            <Typography variant='h2'  >
              Time Tracking <br /> For Your Business
            </Typography>
            <Typography variant='subtitle1' >
              Free. Newest Technologies. Friendly.
            </Typography>
            <Grid item component={"a"} href="https://play.google.com/store/apps" rel="noopener noreferrer" target="_blank">
              <img className={classes.image2} src={googleplay} alt="lightbulb" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*Technologies*/}
      <Grid >
        <Grid align='center' style={{ marginTop: "5em" }}  >
          <Typography variant='h2' >
            Our Technologies - Your Choice
          </Typography>

          <Typography variant='subtitle2' >
            We offer a variety of technologies that do not exist in the market.
          </Typography>
          <Typography variant='subtitle2' >
            These technologies will make it easier for your employees to document their work hours.
          </Typography>
          <Typography variant='subtitle2' >
            <br />
            You will only have to choose.
          </Typography>
        </Grid>

        <Grid item container direction='row' justify='center' style={{ marginTop: "1em", marginBottom: "5em" }} >
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard}>
                  <CardContent>
                    <img className={classes.icon} src={cash} alt="lightbulb" style={{ opacity: 0.5 }} />
                    <FaceIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

          </Grid>
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard} >
                  <CardContent>
                    <img className={classes.icon} src={red} alt="lightbulb" justify="center" style={{ opacity: 0.5 }} />
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
                    <img className={classes.icon} src={blue} alt="lightbulb" justify="center" style={{ opacity: 0.5 }} />
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
                    <img className={classes.icon} src={orange} alt="lightbulb" justify="center" style={{ opacity: 0.5 }} />
                    <NfcIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='row' justify='center' style={{ marginBottom: "5em" }} >
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "15em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard}>
                  <CardContent>
                    <img className={classes.icon} src={purple} alt="lightbulb" justify="center" style={{ opacity: 0.5 }} />
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
                    <img className={classes.icon} src={pink} alt="lightbulb" justify="center" style={{ opacity: 0.5 }} />
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
                    <img className={classes.icon} src={yellow} alt="lightbulb" justify="center" style={{ opacity: 0.5 }} />
                    <StyleIcon className={classes.icon} style={{ fontSize: "10rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
      {/*End Technologies*/}

      <Grid item container direction='row' justify='center'  >
        <Button
          variant="outlined"
          color="#000000"
          className={classes.button}
          component={Link}
          to='/estimate'
          onClick={() => props.setValue(5)}
          font-size="25px">
          Learn More

        </Button>
      </Grid>


      <Grid item>{/*---IOS/Android Block---*/}
        <Grid container direction='row' justify="flex-end" style={{ marginBottom: "20em", marginTop: "10em"}}>

        <Typography variant='subtitle2' style={{ marginRight:"5em"}}>
            Let's Talk! 
          </Typography>
          <Grid item >
            
            <img className={classes.infoBackground2} alt="mobile phone icon" src={right} />

          </Grid>
        </Grid>
      </Grid>






    </Grid>




  );

}