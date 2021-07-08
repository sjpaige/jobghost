import { CardContent, Typography } from '@material-ui/core';
import Week from './Week';


export default function JobsCreatedTodayContent(props){
    const week = new Week();
    const jobs = props.jobs;

    let jobsToday = jobs.filter(job => week.isToday(job.createDate));


    return(
        <CardContent>   
            <Typography variant='h4' align='center'>
                {JSON.stringify(jobsToday.length)} jobs created today so far.
            </Typography>
        </CardContent>
    )
}