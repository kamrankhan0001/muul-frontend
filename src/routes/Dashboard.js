import React,{Grid} from 'react';
import BarChartComponent from '../components/BarChart';
import PieChartComponent from '../components/PieChart';
import LineChartComponent from '../components/LineChart';


//import { Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      {/* Using a Grid layout from Material-UI for responsive design */}
      <Grid container spacing={3}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <h3>Bar Chart: Value Distribution</h3>
            <BarChartComponent />
          </div>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <h3>Pie Chart: Value Percentage</h3>
            <PieChartComponent />
          </div>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12}>
          <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <h3>Line Chart: Value Trend Over Time</h3>
            <LineChartComponent />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;