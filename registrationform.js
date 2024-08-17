// src/components/RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventName: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.eventName) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registration successful!');
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          eventName: '',
          comments: '',
        });
      } else {
        alert('Registration failed.');
      }
    } catch (error) {
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Register for EBSB Event</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="mb-4 w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="mb-4 w-full p-2 border rounded"
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="mb-4 w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="eventName"
        placeholder="Event Name"
        value={formData.eventName}
        onChange={handleChange}
        className="mb-4 w-full p-2 border rounded"
        required
      />
      <textarea
        name="comments"
        placeholder="Comments (Optional)"
        value={formData.comments}
        onChange={handleChange}
        className="mb-4 w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
