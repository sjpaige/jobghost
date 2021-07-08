import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Week from './Week.js';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

let startAmount = 10;
const week = new Week();

const data = week.daysOfWeek.map( day => {
  return createData(`${day.toLocaleString('default', {month: 'short', day: 'numeric'})} `, startAmount=startAmount + 10)}
)

export default function Chart() {
  const theme = useTheme();
  

  return (
    <React.Fragment>
      <Title>Today</Title>
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
          <Line type="monotone" dataKey="amount" stroke={theme.palette.secondary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
