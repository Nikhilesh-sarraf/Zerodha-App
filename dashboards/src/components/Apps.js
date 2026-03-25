import React from "react";

const Apps = () => {
  return (
    <div className="apps-container" style={{ padding: "50px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "15px", color: "#444" }}>Zerodha Ecosystem</h2>
      <p style={{ color: "#666", marginBottom: "40px" }}>
        Explore an ecosystem of powerful investment apps, integrated seamlessly with your Kite account.
      </p>

      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ border: "1px solid #eee", padding: "30px", borderRadius: "8px", width: "220px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          <h4 style={{ color: "#387ed1", marginBottom: "10px" }}>Sensibull</h4>
          <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>Options Trading Platform</p>
        </div>
        <div style={{ border: "1px solid #eee", padding: "30px", borderRadius: "8px", width: "220px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          <h4 style={{ color: "#387ed1", marginBottom: "10px" }}>smallcase</h4>
          <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>Thematic Investment Portfolios</p>
        </div>
        <div style={{ border: "1px solid #eee", padding: "30px", borderRadius: "8px", width: "220px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          <h4 style={{ color: "#387ed1", marginBottom: "10px" }}>Streak</h4>
          <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>Algo Trading for Everyone</p>
        </div>
        <div style={{ border: "1px solid #eee", padding: "30px", borderRadius: "8px", width: "220px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          <h4 style={{ color: "#387ed1", marginBottom: "10px" }}>Ditto</h4>
          <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>Insurance Made Easy</p>
        </div>
      </div>
    </div>
  );
};

export default Apps;
