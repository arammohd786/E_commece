import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/hello/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const result = await response.json();
        alert("Login successful!");
        console.log("Login response:", result);
        // You can store token or redirect user here
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Server Error: " + error.message);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  const linkStyle = {
    marginTop: '15px',
    textAlign: 'center',
    display: 'block',
    color: '#007bff',
    textDecoration: 'none'
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>

        <input
          style={inputStyle}
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" style={buttonStyle}>Login</button>

        <Link to="/" style={linkStyle}>Don't have an account? Sign up here</Link>
      </form>
    </div>
  );
};

export default Login;
