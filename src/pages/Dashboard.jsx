import React from 'react';

import StatCard from '../components/Dashboard/StatCard';
import TripsOverview from '../components/Dashboard/TripsOverview';
import BestSellerTrips from '../components/Dashboard/BestSellerTrips';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Earnings" value="650,5000 XAF" icon="dollar-sign" />
          <StatCard title="Reservations" value="132" icon="book" />
          <StatCard title="Active Trips" value="74" icon="truck" />
          <StatCard title="Total Agencies" value="27" icon="briefcase" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TripsOverview />
          </div>
          <div>
            <BestSellerTrips />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;