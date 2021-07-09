import Job from './Job.js';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import FormDialog from './FormDialog.js';
import Loading from './Loading.js';



const useStyles = makeStyles((theme) => ({
    titleContainer: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    button:{
        margin: theme.spacing(3),
        flex: 1,
    },
}))

function Jobs(props){
    const firestore = props.firestore;
    const auth = props.auth;

    const jobsRef = firestore.collection("jobs");
    const query = jobsRef.where("uid", "==", auth.currentUser.uid);
    const [jobs, loading, error] = useCollectionData(query, {idField: 'id'}); 
    
    const classes = useStyles();

return(
    <div>
    <Container className={classes.titleContainer}>
        <Typography align="center" variant="h2">Job Applications</Typography>
        <div className={classes.button}>
            <FormDialog  firestore={firestore} auth={auth} />    
        </div>
    </Container>
    
        <Grid container spacing={3}>
            {error && <h1>Error: {JSON.stringify(error)}</h1>}
            {loading && <Container xs><Loading /></Container>}
            {jobs && jobs.map(job => <Grid key={job.id} item xs={12} md={6} lg={3}><Job key={job.id} job={job} firestore={firestore} auth={auth}/></Grid>)} 
        </Grid>
        
        </div>)
}

export default Jobs;