import React from 'react';
import CustomersTable from '../components/Tables/CustomersTable';

const Customers = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold leading-tight">Customers</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ADD NEW
          </button>
        </div>
        <CustomersTable />
      </div>
    </div>
  );
};

export default Customers;