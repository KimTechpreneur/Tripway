import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Buses from './pages/Buses';
import Customers from './pages/Customers';
import Drivers from './pages/Drivers';
import Reservations from './pages/Reservations';
import Payments from './pages/Payments';
import Settings from './pages/Settings';
import Agency from './pages/Agency'; // Import the new Agency page

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/users/customers" element={<Customers />} />
          <Route path="/users/drivers" element={<Drivers />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/agency" element={<Agency />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
