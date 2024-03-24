// Checkout.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission, including Firebase order creation
    history.push('/'); // Redirect to home after submission
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} placeholder="Confirm Email" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
