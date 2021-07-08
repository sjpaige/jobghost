import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar.js';
import Jobs from './Jobs.js';
import { Container, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { purple, red } from '@material-ui/core/colors';

import {useAuthState} from 'react-firebase-hooks/auth';

import {Route, Switch} from 'react-router-dom';

import SignIn from './SignIn';
import Dashboard from './Dashboard.js';
import About from './About.js';

import { useContext } from 'react';
import { FirebaseContext } from './components/Firebase';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[800]
    },
    secondary: {
      main: red[400]
    }
  }
})

const App = () => {
  const firebase = useContext(FirebaseContext);
  const auth = firebase.auth;
  const firestore = firebase.firestore;
  const [user]= useAuthState(auth); 
  
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar auth={auth}/>
      { user ?
      <Switch>
        <Route component={About} path="/about" />
        <Route path="/jobs">
          <Jobs firestore={firestore} auth={auth} />
        </Route>
        <Route path="/" exact>
            <Dashboard firestore={firestore} user={user} />
        </Route>
      </Switch>
       :<Container maxWidth="lg">
        <SignIn auth={auth} /> 
      </Container>}  
    </ThemeProvider>
    </>
  );
}

export default App;
