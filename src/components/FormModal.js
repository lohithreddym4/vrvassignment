import React, { useState, useEffect } from 'react';

const FormModal = ({ title, fields, onSubmit, onClose, initialData = {},setEditUser }) => {
  const [formData, setFormData] = useState({});

  // Populate initial data when the modal opens
  useEffect(() => {
    const initialValues = fields.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: initialData[field.name] || field.defaultValue || '',
      }),
      {}
    );
    setFormData(initialValues);
  }, [fields, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass updated data to the parent
    setEditUser(formData);
    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor={field.name}>
                {field.label}
              </label>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-3 py-2 border rounded"
                required={field.required}
              />
            </div>
          ))}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
