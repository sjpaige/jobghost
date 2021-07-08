import React, { useContext } from 'react';
import { Typography, makeStyles, Grid, Container,} from '@material-ui/core';
import organizedImage from './static/about/organized.jpg'
import { FirebaseContext } from './components/Firebase';


const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(3),
    },
    organized:{
        maxWidth: '300px',
        backgroundImage: `url(${organizedImage})`,
        borderRadius: '5px',
    }
}))

export default function About(){

    const classes = useStyles();
    return(
        <Container maxWidth="lg" className={classes.root}>
           <img className={classes.organized} src={organizedImage} alt="organized using computer."/>
            <Grid container>
                <Grid item lg={4} md={6} xs={12}>
                    <Typography variant="h4" align="center"> Stay Organized</Typography>
                    <Typography variant="body1" align="center"> 
                        Manage your job search using the Job Ghost tool. You can track where you are
                        in the process and fill out the requirements for the position.
                    </Typography>   
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <Typography variant="h4" align="center">Available Anywhere</Typography>
                    <Typography align="center"> 
                        Job Ghost is available as a web tool on both mobile and pc web platforms.
                    </Typography>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <Typography variant="h4" align="center">Keep Track</Typography>
                    <Typography align="center"> 
                        Track once you have applied, when you interview, and finally if you get an offer.
                        
                    </Typography>
                </Grid>

            </Grid>
            
        </Container>
        
    )
}