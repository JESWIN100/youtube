// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          YouTube Clone
        </Link>
        <form className="d-flex">
          <Link to="/upload" className="btn btn-outline-light">
            Upload
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;