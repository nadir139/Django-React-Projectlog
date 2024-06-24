// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";



function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="active">Home</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/logout">Logout</a>
    </div>
  );
}

export default Navbar;
