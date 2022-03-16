import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Link } from 'react-router-dom';

import nfc from '../assets/nfc.png';
import qr from '../assets/qr.png';
import faceid from '../assets/faceid.png';
import gps from '../assets/gps.png';
import wifi from '../assets/WIFI.png';
import basic from '../assets/basic.png';
import hce from '../assets/hce.png';
import touchid from '../assets/touchid.png';
import right from '../assets/right-red.png';
import background from '../assets/backgroundtec.png';
import Typical from 'react-typical'
import AnimatedText from 'react-animated-text-content';




const useStyle = makeStyles(theme => ({

    
    specialtext: {
        fontFamily: "Pacifico",
        fontSize: "6rem",
    },
    subtitle: {
        marginBottom: "1em"
    },
    container: {
        marginTop: "5em",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
            marginTop: "0em",
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "right"
    },
    icon: {
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
            <Grid item>{/*--- How it work 1-2---*/}
                <Grid container alignItems="center" direction='row'
                    className={classes.background}>
                    <Grid container align='center' style={{ marginTop: "5em", marginRight: "3em", marginLeft: "3em", marginBottom:"5em" }} direction='row' justify="center" >
                        <Typography variant='h2' >

                            <AnimatedText
                                type="words"
                                animationType="float"
                            >
                                Our Technologies
                            </AnimatedText>

                        </Typography>
                        <Grid >
                            <Typography variant='subtitle2'  >
                                We offer a variety of technologies that do not exist in the market.
                                <br />
                                These technologies will make it easier for your employees to document their work hours.
                                <br />
                                When you configure your business, you will choose what technologies your employees will be able to use
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction='row' justify={matchesSM ? "center" : undefined} className={classes.howContainer}  >
                            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>

                                <Typography variant="h4">
                                    {" "}
                                    <span className={classes.specialtext}>01 </span>
                                    Face Id
                                </Typography>
                                <Typography variant="subtitle2">
                                    We use a acclaimed face recognition system and its accuracy exceeds 99.90 percent.
                                    After completing the installation of the application,
                                    go to the management menu at the bottom of the screen,
                                    click on Settings, and on the screen that opens in the Face Recognition bar,
                                    click on DEVICES And there you marked the device on which the facial recognition system will be installed,
                                    at the next login to the app on the marked device you will be transferred directly to the facial recognition system,
                                    where you will photograph your employees and after at least one employee is photographed you can start working with the facial recognition system.
                                    Although our system stores the data in the cloud, for privacy and performance reasons we have chosen to manage the
                                    face recognition system locally ie on the storage of the device you choose to use as the face recognition system.
                                    In addition, we keep the device storing photos of employees
                                    who have used the facial recognition system for 7 days - for your follow-up where you can monitor the accuracy of the system.
                                    Our face recognition module will be installed as a separate module only on devices decided by the system administrator.
                                    We recommend using a fast phone with good hardware but it is really not mandatory even a slow and old phone will do the job well.
                                    It is not recommended to use the administrator's device as a face recognition device but for the purpose of your tests
                                    and impression we have enabled this with an appropriate message.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img className={classes.icon} alt="custom software icon" src={faceid} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justify={matchesSM ? "center" : "flex-end"} className={classes.container} >
                        <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                            <Typography variant="h4">
                                {" "}
                                <span className={classes.specialtext}>02 </span>
                                QR
                            </Typography>
                            <Typography variant="subtitle2" className={classes.subtitle}>
                                You can print the QR code from the app and hang it in the workplace. The employee who scans the QR code will record attendance.
                            </Typography>
                        </Grid>
                        <Grid item style={{ marginRight: matchesSM ? 0 : "15em" }}>
                            <img className={classes.icon} alt="mobile phone icon" src={qr} width="250em" />
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction='row' justify={matchesSM ? "center" : undefined} className={classes.container} >
                            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                                <Typography variant="h4">
                                    {" "}
                                    <span className={classes.specialtext}>03 </span>
                                    GPS
                                </Typography>
                                <Typography variant="subtitle2">
                                    The application will be able to identify the employee's location (address) at the time of reporting the attendance.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img className={classes.icon} alt="custom software icon" src={gps} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justify={matchesSM ? "center" : "flex-end"} className={classes.container} >
                        <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                            <Typography variant="h4">
                                {" "}
                                <span className={classes.specialtext}>04 </span>
                                WIFI
                            </Typography>
                            <Typography variant="subtitle2" className={classes.subtitle}>
                            You can decide that attendance reporting will be done through the WIFI of the workplace.
                                    Attendance Administrator will record in the app the IP addresses of your WIFI in the workplace.
                                    When the employee registers a presence, the system will recognize his IP address and indicate that this employee has registered an office presence and his IP address.
                                    This option will only be possible if you enter the WIFI IP addresses.
                            </Typography>
                        </Grid>
                        <Grid item style={{ marginRight: matchesSM ? 0 : "15em" }}>
                            <img className={classes.icon} alt="mobile phone icon" src={wifi} width="250em" />
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction='row' justify={matchesSM ? "center" : undefined} className={classes.container}  >
                            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>

                                <Typography variant="h4">
                                    {" "}
                                    <span className={classes.specialtext}>05 </span>
                                    Basic
                                </Typography>
                                <Typography variant="subtitle2">
                                You can register attendance without any location  technological but on trust in the employee.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img className={classes.icon} alt="custom software icon" src={basic} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justify={matchesSM ? "center" : "flex-end"} className={classes.container} >
                        <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                            <Typography variant="h4">
                                {" "}
                                <span className={classes.specialtext}>06 </span>
                                HCE
                            </Typography>
                            <Typography variant="subtitle2" className={classes.subtitle}>
                            HCE (Host card emulation)  is base on NFC technology.
                                    Every employee who installs the app turns his phone into an attendance card.
                                    First option -  You can decide that the phones of the supervisor or team leader or secretary will be  attendance card (HCE) reader on demand.
                                    When the employee comes to work he attaches the back of his phone to the phone of the supervisor,
                                    team leader or secretary and thus attendance is recorded. The system administrator will open the reader option in the list of employees.
                                    Second option - You can take an old or cheap phone and turn it into  a 24/7 attendance card reader.
                                    This option simulates a time attendance system which is hung on the wall. Place the phone with its back up and the employees
                                    will attach their phone to the back of this device and thus record attendance.
                            </Typography>
                        </Grid>
                        <Grid item style={{ marginRight: matchesSM ? 0 : "15em" }}>
                            <img className={classes.icon} alt="mobile phone icon" src={hce} width="250em" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}