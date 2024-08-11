import React from 'react';

const trips = [
  { id: 1, route: 'Douala-Yaounde', time: '7:00 - 3:00pm', frequency: 'Daily', sales: 10 },
  { id: 2, route: 'Yaounde-Bafoussam', time: '7:00 - 3:00pm', frequency: 'Daily', sales: 7 },
  { id: 3, route: 'Bamenda-Bafoussam', time: '7:00 - 3:00pm', frequency: 'Daily', sales: 6 },
  { id: 4, route: 'Douala-Buea', time: '11:00 - 3:00pm', frequency: 'Daily', sales: 3 },
  { id: 5, route: 'Bamenda-Nchang', time: '9:00 - 3:00pm', frequency: 'Daily', sales: 3 },
];

const BestSellerTrips = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Best Seller Trips</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id} className="mb-4 last:mb-0">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                {trip.id}
              </div>
              <div>
                <h3 className="font-semibold">{trip.route}</h3>
                <p className="text-sm text-gray-600">{trip.time} {trip.frequency}</p>
              </div>
              <div className="ml-auto">
                <span className="font-bold text-blue-500">{trip.sales}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellerTrips;