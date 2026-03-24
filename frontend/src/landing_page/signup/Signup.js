import React, { useState } from "react";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin 
      ? `${process.env.REACT_APP_API_URL || "http://localhost:3002"}/login`
      : `${process.env.REACT_APP_API_URL || "http://localhost:3002"}/signup`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        // Redirect to dashboard
        window.location.href = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3003";
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mt-5 mb-5 p-5 shadow-sm rounded" style={{ maxWidth: "500px", margin: "0 auto", backgroundColor:"#fff" }}>
      <h2 className="text-center mb-4">{isLogin ? "Login to Zerodha" : "Sign up for Zerodha"}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3" style={{backgroundColor:"#387ed1"}}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="text-center mt-3">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span 
          style={{ color: "#387ed1", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => { setIsLogin(!isLogin); setError(""); }}
        >
          {isLogin ? "Sign up here" : "Login here"}
        </span>
      </p>
    </div>
  );
}

export default Signup;