import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import right from '../assets/right-red.png';
import megaphone from '../assets/megaphone.png';
import mail from '../assets/mail.png';
import AnimatedText from 'react-animated-text-content';

const useStyle = makeStyles(theme => ({


    buttonContainer: {
        marginTop: "1em"
    },
    redBackground: {
        backgroundImage: `url(${right})`,
        alignItems: "flex-end",
        backgroundSize: "cover",
        height: "35em",
        width: "35em",
        textAlign: 'right',
        alignSelf: 'flex-end',
        [theme.breakpoints.down("sm")]: {
            height: "28em",
            width: "28em",
        }
    },
    mail: {
        height: "8em",
        width: "8em",
        marginTop: "1em"
    },
}))

const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export default function LandingPage(props) {
    const classes = useStyle();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container direction='column'>


            <Grid item>{/*---Lets talk---*/}
                <Grid container direction='row' justify="flex-end" style={{ marginTop: "4em", marginBottom: "5em" }}>
                    <Grid item style={{ margin: "auto" }}>
                        <Typography variant="h2" align='center'>
                            <AnimatedText
                                type="words"
                                animationType="float"
                            >
                                Let's Talk!
                            </AnimatedText>

                        </Typography>
                        <Typography variant="subtitle2" align='center'>
                            We are here for you  <br /> for any question or request.
                        </Typography>
                        <Grid direction='row' container justify="center" className={classes.buttonContainer}>
                            <Grid item component={"a"} rel="noopener noreferrer" target="_blank">
                                <Mailto email="moryos@gmail.com" subject="" body="">
                                    <img className={classes.mail} src={mail} alt="lightbulb" />
                                </Mailto>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{ marginTop: matchesXS ? "10em" : "3em" }}>
                        <img className={classes.redBackground} src={megaphone} alt="lightbulb" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}