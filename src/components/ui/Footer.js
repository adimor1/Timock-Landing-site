import {makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Grid from '@material-ui/core/Grid'
import googleplay from '../../assets/googleplay.png';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#141A26",
        width: "100%",
        height: "7em",
      
    },
    adornment: {
        width: "10em",
        verticalAlign: "bottom",
        position: "absolute",
        marginTop:"-3.7em",

    },
    mainContainer: {
        position: "absolute",

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

        <Grid direction="column">


            <Grid container justifyContent="center" className={classes.copyright} >
                <Typography style={{ marginTop: "2.5em", marginRight: "0.5em" }}>
                    © 2022 MoreSolutions - Timock
                </Typography>

                <Grid container direction='column' >
                <Grid item style={{ marginLeft: "4em", marginTop:"-4em", marginBottom:"4em"}} >
                    <Typography  >
                        Join us
                    </Typography>
                    </Grid>
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
        </Grid>

    </footer>
}