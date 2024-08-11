import React from 'react';

const SettingsSection = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Settings = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>

        <SettingsSection title="General Settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input 
                type="text" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" 
                placeholder="Enter company name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Email</label>
              <input 
                type="email" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" 
                placeholder="Enter contact email" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Address</label>
              <input 
                type="text" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" 
                placeholder="Enter company address" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input 
                type="tel" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3" 
                placeholder="Enter phone number" 
              />
            </div>
          </div>
        </SettingsSection>

        <SettingsSection title="Notification Settings">
          <div className="space-y-4">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              />
              <span className="ml-2 text-gray-700">Email notifications for new bookings</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              />
              <span className="ml-2 text-gray-700">SMS notifications for trip updates</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              />
              <span className="ml-2 text-gray-700">Push notifications for app updates</span>
            </label>
          </div>
        </SettingsSection>

        <SettingsSection title="Security Settings">
          <div className="space-y-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Change Password
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete Account
            </button>
          </div>
        </SettingsSection>

        <div className="mt-8 flex justify-end space-x-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
