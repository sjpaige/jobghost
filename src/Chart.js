import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Week from './Week.js';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const week = new Week();

export default function Chart(props) {
  const [jobs, setJobs] = useState(props.jobs);

  function countDays(day){
    return jobs.filter(job => week.toCompareFormat(job.createDate) === day).length;
    
  }
  const data = week.daysOfWeek.map( day => {
    return createData(week.today === day ? week.toReadable(day) + " (today)" : week.toReadable(day), countDays(day, jobs))}
  )

  const theme = useTheme();
  

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Jobs
            </Label>
          </YAxis>
          <Tooltip />

          <Line type="linear" dataKey="amount" stroke={theme.palette.primary.main} strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
