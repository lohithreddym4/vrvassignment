import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Roles from './pages/Roles';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl">RBAC Admin Dashboard</h1>
          <Link to="/" className="text-white underline">Dashboard</Link>
          <Link to="/users" className="ml-4 text-white underline">Users</Link>
          <Link to="/roles" className="ml-4 text-white underline">Roles</Link>
        </header>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
