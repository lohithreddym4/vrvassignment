import React, { useState } from 'react';

const Table = ({ headers, data, actions, searchable = false }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      {searchable && (
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 px-4 py-2 border rounded w-full"
        />
      )}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border p-2">{header}</th>
            ))}
            {actions && <th className="border p-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {headers.map((header, index) => (
                <td key={index} className="border p-2">{row[header.toLowerCase()]}</td>
              ))}
              {actions && (
                <td className="border p-2">
                  {actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => action.onClick(row)}
                      className={`mx-1 px-2 py-1 rounded ${action.className}`}
                    >
                      {action.label}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;