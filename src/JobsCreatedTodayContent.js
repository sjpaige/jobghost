import { CardContent, Typography } from '@material-ui/core';

function JobsCreatedTodayContent(props) {
    
    let jobsToday = props.jobs.filter(job => props.week.isToday(job.createDate));

    return(
        <CardContent>   
            <Typography variant='h4' align='center'>
                {jobsToday.length} jobs created today so far.
            </Typography>
        </CardContent>
    )
}

export default JobsCreatedTodayContent;