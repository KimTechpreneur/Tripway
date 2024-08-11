import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Buses from './pages/Buses';
import Customers from './pages/Customers';
import Drivers from './pages/Drivers';
import Reservations from './pages/Reservations';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;