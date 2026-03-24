import React, { useState } from "react";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = "";
    if (isForgotPassword) {
      url = `https://zerodha-app-o0e6.onrender.com/forgotPassword`;
    } else {
      url = isLogin 
        ? `https://zerodha-app-o0e6.onrender.com/login`
        : `https://zerodha-app-o0e6.onrender.com/signup`;
    }

    try {
      const bodyPayload = isForgotPassword 
        ? JSON.stringify({ email, newPassword: password }) 
        : JSON.stringify({ email, password });
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyPayload,
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        if (isForgotPassword) {
          setIsForgotPassword(false);
          setIsLogin(true);
        } else {
          // Redirect to dashboard
          window.location.href = "https://zerodha-app-seven.vercel.app/";
        }
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mt-5 mb-5 p-5 shadow-sm rounded" style={{ maxWidth: "500px", margin: "0 auto", backgroundColor:"#fff" }}>
      <h2 className="text-center mb-4">
        {isForgotPassword ? "Reset Password" : isLogin ? "Login to Zerodha" : "Sign up for Zerodha"}
      </h2>
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
          <label className="form-label">{isForgotPassword ? "New Password" : "Password"}</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3" style={{backgroundColor:"#387ed1"}}>
          {isForgotPassword ? "Reset Password" : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      {!isForgotPassword && (
        <p className="text-center mt-3 mb-0">
          <span 
            style={{ color: "#387ed1", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => { setIsForgotPassword(true); setError(""); }}
          >
            Forgot Password?
          </span>
        </p>
      )}
      <p className="text-center mt-2">
        {isForgotPassword ? "Remembered your password? " : isLogin ? "Don't have an account? " : "Already have an account? "}
        <span 
          style={{ color: "#387ed1", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => { setIsLogin(!isLogin); setIsForgotPassword(false); setError(""); }}
        >
          {isForgotPassword ? "Login here" : isLogin ? "Sign up here" : "Login here"}
        </span>
      </p>
    </div>
  );
}

export default Signup;