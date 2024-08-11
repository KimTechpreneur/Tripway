import React from 'react';
import DriversTable from '../components/Tables/DriversTable';

const Drivers = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Drivers</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ADD NEW
          </button>
        </div>
        <DriversTable />
      </div>
    </div>
  );
};

export default Drivers;