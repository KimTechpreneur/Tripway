import React from 'react';

const BusesTable = () => {
  const buses = [
    { busNo: 'LT2351A', driverName: 'Nji Brandon', capacity: 70, status: 'Active' },
    { busNo: 'CE3265Q', driverName: 'Niba Gaston', capacity: 55, status: 'Active' },
    { busNo: 'NW2351A', driverName: 'Nji Brandon', capacity: 70, status: 'Inactive' },
    // Add more bus data as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {buses.map((bus) => (
            <tr key={bus.busNo}>
              <td className="px-6 py-4 whitespace-nowrap">{bus.busNo}</td>
              <td className="px-6 py-4 whitespace-nowrap">{bus.driverName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{bus.capacity}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  bus.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {bus.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusesTable;