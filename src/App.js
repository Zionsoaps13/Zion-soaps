import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [order, setOrder] = useState('');

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert(`Order received for ${name}: ${order}`);
    setName('');
    setOrder('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zion Soaps</h1>
        <p>Your place for handmade, natural soaps!</p>
      </header>

      <main>
        <h2>Place Your Order</h2>
        <form onSubmit={handleOrderSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Soap Order:
            <input
              type="text"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Submit Order</button>
        </form>
      </main>

      <footer>
        <p>Thank you for choosing Zion Soaps!</p>
      </footer>
    </div>
  );
}

export default App;