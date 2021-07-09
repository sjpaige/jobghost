import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';

function createData(time, amount) {
  return { time, amount };
}

function Chart(props){

  function countDays(day){

    return props.jobs.filter(job => props.week.toCompareFormat(job.createDate) === day).length;
  }

  
  const data = props.week.daysOfWeek.map( day => {
    return createData(props.week.today === day ? props.week.toReadable(day) + " (today)" : props.week.toReadable(day), countDays(day, props.jobs))}
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

export default Chart;
