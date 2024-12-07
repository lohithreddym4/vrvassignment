import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import FormModal from '../components/FormModal';
import { fetchUsers, deleteUser } from '../mock/mockApi';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null); // Track user being edited

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);
  
const handleEdit = (user) => {
  setEditUser(user);
  setShowModal(true);
};

const updateUser = (updatedUser) => {
  setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
};


  const addUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]); // Mocking backend ID generation
  };

  const handleDelete = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      deleteUser(user.id).then(() => setUsers(users.filter((u) => u.id !== user.id)));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      <button
        onClick={() => setShowModal(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add User
      </button>
      <Table
      searchable
  headers={['Name', 'Email', 'Role', 'Status']}
  data={users}
  actions={[
    { label: 'Edit', className: 'bg-blue-500 text-white', onClick: handleEdit },
    { label: 'Delete', className: 'bg-red-500 text-white', onClick: handleDelete },
  ]}
/>

{showModal && (
  <FormModal
    title={editUser ? 'Edit User' : 'Add User'}
    fields={[
      { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter name', required: true },
      { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter email', required: true },
      { label: 'Role', name: 'role', type: 'text', placeholder: 'Enter role', required: true },
      { label: 'Status', name: 'status', type: 'text', placeholder: 'Active/Inactive', required: true },
    ]}
    onSubmit={editUser ? updateUser : addUser}
    onClose={() => {
      setEditUser(null);
      setShowModal(false);
    }}
    initialData={editUser || {}}
    setEditUser={setEditUser}
  />
)}

    </div>
  );
};

export default Users;
