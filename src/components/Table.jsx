// Import React
import React from 'react';

// Create a functional component
const RevenueTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-600">Source</th>
            <th className="px-4 py-2 text-left text-gray-600">Revenue</th>
            <th className="px-4 py-2 text-left text-gray-600">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2 flex items-center">
              <span className="w-3 h-3 mr-2 inline-block bg-blue-500"></span>
              Direct
            </td>
            <td className="px-4 py-2">$ 2602</td>
            <td className="px-4 py-2 text-green-600">+43%</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 flex items-center">
              <span className="w-3 h-3 mr-2 inline-block bg-yellow-500"></span>
              Affiliate
            </td>
            <td className="px-4 py-2">$ 1253</td>
            <td className="px-4 py-2 text-green-600">+13%</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 flex items-center">
              <span className="w-3 h-3 mr-2 inline-block bg-red-500"></span>
              E-mail
            </td>
            <td className="px-4 py-2">$ 541</td>
            <td className="px-4 py-2 text-green-600">+24%</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 flex items-center">
              <span className="w-3 h-3 mr-2 inline-block bg-black"></span>
              Other
            </td>
            <td className="px-4 py-2">$ 1465</td>
            <td className="px-4 py-2 text-green-600">+11%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Export the component
export default RevenueTable;
