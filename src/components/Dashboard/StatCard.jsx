import React from 'react';
import { DollarSign, Book, Truck, Briefcase } from 'lucide-react';

const iconComponents = {
  'dollar-sign': DollarSign,
  'book': Book,
  'truck': Truck,
  'briefcase': Briefcase
};

const StatCard = ({ title, value, icon }) => {
  const IconComponent = iconComponents[icon];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-blue-500 bg-opacity-10">
          <IconComponent className="h-8 w-8 text-blue-500" />
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;