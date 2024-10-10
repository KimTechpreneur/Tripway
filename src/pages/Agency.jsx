import React, { useState } from 'react';

const agenciesData = [
  { id: 1, name: 'Agency A', location: 'New York', enabled: true },
  { id: 2, name: 'Agency B', location: 'Los Angeles', enabled: false },
  { id: 1, name: 'Agency A', location: 'New York', enabled: true },
  { id: 2, name: 'Agency B', location: 'Los Angeles', enabled: false },
  // Add more mock data as needed
];

const AgencyCard = ({ agency, onToggle, onDelete }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold">{agency.name}</h3>
      <button
        onClick={() => onToggle(agency.id)}
        className={`py-1 px-3 rounded ${agency.enabled ? 'bg-green-500' : 'bg-gray-500'} text-white`}
      >
        {agency.enabled ? 'Enabled' : 'Disabled'}
      </button>
    </div>
    <p className="text-gray-600">Location: {agency.location}</p>
    <div className="flex justify-between">
      <button
        onClick={() => onDelete(agency.id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Details
      </button>
    </div>
  </div>
);

const Agency = () => {
  const [agencies, setAgencies] = useState(agenciesData);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => setSearch(event.target.value);

  const handleToggle = (id) => {
    setAgencies(agencies.map(agency =>
      agency.id === id ? { ...agency, enabled: !agency.enabled } : agency
    ));
  };

  const handleDelete = (id) => {
    setAgencies(agencies.filter(agency => agency.id !== id));
  };

  const filteredAgencies = agencies.filter(agency =>
    agency.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-6">Agencies</h1>

        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Search for an agency"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Agency
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgencies.map(agency => (
            <AgencyCard
              key={agency.id}
              agency={agency}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agency;
