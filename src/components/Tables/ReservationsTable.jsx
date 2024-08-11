import React from 'react';

const ReservationsTable = () => {
  const reservations = [
    {
      id: 1,
      ticket: '#2351A',
      customer: 'Nji Brandon',
      dateReserved: 'Nov, 10 2023',
      pickup: 'Akum',
      drop: 'Biyemassi',
      trip: 'B\'da-Y\'de',
      price: '9,000 XAF',
      paid: true,
      timeOfTrip: '11:00am Nov, 10 2023'
    },
    // Add more reservation data as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Reserved</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pick Up</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drop</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trip</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time of Trip</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td className="px-4 py-2 whitespace-nowrap">{reservation.ticket}</td>
              <td className="px-4 py-2 whitespace-nowrap">{reservation.customer}</td>
              <td className="px-4 py-2 whitespace-nowrap">{reservation.dateReserved}</td>
              <td className="px-4 py-2 whitespace-nowrap">{reservation.pickup}</td>
              <td className="px-4 py-2 whitespace-nowrap">{reservation.drop}</td>
              <td className="px-4 py-2 whitespace-nowrap">{reservation.trip}</td>
              <td className="px-4 py-2 whitespace-nowrap">{reservation.price}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  reservation.paid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {reservation.paid ? 'Paid' : 'Unpaid'}
                </span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap">{reservation.timeOfTrip}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsTable;