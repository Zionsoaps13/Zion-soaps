import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    quantity: 1,
    paymentMethod: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formspree API endpoint to send data to your email
    const form = e.target;
    const formData = new FormData(form);
    
    fetch('https://formspree.io/f/mblgvpgd', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert('Order submitted successfully!');
        } else {
          alert('There was an issue submitting your order.');
        }
      })
      .catch((error) => {
        alert('Error: ' + error);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            min="1"
            required
          />
        </label>
        <label>
          Payment Method:
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            required
          >
            <option value="">Select payment method</option>
            <option value="cash">Cash on Delivery</option>
            <option value="upi">UPI</option>
          </select>
        </label>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default App;