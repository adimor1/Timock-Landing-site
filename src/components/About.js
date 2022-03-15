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

import team from '../assets/team.jpg';
import qr from '../assets/qr.png';
import faceid from '../assets/faceid.png';
import gps from '../assets/gps.png';
import wifi from '../assets/WIFI.png';
import basic from '../assets/basic.png';
import hce from '../assets/hce.png';
import touchid from '../assets/touchid.png';
import right from '../assets/right-red.png';
import howBackground from '../assets/backgroundtec.png';
import Typical from 'react-typical'
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
        fontSize: "6rem",
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
    team: {
        backgroundImage: `url(${team})`,
        alignItems: "center",
        backgroundSize: "cover",
        height: "40em",
        width: "45em",
        textAlign: 'right',
    
        [theme.breakpoints.down("sm")]: {
            height: "28em",
            width: "28em",
        }
    },

    howBackground: {
        backgroundImage: `url(${howBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "right"
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
            <Grid item>{/*--- How it work 1-2---*/}
                <Grid container alignItems="center" direction='row'
                    className={classes.howBackground}>
                    <Grid container align='center' style={{ marginTop: "5em", marginRight: "3em", marginLeft: "3em" }} direction='row' justify="center" >
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
                    

                </Grid>
                <Grid>
                <img className={classes.team} src={team} alt="lightbulb" />
                </Grid>
            </Grid>
        </Grid>
    );
}