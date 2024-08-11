import React from 'react';
import { CreditCard, DollarSign, Smartphone } from 'lucide-react';

const paymentMethods = [
  { id: 1, name: 'Credit Card', icon: CreditCard },
  { id: 2, name: 'Cash', icon: DollarSign },
  { id: 3, name: 'Mobile Money', icon: Smartphone },
];

const PaymentMethods = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Accepted Payment Methods</h2>
      <ul>
        {paymentMethods.map((method) => (
          <li key={method.id} className="flex items-center mb-4 last:mb-0">
            <method.icon className="w-6 h-6 mr-3 text-blue-500" />
            <span>{method.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethods;