import React from "react";
import { Button, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import ButtonArrow from "./ButtonArrow";
import backgoround from '../../assets/map4.png';
import mobileBackground from '../../assets/map4.png';
import { useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  backgoround: {
    backgroundImage: `url(${backgoround})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "70em",
    width: "100%",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0
    }
  }
}));

export default function CallToAction(props) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return <Grid

    container
    alignItems="center"
    justify={matchesSM ? "center" : "space-between"}
    className={classes.backgoround}
    direction={matchesSM ? "column" : "row"}
  >
    <Grid item
      style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit" }}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">Simple Software. <br /> Revolutionary Results.</Typography>
          <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>Take advantage of the 21st Century.</Typography>
          <Grid container justify={matchesSM ? "center" : undefined} item>
            <Button
              component={Link} to="/revolution"
              variant='outlined'
              onClick={() => props.setValue(2)}
              className={classes.learnButton}

            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item >
      <Button component={Link} to="/estimate" variant="contained" onClick={() => props.setValue(5)} className={classes.estimateButton}>Free Estimate</Button>
    </Grid>

  </Grid>
}