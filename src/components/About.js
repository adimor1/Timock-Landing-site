import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import team from '../assets/team.jpg';
import background from '../assets/backgroundtec.png';
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
        height: "35em",
        [theme.breakpoints.down("sm")]: {
            height: "20em",
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
                    <Grid container align='center' style={{ marginRight: "3em", marginLeft: "3em", marginBottom: "5em" }} direction='row' justify="center" >

                        <Grid container alignItems="center" direction='row ' style={{ marginTop: "5em", marginRight: "3em", marginLeft: "3em" }} justify="center">
                            <Typography variant='h2' style={{ marginBottom: "1em" }}>

                                <AnimatedText
                                    type="words"
                                    animationType="float"
                                >
                                    About Us
                                </AnimatedText>

                            </Typography>
                        </Grid>
                        <Grid >
                            <Typography variant='subtitle2'>
                                We are a family of experienced professional and creative developers.
                                We decided to develop free apps that will help people in different fields.
                                Our motto Money is not the goal but a means to improve life and help those who can.
                                We bring you the experience and professionalism of the first generation and the innovation and daring of our younger generation.
                                Together we create apps that will help you save time and money in order to improve your life or your business.
                                Since we decided to join hands the enthusiasm and conversations with the younger generation are solidifying
                                the family and giving us all the motivation to continue to develop apps that will help everyone who can.
                            </Typography>
                        </Grid>
                        <Grid style={{ marginTop: "3em" }}>
                            <img className={classes.background} src={team} alt="lightbulb" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}