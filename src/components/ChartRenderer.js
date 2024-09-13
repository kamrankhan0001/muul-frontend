// src/components/ChartRenderer.js
import React from 'react';
import ReactDOM from 'react-dom';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
//import 'antd/dist/antd.css';
import { CartesianGrid, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Table } from 'antd';
import { useDeepCompareMemo } from 'use-deep-compare';

const CartesianChart = ({ resultSet, children, ChartComponent }) => (
  <ResponsiveContainer width="100%" height={350}>
    <ChartComponent data={resultSet.chartPivot()}>
      <XAxis dataKey="x" />
      <YAxis />
      <CartesianGrid />
      {children}
      <Legend />
      <Tooltip />
    </ChartComponent>
  </ResponsiveContainer>
);

const colors = ['#FF6492', '#141446', '#7A77FF'];

const TableRenderer = ({ resultSet, pivotConfig }) => {
  const [tableColumns, dataSource] = useDeepCompareMemo(() => {
    const columns = resultSet.tableColumns(pivotConfig);
    return [
      columns,
      resultSet.tablePivot(pivotConfig)
    ];
  }, [resultSet, pivotConfig]);

  return (
    <Table pagination={false} columns={tableColumns} dataSource={dataSource} />
  );
};

const cubejsApi = cubejs(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjYxOTg1ODUsImV4cCI6MTcyNjI4NDk4NX0.7AeNcbmq5-Fc9Lk7M58wh0sPWIS15SoRamDY8I9eeCg',
  { apiUrl: 'http://localhost:4000/cubejs-api/v1' }
);

const renderChart = ({ resultSet, error, pivotConfig }) => {
  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return <Spin />;
  }

  return (
    <CartesianChart resultSet={resultSet} ChartComponent={AreaChart}>
      {resultSet.seriesNames().map((series, i) => (
        <Area
          key={series.key}
          stackId="a"
          dataKey={series.key}
          name={series.title}
          stroke={colors[i]}
          fill={colors[i]}
        />
      ))}
    </CartesianChart>
  );
};

const ChartRenderer = () => (
  <QueryRenderer
    query={{
      "dimensions": ["demo_table.name"],
      "order": { "demo_table.count": "desc" },
      "measures": ["demo_table.count"],
      "timeDimensions": [{
        "dimension": "demo_table.timestamp",
        "granularity": "day"
      }]
    }}
    cubejsApi={cubejsApi}
    resetResultSetOnChange={false}
    render={(props) => renderChart({
      ...props,
      pivotConfig: {
        "x": ["demo_table.timestamp.day"],
        "y": ["demo_table.name", "measures"],
        "fillMissingDates": true,
        "joinDateRange": false
      }
    })}
  />
);

export default ChartRenderer;
