import React, { useState } from "react";
import '../styles/LoginScreen.css';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) onLogin(username.trim());
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <h1 className="login-title">
          Login to Cloud Dictionary App
        </h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input id="username" type="text" value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Enter any username" />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;