import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { Container, Typography, Button, Paper } from '@material-ui/core';
import { FirebaseContext } from './components/Firebase';
import GhostLogo from './GhostLogo.js';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(10),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  signInButton:{
    margin: theme.spacing(1),
    width: '250px',
  },
  title:{
    marginBottom: theme.spacing(5),
  }
}))

export default function SignIn() {

    const firebase = useContext(FirebaseContext);

    const signInGoogle = () => firebase.signInWithGoogle();
    const signInWithGithub = () => firebase.signInWithGoogle();

    
    const classes = useStyles();

    return(
        <Container maxWidth="xs">
          <Paper className={classes.paper} color="primary">
            <GhostLogo height={150} width={150}/>
            <Typography variant="h2" className={classes.title} >Job Ghost</Typography>
            <Typography component="h1" variant="h4" color="primary">Sign In</Typography>
            <Button className={classes.signInButton} variant="contained" color="secondary" onClick={signInGoogle}>Sign in with Google</Button> 
            <Button className={classes.signInButton} variant="contained" color="secondary" onClick={signInWithGithub}>Sign in with Github</Button> 

          </Paper>
        </Container>
    ) 
}