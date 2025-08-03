import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    password: "",
    token: "",
    cart_id: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/hello/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("User registered successfully!");
        setFormData({
          id: "",
          username: "",
          password: "",
          token: "",
          cart_id: ""
        });
      } else {
        alert("Error: Failed to register user");
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
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
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
    backgroundColor: '#4CAF50',
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
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>

        <input
          style={inputStyle}
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          name="token"
          placeholder="Token"
          value={formData.token}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          name="cart_id"
          placeholder="Cart ID"
          value={formData.cart_id}
          onChange={handleChange}
        />
        <button type="submit" style={buttonStyle}>Register</button>

        <Link to="/login" style={linkStyle}>Already have an account? Login here</Link>
      </form>
    </div>
  );
};

export default Signup;
