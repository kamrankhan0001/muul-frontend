import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import cubejsApi from '../cubejsApi';

const BarChartComponent = () => {
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['DemoTable.valueSum'],
    dimensions: ['DemoTable.name'],
  }, { cubejsApi });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  const data = resultSet.chartPivot();

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="DemoTable.valueSum" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
