import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/">Line Chart</Link></li>
        <li><Link to="/bar-chart">Bar Chart</Link></li>
        <li><Link to="/pie-chart">Pie Chart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
