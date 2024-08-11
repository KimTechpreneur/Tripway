import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TripWay</h1>
        <div className="flex items-center">
          <span className="mr-2">LarrySteve</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;