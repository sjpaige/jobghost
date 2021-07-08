import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar.js';
import Jobs from './Jobs.js';
import Loading from './Loading.js';
import { Container, createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { purple, red } from '@material-ui/core/colors';

import {useAuthState} from 'react-firebase-hooks/auth';

import {Route, Switch} from 'react-router-dom';

import SignIn from './SignIn';
import Dashboard from './Dashboard.js';
import About from './About.js';

import { useContext } from 'react';
import { FirebaseContext } from './components/Firebase';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800]
    },
    secondary: {
      main: red[400]
    }
  }
})

function App() {
  const firebase = useContext(FirebaseContext);
  const auth = firebase.auth;
  const firestore = firebase.firestore;
  const [user, loading, error]= useAuthState(auth); 
  
  return (
    <>
      {error && <h1>Fatal Error: {JSON.stringify(error)}</h1>}
      {loading && <Loading />}
      {user && 
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar auth={auth}/>
      <Switch>
        <Route component={About} path="/about" />
        <Route path="/jobs">
          <Jobs firestore={firestore} auth={auth} />
        </Route>
        <Route path="/" exact>
            <Dashboard firestore={firestore} user={auth.currentUser} />
        </Route>
      </Switch>
    </ThemeProvider>}
    {!loading && !user && <SignIn auth={auth}/>}
    </>
  );
}

export default App;
