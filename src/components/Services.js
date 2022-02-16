import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import { Typography } from '@material-ui/core';
import customSoftwareIcon from "../assets/Custom Software Icon.svg"
import { useMediaQuery } from '@material-ui/core';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import { Link } from 'react-router-dom';

const useStyle=makeStyles(theme=>({
  specialtext:{
    fontFamily:"Pacifico",
    color: theme.palette.common.orange
  },
  learnButton:{
    ...theme.typography.learnButton,
    fontSize:"0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]:{
      marginBottom:"2em"
    }
  },
  subtitle:{
    marginBottom:"1em"
  },
  icon:{
    marginLeft:"2em",
    [theme.breakpoints.down("xs")]:{
      marginLeft:0
    }
  },
  servicesContainer:{
    marginTop: "12em",
    [theme.breakpoints.down("sm")]:{
      padding:25
    }
  },
})); 

export default function Services(props){
  const classes=useStyle();
  const theme= useTheme(); 
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm")); 

    return(

        <Grid container direction='column'>
          <Grid item style={{marginLeft: matchesSM? 0: "5em", marginTop: matchesSM?"1em":"2em"}}>
            <Typography 
            variant='h2' 
            align={matchesSM ? "center": undefined} 
            >Services</Typography>
          </Grid>
<Grid item>{/*---IOS/Android Block---*/}
            <Grid container direction='row' justify={matchesSM? "center" : "flex-end"} className={classes.servicesContainer} style={{marginTop: matchesSM? "1em":"5em"}}>
              <Grid item style={{ textAlign: matchesSM ? "center": undefined, width: matchesSM? undefined: "35em"}}>
                  <Typography variant="h4">
                      IOS/Android App Development
                  </Typography>
                  <Typography variant="subtitle1" className={classes.subtitle}>
                    Extend Functionality. Extend Access. Increase Engagement.
                  </Typography>
                  <Typography variant="subtitle1">
                   Integrate your web experience or create a standalone app
                   {matchesSM? null: <br/>}with either mobile platform.
                  </Typography>
                  <Button component={Link} to="/mobbileapps" variant='outlined' onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}  className={classes.learnButton}>
                  <span style={{marginRight:10}}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                  </Button>
              </Grid>
              <Grid item style={{marginRight: matchesSM ?0:"5em"}}>
                <img className={classes.icon} alt="mobile phone icon" src={mobileAppsIcon}  width="250em" />
              </Grid>
            </Grid>
          </Grid>

                    <Grid item>{/*--- Custom Block---*/}
            <Grid container direction='row' justify={matchesSM? "center" : undefined} className={classes.servicesContainer}>
              <Grid item style={{marginLeft: matchesSM ?0:"5em", textAlign: matchesSM ? "center": undefined}}>
                  <Typography variant="h4">
                      Custom Software Development
                  </Typography>
                  <Typography variant="subtitle1" className={classes.subtitle}>
                    Save Energy. Save Time. Save Money.
                  </Typography>
                  <Typography variant="subtitle1">
                    Complete digital Solutions, from investigation to {" "}
                    <span className={classes.specialtext}>Celebration</span>
                  </Typography>
                  <Button component={Link} to="/customsoftware" variant='outlined' onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}} className={classes.learnButton}>
                  <span style={{marginRight:10}}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                  </Button>
              </Grid>
              <Grid item>
                <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon}/>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item>{/*--- Website Block---*/}
            <Grid container direction='row' justify={matchesSM? "center" : "flex-end"} className={classes.servicesContainer} style={{marginBottom:"10em"}}>
              <Grid item style={{ textAlign: matchesSM ? "center": undefined, width: matchesSM? undefined: "35em"}}>
                  <Typography variant="h4">
                      Website Development
                  </Typography>
                  <Typography variant="subtitle1" className={classes.subtitle}>
                    Reach More. Discover More. Sells More.
                  </Typography>
                  <Typography variant="subtitle1">
                    Optimized for Search Engines, built for speed.
                  </Typography>
                  <Button component={Link} to="/websites" variant='outlined' onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}  className={classes.learnButton}>
                  <span style={{marginRight:10}}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                  </Button>
              </Grid>
              <Grid item style={{marginRight:matchesSM?0:"5em"}}>
                <img className={classes.icon} alt="websitee icon" src={websiteIcon} width="250em"/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

    );
}