// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LineChartComponent from './components/LineChart';
// import BarChartComponent from './components/BarChart';
// import PieChartComponent from './components/PieChart';
// import Navbar from './components/Navbar';
// import Dashboard from './routes/Dashboard';
// import './App.css';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//       <Route path="/dashboard" component={Dashboard} />
//         <Route path="/" exact component={LineChartComponent} />
//         <Route path="/bar-chart" component={BarChartComponent} />
//         <Route path="/pie-chart" component={PieChartComponent} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import cubejsApi from './cubejsApi';
import { CubeProvider } from '@cubejs-client/react';
import LineChartComponent from './components/LineChart';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';
import Navbar from './components/Navbar';
import Dashboard from './routes/Dashboard';
import ChartRenderer from './components/ChartRenderer';

import './App.css';

const App = () => {
  return (
    <CubeProvider cubejsApi={cubejsApi}>
      <Router>
        <Navbar />
        <div>
          <h3>Cube.js React Dashboard</h3>
          <Routes>
            <Route path="/dashboard" element={Dashboard } />
            <Route path="/" element={ChartRenderer } />
            <Route path="/line-chart" element={LineChartComponent } />
            <Route path="/bar-chart" element={BarChartComponent } />
            <Route path="/pie-chart" element={PieChartComponent } />
          </Routes>
        </div>
      </Router>
    </CubeProvider>
  );
};

export default App;
