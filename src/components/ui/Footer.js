import { Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import Grid from '@material-ui/core/Grid'

import googleplay from '../../assets/googleplay.png';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#141A26",
        width: "100%",
        height: "7em",

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
    copyright:{
        position: "absolute",
        [theme.breakpoints.down("md")]: {
            justifyContent: "flex-end",
            
        },
        [theme.breakpoints.down("xs")]: {
            justifyContent: "flex-end"
        },
    }
}));

export default function Footer(props) {
    const classes = useStyles()

    return <footer className={classes.footer}>
    
            <Grid container justifyContent="center"  className={classes.copyright}>
                <Typography style={{ marginTop: "2.5em" }}>
                    © 2022 MoreSolutions - Timock
                </Typography>
            </Grid>
            <Grid container  direction='column' >
                <Typography style={{ marginTop: "0.5em", marginLeft: "4em" }} >
                    Join us
                </Typography>

                <Grid item component={"a"} href="https://play.google.com/store/apps" rel="noopener noreferrer" target="_blank">
                <img
                    alt="lightbulb"
                    src={googleplay}
                    className={classes.adornment}
                   style={{marginLeft:"2em"}}
                />
            </Grid>
            </Grid>      


    </footer>
}