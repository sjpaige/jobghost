import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { Container, Typography, Button } from '@material-ui/core';
import { FirebaseContext } from './components/Firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signInButton:{
    margin: theme.spacing(2),
  }
}))


export default function SignIn() {

    const firebase = useContext(FirebaseContext);

    const signIn = () => firebase.signInWithGoogle();
    
    const classes = useStyles();

    return(
        <Container maxwidth="xs">
          <div className={classes.paper}>
            <Typography component="h1" variant="h4">Sign In</Typography>
            <Button className={classes.signInButton} variant="contained" onClick={signIn}>Sign in with Google</Button> 
          </div>
        </Container>
    ) 
}