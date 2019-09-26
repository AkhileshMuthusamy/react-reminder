import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20
  },
  card: {
    display: 'flex',
    minWidth: 250,
    maxWidth: 300,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  graphContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    padding: 10
  },
  main: {
    height: '100%'
  }
}));

const data = [
  { name: 'Page A', uv: 100, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 1000, amt: 2400 },
  { name: 'Page c', uv: 200, pv: 1000, amt: 2400 },
  { name: 'Page D', uv: 400, pv: 1000, amt: 2400 },
  { name: 'Page F', uv: 600, pv: 1000, amt: 2400 }
];

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography>Total Tasks</Typography>
              <Typography>129</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography>Active Tasks</Typography>
              <Typography>86</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography>Inactive Tasks</Typography>
              <Typography>86</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography>Completed Tasks</Typography>
              <Typography>86</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className={classes.graphContainer}>
        <Card style={{ marginTop: 10, padding: 10 }}>
          <ResponsiveContainer width="99%" minHeight={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              {/* <CartesianGrid stroke="#ccc" /> */}
              {/* <XAxis dataKey="name" /> */}
              {/* <YAxis /> */}
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card style={{ marginTop: 10, padding: 10 }}>
          <ResponsiveContainer width="99%" minHeight={300}>
            <BarChart width={600} height={300} data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
              <Legend
                width={100}
                wrapperStyle={{
                  top: 40,
                  right: 20,
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #d5d5d5',
                  borderRadius: 3,
                  lineHeight: '40px'
                }}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar type="monotone" dataKey="uv" fill="#8884d8" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
