import React from 'react'
import {Button, Card, CardActions, CardContent, Typography, Chip} from '@material-ui/core'

const Job = (props) => {
    const {title, description} = props.job;
    return (
        <Card>
            <CardContent>
                <Typography variant="h4" >{title}</Typography>
                <Typography variant='body1' >{description}</Typography>
            </CardContent>
            <CardActions>
                <Button>Delete</Button>
                <Button>Edit</Button>
                {/* {job.applied && <Chip color="primary" label="applied"/>}
                {job.interview && <Chip color="secondary" label="interview"/>}
                {job.offer && <Chip label="offer"/>} */}
            </CardActions>
        </Card> 
    )
}
export default Job;