import React from 'react'
import {Card, CardActions, CardContent, Typography, Chip, makeStyles} from '@material-ui/core';
import { IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Close as CloseIcon } from '@material-ui/icons';

import { useState} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '300px',
    },
    pushExpander:{
        flexGrow: 1,
    }
}))


const Job = (props) => {
    const {title, description, company, applied, interview, offer, createDate ,id} = props.job;
    const jobsRef = props.firestore.collection('jobs');
    const currentJobRef = jobsRef.doc(id);
    const [appliedState, setAppliedState] = useState(applied);
    const [interviewState, setInterviewState] = useState(interview);
    const [offerState, setOfferState] = useState(offer);

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    function handleDelete(){
        jobsRef.doc(id).delete();
    }

    function handleUpdate(field, value) {
        currentJobRef.update({[field]: value})
    }

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" >{title}</Typography>
                <Typography variant="h5">{company}</Typography>
                <Typography variant="caption">created: {createDate.toDate().toDateString()}</Typography>
               
            </CardContent>
            <CardActions>
            <IconButton onClick={handleExpandClick}>
                    <ExpandMoreIcon />
                </IconButton>
                
                <Chip 
                    variant={appliedState ? "default" : "outlined"} 
                    color="primary" 
                    label="applied"
                    onClick={() => {setAppliedState(!appliedState); handleUpdate("applied", !applied)}}
                  />
                <Chip 
                    variant={ interviewState ? "default" : "outlined"}
                    color="secondary" 
                    label="interview"
                    onClick={() => {setInterviewState(!interviewState); handleUpdate("interview", !interview)}}

                />
                <Chip 
                    variant={offerState ? "default" : "outlined"}
                    label="offer"
                    onClick={() => {setOfferState(!offerState); handleUpdate("offer", !offer)}}
                />
            <div className={classes.pushExpander} />
            <IconButton onClick={handleDelete}><CloseIcon /></IconButton>
            
               
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{description}</Typography>
                </CardContent>
            </Collapse>
        </Card> 
    )
}
export default Job;