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
      padding: 25
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
  blueBackground: {
    backgroundImage: `url(${backgroundbg})`,
    backgroundSize: "cover",
    height: "35em",
    width: "43em",
    [theme.breakpoints.down("sm")]: {
      height: "28em",
      width: "28em",
    }
  },
  howIcon: {
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

  return (
    <Grid container direction='column'>

      {/*---welcome---*/}
      <Grid item>
        <Grid container style={{ marginBottom: "5em", marginTop: "4em" }} alignItems="center" direction='row'  >
          <Grid item>
            <img className={classes.blueBackground} src={phones} alt="lightbulb" style={{ marginRight: "5em" }} />
          </Grid>
          <Grid align='center' >
            <Typography variant='h2'  >
              Time Tracking <br /> For Your Business
            </Typography>
            <Typography variant='subtitle1' >
              Free. Newest Technologies. Friendly.
            </Typography>
            <Grid item component={"a"} href="https://play.google.com/store/apps" rel="noopener noreferrer" target="_blank">
              <img className={classes.googleplayImage} src={googleplay} alt="lightbulb" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*---Technologies---*/}
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
                <Card className={classes.technologiesCard}>
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
                <Card className={classes.technologiesCard} >
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
                <Card className={classes.technologiesCard}>
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
                <Card className={classes.technologiesCard}>
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
                <Card className={classes.technologiesCard}>
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
                <Card className={classes.technologiesCard}>
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
                <Card className={classes.technologiesCard}>
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
                <Card className={classes.technologiesCard}>
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

      {/*--- Buttons Technologies---*/}
      <Grid container justify="center" className={classes.buttonContainer} style={{ marginBottom: "5em" }}>
        <Grid item>
          <Button component={Link} to="/estimate" className={classes.downloadButton} onClick={() => props.setValue(5)} variant="contained">Free Download</Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/revolution" variant="outlined" onClick={() => props.setValue(2)} className={classes.learnButton}>
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
          </Button>
        </Grid>
      </Grid>

      <Grid item>{/*--- How it work 1-2---*/}
        <Grid container style={{ height: "50em", marginTop:"5em" }} alignItems="center" direction='row' 
          className={classes.howBackground}>

          <Grid container align='center' style={{ marginTop: "2em" }}  direction='row' justify="center" >
            <Typography variant='h2' >
              How It Works?
            </Typography>
          </Grid>

          <Grid item>
            <Grid container direction='row' justify={matchesSM ? "center" : undefined} className={classes.howContainer}>
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
                <img className={classes.howIcon} alt="custom software icon" src={config} />
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='row' justify={matchesSM ? "center" : "flex-end"} className={classes.howContainer} style={{ marginTop: matchesSM ? "1em" : "8em" }}>
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
              <img className={classes.howIcon} alt="mobile phone icon" src={addwork} width="250em" />
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction='row' justify={matchesSM ? "center" : undefined} className={classes.howContainer}>
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
                <img className={classes.howIcon} alt="custom software icon" src={hourglass} />
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='row' justify={matchesSM ? "center" : "flex-end"} className={classes.howContainer} style={{ marginTop: matchesSM ? "1em" : "5em" }}>
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
              <img className={classes.howIcon} alt="mobile phone icon" src={report} width="250em" />
            </Grid>
          </Grid>

          <Grid container justify="center" className={classes.buttonContainer} style={{ marginBottom: "7em", marginTop: "4em" }}>
            <Grid item>
              <Button component={Link} to="/estimate" className={classes.downloadButton} onClick={() => props.setValue(5)} variant="contained">Free Download</Button>
            </Grid>
            <Grid item>
              <Button component={Link} to="/revolution" variant="outlined" onClick={() => props.setValue(2)} className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Watch Video</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>{/*--- how it work 3-4---*/}
        <Grid container style={{ height: "45em" }} alignItems="center" direction='row'
          className={classes.howBackground2}>
        </Grid>
      </Grid>

      <Grid item>{/*---Lets talk---*/}
        <Grid container direction='row' justify="flex-end" style={{ marginTop: "8em" }}>
          <Grid sm item style={{ margin: "auto" }}>
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
            <img className={classes.redBackground} src={megaphone} alt="lightbulb" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}