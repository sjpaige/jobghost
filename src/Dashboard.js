import { Container, makeStyles, Paper, } from '@material-ui/core';
import React from 'react';
import Chart from './Chart.js';
import { Grid, Card, CardContent } from '@material-ui/core';
import {  useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import Week from './Week.js';
import Title from './Title.js';
import JobsCreatedTodayCard from './JobsCreatedTodayContent.js';
import Loading from './Loading.js';
import Error from './Error.js';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: '100hv',
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(6),
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
    },
    fixedheight: {
        height: 250,
        width: '99%',
    },
    card: {
        minHeight: 250,
        padding: theme.spacing(2),
    }
}))

const week = new Week();

function Dashboard(props) {

    const query = props.firestore
            .collection('jobs')
            .where("uid", "==", props.user.uid)
    const [jobs, loading, error] = useCollectionDataOnce (query, {'idField': 'id'})
    
    const classes = useStyles();

    return(
        <Container>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} xs={12}>
                <Paper className={classes.paper}>
                    <Title>Recent Activity</Title>
                    <div className={classes.fixedheight} >
                        {error && <Error />}
                        {loading && <Loading />}                   
                        {jobs && <Chart jobs={jobs} week={week}/>}
                    </div>
                </Paper>
                </Grid>
           
                <Grid item lg={4} md={4} xs={12}> 
                    <Card className={classes.card}>
                        <CardContent>
                            {error && <Error />}
                            {loading && <Loading />}
                            {jobs && <div><Typography align='left' variant="h4">Total:</Typography> <Typography align='center' variant='h1' color="primary">{jobs.length}</Typography></div> }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Card className={classes.card}>
                    {error && <Error />}
                    {loading && <CardContent><Loading /></CardContent>}
                    {jobs && <JobsCreatedTodayCard jobs={jobs} week={week}/>}
                    
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Dashboard;
