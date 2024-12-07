let users = [
    { id: 1, name: 'Lohith', email: 'lohithreddym4@gmail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Venkat', email: 'lohithreddym41@gmail.com', role: 'Editor', status: 'Inactive' },
  ];
  
  let roles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ];
  
  export const fetchUsers = () => Promise.resolve(users);
  export const fetchRoles = () => Promise.resolve(roles);
  export const deleteUser = (id) => {
    users = users.filter((user) => user.id !== id);
    return Promise.resolve();
  };
  export const deleteRole = (id) => {
    roles = roles.filter((role) => role.id !== id);
    return Promise.resolve();
  };
  