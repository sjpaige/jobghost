import React from 'react';
import { Typography, makeStyles, Grid, Container, Box} from '@material-ui/core';
import resume from './static/about/resume.jpg';
import devices from './static/about/devices.jpg';
import metrics from './static/about/metrics.jpg';
import ImageCard from './ImageCard.js';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(3),
       
    },
    box: {
        justifyContent: 'center',
    }
}))

export default function About(){

    const classes = useStyles();
    return(
        <Container maxWidth="lg" className={classes.root}>
           <Grid container spacing={3}>
                <Grid item lg={6} md={12} xs={12}><ImageCard image={resume}/></Grid>
                <Grid item lg={6} md={12} xs={12}>
                    <Typography variant="h4" align="center"> Stay Organized</Typography>
                    <Typography variant="body1" align="center"> 
                        Manage your job search using the Job Ghost tool. You can track where you are
                        in the process and fill out the requirements for the position.
                    </Typography>   
                </Grid>
                
                <Grid item lg={6} md={6} xs={12}>
                    <Typography variant="h4" align="center">Available Anywhere</Typography>
                    <Typography align="center"> 
                        Job Ghost is available as a web tool on both mobile and pc web platforms.
                    </Typography>
                </Grid>
                <Grid item lg={6} md={12} xs={12}><ImageCard image={devices}/></Grid>
                <Grid item lg={6} md={12} xs={12}><ImageCard image={metrics}/></Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography variant="h4" align="center">Keep Track</Typography>
                    <Typography align="center"> 
                        Track once you have applied, when you interview, and finally if you get an offer.
                        
                    </Typography>
                </Grid>

            </Grid>
            
        </Container>
        
    )
}