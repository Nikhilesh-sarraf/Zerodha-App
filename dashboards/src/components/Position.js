import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-app-o0e6.onrender.com/allPositions").then((res) => {
      setPositions(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      {positions.length === 0 ? (
        <div className="no-orders text-center" style={{ marginTop: "50px", textAlign: "center" }}>
          <p>You have no positions. Buy a stock to get started.</p>
          <button className="btn btn-blue" style={{ marginTop: "10px" }}>Discover stocks</button>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue >= stock.avg * stock.qty;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Positions;