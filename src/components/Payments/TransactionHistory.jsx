import React from 'react';

const transactions = [
  { id: 1, date: '2023-08-11', description: 'Ticket purchase', amount: 9000, status: 'Completed' },
  { id: 2, date: '2023-08-10', description: 'Refund', amount: -5000, status: 'Completed' },
  { id: 3, date: '2023-08-09', description: 'Ticket purchase', amount: 12000, status: 'Pending' },
  // Add more transactions as needed
];

const TransactionHistory = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left">Date</th>
            <th className="text-left">Description</th>
            <th className="text-right">Amount</th>
            <th className="text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t">
              <td className="py-2">{transaction.date}</td>
              <td>{transaction.description}</td>
              <td className="text-right">{transaction.amount} XAF</td>
              <td className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;