import React from 'react';
import { Typography, makeStyles, Grid, Container} from '@material-ui/core';
import resume from './static/about/resume.jpg';
import devices from './static/about/devices.jpg';
import metrics from './static/about/metrics.jpg';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(3),
    },
    gridContent: {
  
    },
    media:{
        maxHeight: 340,
        maxWidth: 340, 
        borderRadius: '10px',
    },
    text:{
        marginTop: theme.spacing(2),
        maxWidth: 340,
    }
}))

const infoItems = [
    {
        title: "Stay Organized",
        body: 
        `Manage your job search using the Job Ghost tool. 
        You can track where you are in the process and 
        fill out the requirements for the position.`,
        image: metrics,
        alt: "2d graphic of a person looking at a data dashboard."
    },
    {
        title: "Available Anywhere",
        body: 
        `Job Ghost is available as a web tool on both mobile and pc web platforms.`,
        image: devices,
        alt: "2d graphic of a person sitting near a smartphone and laptop."
    },
    {
        title: "Keep Track",
        body: 
        `Track once you have applied, when you interview, and finally if you get an offer.`,
        image: resume,
        alt: "2d graphic of a person near a giant resume and job application."
    }
]

export default function About(){

    const classes = useStyles();
    return(
        <Container lg className={classes.root}>
        <Grid 
        container
        spacing={3}
        className={classes.gridContent}
        >
            {infoItems.map( (info) => (
                <Grid item xs justifyContent="center">
                        <img 
                        className={classes.media}
                        src={info.image}
                        alt={info.alt}
                    />
                    <Typography variant="h4" className={classes.text}>{info.title}</Typography>  
                    <Typography variant="body2" className={classes.text}>{info.body}</Typography>
                </Grid>)
            )}
        </Grid>
        </Container>
    )
}