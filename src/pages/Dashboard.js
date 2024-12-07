import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Welcome to the RBAC Dashboard</h2>
      <div className="space-x-4">
        <Link to="/users" className="bg-blue-500 text-white px-4 py-2 rounded">Manage Users</Link>
        <Link to="/roles" className="bg-green-500 text-white px-4 py-2 rounded">Manage Roles</Link>
      </div>
    </div>
  );
};

export default Dashboard;
