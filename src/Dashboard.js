import { Container, makeStyles, Paper, } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import Chart from './Chart.js';
import { Grid, Card, CardContent } from '@material-ui/core';
import {  useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import Week from './Week.js';

const useStyles = makeStyles((theme) => ({
    roxot: {
        display: 'flex',
    },
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
}))

export default function Dashboard (props) {
    const week = new Week();
    const firestore = props.firestore;
    const user = props.user;
    const query = firestore
            .collection('jobs')
            .where("uid", "==", user.uid)
    const [totalJobs, totalJobsLoading, totalJobsError] = useCollectionDataOnce (query, {'idField': 'id'})
    const [totalJobs2, totalJobsLoading2, totalJobsError2] = useCollectionDataOnce (query)

    
    const classes = useStyles();

    return(
        <Container>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} xs={12}>
                <Paper className={classes.paper}>
                    <div className={classes.fixedheight} >                   
                        <Chart />
                    </div>
                </Paper>
                </Grid>
           
                <Grid item lg={6} md={6} xs={6}> 
                    <Card>
                        <CardContent>
                            <h1> 
                                {totalJobsError && <strong>Error: {JSON.stringify(totalJobsError)}</strong>}
                                {totalJobsLoading && <span>Loading...</span>}
                                {totalJobs && <span>Total Jobs: {totalJobs.length}</span>}
                            </h1>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                    <Card>
                        <CardContent>
                            <h1>Jobs Created Today: {totalJobs2.length}</h1>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>



    )
}