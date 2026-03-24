import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-app-o0e6.onrender.com/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders text-center" style={{ marginTop: "50px", textAlign: "center" }}>
          <p>You haven't placed any orders today</p>
          <button className="btn btn-blue" style={{ marginTop: "10px" }}>Get started</button>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({orders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price.toFixed(2)}</td>
                      <td className={order.mode === "BUY" ? "profit" : "loss"}>{order.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;