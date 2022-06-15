import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h3>Youtube</h3>
        <Link to="/"> Home</Link>
        <br></br>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Navbar;
