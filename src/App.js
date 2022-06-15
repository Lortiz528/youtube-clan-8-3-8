import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </div>
    );
  }
}

export default App;
