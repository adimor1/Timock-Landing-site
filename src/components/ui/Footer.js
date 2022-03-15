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
    },
    mainContainer: {
        position: "absolute"
    },
    copyright: {
        position: "absolute",

        [theme.breakpoints.down("sm")]: {
            justifyContent: "flex-end"
        },

        [theme.breakpoints.down("xs")]: {
            justifyContent: "flex-end",
        },
    }
}));

export default function Footer(props) {
    const classes = useStyles()

    return <footer className={classes.footer}>

        <Grid direction="row">
            <Grid  container justifyContent="center" className={classes.copyright} >
                <Typography style={{ marginTop: "2.5em", marginRight:"0.5em"}}>
                    © 2022 MoreSolutions - Timock
                </Typography>
            </Grid>
            <Grid container direction='column' >
                <Typography style={{ marginTop: "0.5em", marginLeft: "3em" }} >
                    Join us
                </Typography>

                <Grid item component={"a"} href="https://play.google.com/store/apps" rel="noopener noreferrer" target="_blank">
                    <img
                        alt="lightbulb"
                        src={googleplay}
                        className={classes.adornment}
                        style={{ marginLeft: "1em" }}
                    />
                </Grid>
            </Grid>

        </Grid>
    </footer>
}