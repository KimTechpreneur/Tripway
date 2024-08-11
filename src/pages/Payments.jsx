import React from 'react';
import TransactionHistory from '../components/Payments/TransactionHistory';
import PaymentMethods from '../components/Payments/PaymentMethods';

const Payments = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h1 className="text-3xl font-semibold mb-6">Payments</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TransactionHistory />
          </div>
          <div>
            <PaymentMethods />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
