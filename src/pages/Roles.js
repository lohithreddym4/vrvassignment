import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import FormModal from '../components/FormModal';
import { fetchRoles, deleteRole } from '../mock/mockApi';

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchRoles().then(setRoles);
  }, []);

  const addRole = (newRole) => {
    setRoles([...roles, { id: roles.length + 1, ...newRole }]); // Mocking backend ID generation
  };

  const handleDelete = (role) => {
    if (window.confirm(`Are you sure you want to delete the role ${role.name}?`)) {
      deleteRole(role.id).then(() => setRoles(roles.filter((r) => r.id !== role.id)));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Roles</h2>
      <button
        onClick={() => setShowModal(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Role
      </button>
      <Table
        searchable
        headers={['Name', 'Permissions']}
        data={roles}
        actions={[
          { label: 'Delete', className: 'bg-red-500 text-white', onClick: handleDelete },
        ]}
      />
      {showModal && (
        <FormModal
          title="Add Role"
          fields={[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter role name', required: true },
            { label: 'Permissions', name: 'permissions', type: 'text', placeholder: 'Comma-separated permissions', required: true },
          ]}
          onSubmit={(formData) =>
            addRole({ ...formData, permissions: formData.permissions.split(',').map((p) => p.trim()) })
          }
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Roles;
