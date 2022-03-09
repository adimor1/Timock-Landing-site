import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import animationData from '../animations/landinganimation/data'
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
import background3 from '../assets/background3.png';
import background4 from '../assets/background4.png';
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
import { animateText, samples } from "react-punch";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import TouchAppIcon from '@mui/icons-material/TouchApp';

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
    fontSize: "3rem",
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
    marginTop: "5em",
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
    height: "10em",
    width: "10em",

  },
  infoBackground: {
    backgroundImage: `url(${backgroundbg})`,
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
    height: "37em",
    width: "47em",

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

  },
  infoBackground3: {
    backgroundImage: `url(${background3})`,

    height: "100%",
    width: "100%",


    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

  },
  infoBackground4: {
    backgroundImage: `url(${background4})`,

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
  infoBackground5: {
    backgroundImage: `url(${backgroundbg})`,

    backgroundSize: "cover",
    height: "35em",
    width: "43em",

    [theme.breakpoints.down("sm")]: {
      height: "28em",
      width: "28em",
    }
  },
  icon3: {
    position: "absolute",
    height: "10em",
    width: "10em",
  },
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
        <Grid container style={{ marginBottom: "5em", marginTop: "4em" }} alignItems="center" direction='row'  >
          <Grid item>
            <img className={classes.infoBackground5} src={phones} alt="lightbulb" style={{ marginRight: "5em" }} />
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
            you will only have to  {" "}
            <span className={classes.specialtext}>choose</span>
          </Typography>
        </Grid>

        <Grid item container direction='row' justify='center' style={{ marginTop: "3em", marginBottom: "3em" }} >
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "13em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard}>
                  <CardContent>
                    <img className={classes.icon} src={cash} alt="lightbulb" style={{ opacity: 0.3 }} />
                    <FaceIcon className={classes.icon} style={{ fontSize: "8rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "0.7em" }}>
              <Typography variant='h5'  >
                Face ID
              </Typography>
            </Grid>

          </Grid>
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "13em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard} >
                  <CardContent>
                    <img className={classes.icon} src={red} alt="lightbulb" justify="center" style={{ opacity: 0.3 }} />
                    <QrCodeScannerIcon className={classes.icon} style={{ fontSize: "8rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "0.7em" }}>
              <Typography variant='h5'  >
                QR
              </Typography>
            </Grid>
            <Grid>

            </Grid>
          </Grid>
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "13em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard}>
                  <CardContent>
                    <img className={classes.icon} src={blue} alt="lightbulb" justify="center" style={{ opacity: 0.3 }} />
                    <LocationOnIcon className={classes.icon} style={{ fontSize: "8rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "0.7em" }}>
              <Typography variant='h5'  >
                GPS
              </Typography>
            </Grid>
            <Grid>

            </Grid>
          </Grid>
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "13em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard}>
                  <CardContent>
                    <img className={classes.icon} src={orange} alt="lightbulb" justify="center" style={{ opacity: 0.3 }} />
                    <NfcIcon className={classes.icon} style={{ fontSize: "8rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "0.7em" }}>
              <Typography variant='h5'  >
                NFC
              </Typography>
            </Grid>
            <Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container direction='row' justify='center' style={{ marginBottom: "3em" }} >
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "13em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard}>
                  <CardContent>
                    <img className={classes.icon} src={purple} alt="lightbulb" justify="center" style={{ opacity: 0.2 }} />
                    <WifiIcon className={classes.icon} style={{ fontSize: "8rem" }} />
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
            <Grid item style={{ marginTop: "0.7em" }}>
              <Typography variant='h5'  >
                WIFI
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "13em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard}>
                  <CardContent>
                    <img className={classes.icon} src={pink} alt="lightbulb" justify="center" style={{ opacity: 0.3 }} />
                    <ModeEditIcon className={classes.icon} style={{ fontSize: "8rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "0.7em" }}>
              <Typography variant='h5'  >
                Basic
              </Typography>
            </Grid>
            <Grid>
            </Grid>
          </Grid>
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "13em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard}>
                  <CardContent>
                    <img className={classes.icon} src={yellow} alt="lightbulb" justify="center" style={{ opacity: 0.3 }} />
                    <StyleIcon className={classes.icon} style={{ fontSize: "8rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "0.7em" }}>
              <Typography variant='h5'  >
                HCE
              </Typography>
            </Grid>
            <Grid>
            </Grid>
          </Grid>
          <Grid item container direction='column' md alignItems="center" style={{ maxWidth: "13em" }} >
            <Grid item>
              <Grid container alignItems='center' justify="center">
                <Card className={classes.revolutionCard}>
                  <CardContent>
                    <img className={classes.icon} src={gray} alt="lightbulb" justify="center" style={{ opacity: 0.15 }} />
                    <TouchAppIcon className={classes.icon} style={{ fontSize: "8rem" }} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "0.7em" }}>
              <Typography variant='h5'  >
                Touch ID
              </Typography>
            </Grid>
            <Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>





      <Grid container justify="center" className={classes.buttonContainer} style={{ marginBottom: "5em" }}>
        <Grid item>
          <Button component={Link} to="/estimate" className={classes.estimateButton} onClick={() => props.setValue(5)} variant="contained">Free Download</Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/revolution" variant="outlined" onClick={() => props.setValue(2)} className={classes.learnButtonHero}>
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
          </Button>
        </Grid>
      </Grid>





      <Grid item>{/*--- how it work 1-2---*/}
        <Grid container style={{ height: "50em", marginTop:"5em" }} alignItems="center" direction='row' 
          className={classes.infoBackground3}>


          <Grid container align='center' style={{ marginTop: "2em" }}  direction='row' justify="center" >
            <Typography variant='h2' >
              How It Works?
            </Typography>
          </Grid>

          <Grid item>{/*--- Custom Block---*/}
            <Grid container direction='row' justify={matchesSM ? "center" : undefined} className={classes.servicesContainer}>
              <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                <Typography variant="h4">
                  Definitions
                </Typography>

                <Typography variant="subtitle2">
                  Set up branches of your business
                </Typography>
                <Typography variant="subtitle2">
                  Select options for entering work hours
                </Typography>
              </Grid>
              <Grid item>
                <img className={classes.icon3} alt="custom software icon" src={config} />
              </Grid>
            </Grid>
          </Grid>


          <Grid container direction='row' justify={matchesSM ? "center" : "flex-end"} className={classes.servicesContainer} style={{ marginTop: matchesSM ? "1em" : "8em" }}>
            <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
              <Typography variant="h4">
                Add Employees
              </Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                Add employees to your business
              </Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                They will receive a personal code that keeps a promise
              </Typography>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "15em" }}>
              <img className={classes.icon3} alt="mobile phone icon" src={addwork} width="250em" />
            </Grid>
          </Grid>


          <Grid item>{/*--- Custom Block---*/}
            <Grid container direction='row' justify={matchesSM ? "center" : undefined} className={classes.servicesContainer}>
              <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                <Typography variant="h4">
                  Documentation Working Hours
                </Typography>
                <Typography variant="subtitle2">
                  Employees will report work start and <br /> work hours
                </Typography>
                <Typography variant="subtitle2">
                  We will detect exceptional cases
                </Typography>
              </Grid>
              <Grid item>
                <img className={classes.icon3} alt="custom software icon" src={hourglass} />
              </Grid>
            </Grid>
          </Grid>


          <Grid container direction='row' justify={matchesSM ? "center" : "flex-end"} className={classes.servicesContainer} style={{ marginTop: matchesSM ? "1em" : "5em" }}>
            <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
              <Typography variant="h4">
                Generate reports
              </Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                You can generate different reports
              </Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                In cross-sections of certain workers <br /> or a certain time
              </Typography>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "15em" }}>
              <img className={classes.icon3} alt="mobile phone icon" src={report} width="250em" />
            </Grid>
          </Grid>


          <Grid container justify="center" className={classes.buttonContainer} style={{ marginBottom: "7em", marginTop: "4em" }}>
            <Grid item>
              <Button component={Link} to="/estimate" className={classes.estimateButton} onClick={() => props.setValue(5)} variant="contained">Free Download</Button>
            </Grid>
            <Grid item>
              <Button component={Link} to="/revolution" variant="outlined" onClick={() => props.setValue(2)} className={classes.learnButtonHero}>
                <span style={{ marginRight: 10 }}>Watch Video</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>


      </Grid>


      <Grid item>{/*--- how it work 3-4---*/}
        <Grid container style={{ height: "45em" }} alignItems="center" direction='row'
          className={classes.infoBackground4}>


        </Grid>
      </Grid>





      <Grid item>{/*---Lets talk---*/}
        <Grid container direction='row' justify="flex-end" style={{ marginTop: "8em" }}>
          <Grid sm item className={classes.heroTextContainer} style={{ margin: "auto" }}>
            <Typography variant="h2" align='center'>
              Let's Talk!
            </Typography>
            <Typography variant="subtitle2" align='center'>
              We are here for you  <br /> for any question or request.
            </Typography>
            <Grid container justify="center" className={classes.buttonContainer}>
              <Grid item component={"a"} href="https://play.google.com/store/apps" rel="noopener noreferrer" target="_blank">
                <img className={classes.mail} src={mail} alt="lightbulb" />
              </Grid>
              <Grid item component={"a"} href="https://play.google.com/store/apps" rel="noopener noreferrer" target="_blank">
                <img className={classes.whatsapp} src={whatsapp} alt="lightbulb" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <img className={classes.infoBackground2} src={megaphone} alt="lightbulb" />
          </Grid>
        </Grid>
      </Grid>



    </Grid>




  );

}