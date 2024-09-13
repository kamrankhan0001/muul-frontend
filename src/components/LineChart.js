import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import cubejsApi from '../cubejsApi';

const LineChartComponent = () => {
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['DemoTable.valueSum'],
    timeDimensions: [{
      dimension: 'DemoTable.timestamp',
      granularity: 'day',
    }],
  }, { cubejsApi });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  const data = resultSet.chartPivot();

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="DemoTable.valueSum" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default LineChartComponent;
