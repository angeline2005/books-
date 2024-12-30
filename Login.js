import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      console.log("Login Successful:", { username, password });
      onLogin();
      navigate("/main");
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
