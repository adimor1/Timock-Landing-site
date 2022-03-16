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

import background from '../assets/backgroundtec.png';
import Typical from 'react-typical'
import AnimatedText from 'react-animated-text-content';
import { height } from '@mui/material/node_modules/@mui/system';

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
        height:"35em",
        [theme.breakpoints.down("sm")]: {
            height:"20em",
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
            <Grid item>
                <Grid container alignItems="center" direction='row'
                  >
                    <Grid container align='center' style={{  marginRight: "3em", marginLeft: "3em", marginBottom:"5em" }} direction='row' justify="center" >
                      
                    <Grid container alignItems="center" direction='row 'style={{ marginTop: "5em", marginRight: "3em", marginLeft: "3em" }} justify="center">
                        <Typography variant='h2' style={{marginBottom:"1em"}}>

                            <AnimatedText
                                type="words"
                                animationType="float"
                            >
                                About Us
                            </AnimatedText>

                        </Typography>
                        </Grid>
                        <Grid >
                            <Typography variant='subtitle2'  >
                                We offer a variety of technologies that do not exist in the market.
                                <br />
                                These technologies will make it easier for your employees to document their work hours.
                                <br />
                                When you configure your business, you will choose what technologies your employees will be able to use
                            </Typography>
                        </Grid>
                        <Grid style={{marginTop:"3em"}}>
                        <img className={classes.background} src={team} alt="lightbulb" />   
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}