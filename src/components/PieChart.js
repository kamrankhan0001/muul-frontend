import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import cubejsApi from '../cubejsApi';

const PieChartComponent = () => {
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['DemoTable.valueSum'],
    dimensions: ['DemoTable.name'],
  }, { cubejsApi });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  const data = resultSet.chartPivot().map(row => ({
    name: row['DemoTable.name'],
    value: row['DemoTable.valueSum'],
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
