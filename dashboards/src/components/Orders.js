import React, { useState } from "react";

const Orders = () => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [mode, setMode] = useState("BUY");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/newOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        qty: Number(qty),
        price: Number(price),
        mode,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        alert("Order placed successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Error placing order");
      });
  };

  return (
    <div className="orders-container">
      <h3>Place a New Order</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input
          type="text"
          placeholder="Instrument Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="BUY">BUY</option>
          <option value="SELL">SELL</option>
        </select>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Orders;
