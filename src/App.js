import './App.css';
import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar.js';
import Job from './Job';
import { Container, Button, Box } from '@material-ui/core';
import FormDialog from './FormDialog';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

if(firebase.apps.length === 0){
firebase.initializeApp({
  apiKey: "AIzaSyAS4bkboewFC3ar3bYn10cC3pYERSqkHmc",
    authDomain: "jobghost-48ac7.firebaseapp.com",
    projectId: "jobghost-48ac7",
    storageBucket: "jobghost-48ac7.appspot.com",
    messagingSenderId: "499042988897",
    appId: "1:499042988897:web:af7161dd3cbbb1b3138b20",
    measurementId: "G-H7J9GNQXX5"}
)}

const auth = firebase.auth()
const firestore = firebase.firestore()


function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return(
    <Button variant="contained" onClick={signInWithGoogle}>Sign in with Google</Button>
  ) 
}

function SignOut(){ 
  return auth.currentUser && (
      <Button variant="contained" onClick={() => auth.signOut()}>Sign Out</Button>
  )
}

function Jobs(){
  const jobsRef = firestore.collection("jobs");
  const query = jobsRef.orderBy("posted").limit(30);

  const [jobs] = useCollectionData(query, {idField: 'id'});

  return(
    <Box>
      {jobs && jobs.map(job => <Job key={job.id} job={job}/>)} 
    </Box>)
}

function ManageJobs(){
  return(
    <Box>
      <Button variant="contained" color="secondary" size="large">Add New Job</Button>
    </Box>
  );
}

function Footer(){
  return(
    <Box>
      <SignOut />
    </Box>
  )
}


const App = () => {

 const [user]= useAuthState(auth) 
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar user={user}/>
      <FormDialog />
      <Container>
        {user ? <Jobs /> : <SignIn />}
      </Container>
      
      <Footer/>
      
      
    </React.Fragment>
  );
}

export default App;
