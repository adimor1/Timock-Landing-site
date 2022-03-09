import { Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

import googleplay from '../../assets/googleplay.png';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#141A26",
        width: "100%",
        height:"7em",
     
        position: "relative"
    },
    adornment: {
        width: "10em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            with: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            with: "15em"
        },
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        fontFamily: "Arial",
        fontSize: "o.75rem",
        color: "white",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    },
    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            with: "2.5em",
            height: "2.5em"
        },
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em"
        },
    }
}));

export default function Footer(props) {
    const classes = useStyles()

    return <footer className={classes.footer}>
        <Hidden mdDown >
            <Grid container justifyContent="center" className={classes.mainContainer}   >
                <Typography  style={{marginTop:"2.5em"}}>
                © 2022 MoreSolutions - Timock
                </Typography>
            </Grid>
            <Grid container  className={classes.mainContainer}   >
                <Typography  style={{marginTop:"0.5em", marginLeft:"4em"}}>
               Join us
                </Typography>
            </Grid>
        </Hidden>
        <img
            alt="black decorative slash"
            src={googleplay}
            className={classes.adornment}
            style={{marginTop:"3em", marginLeft:"2em"}}
        />

    </footer>
}