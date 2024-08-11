import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '12-09', trips: 10 },
  { date: '12-10', trips: 12 },
  { date: '12-11', trips: 8 },
  { date: '12-12', trips: 15 },
  { date: '12-13', trips: 11 },
  { date: '12-14', trips: 9 },
  { date: '12-15', trips: 13 },
];

const TripsOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Trips Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="trips" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TripsOverview;