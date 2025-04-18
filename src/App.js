import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    quantity: '',
    payment: 'Cash on Delivery'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="App">
      <h1>Zion Soaps</h1>
      <form 
        action="https://formspree.io/f/mblgvpgd" 
        method="POST" 
        className="order-form"
      >
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />

        <label>Address:</label>
        <textarea 
          name="address" 
          value={formData.address}
          onChange={handleChange}
          required 
        />

        <label>Quantity:</label>
        <input 
          type="number" 
          name="quantity" 
          value={formData.quantity}
          onChange={handleChange}
          required 
        />

        <label>Payment Method:</label>
        <select 
          name="payment" 
          value={formData.payment}
          onChange={handleChange}
          required
        >
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="UPI">UPI</option>
        </select>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default App;