import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import About from './components/About';

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
        <p>Hello world(test)</p>
        <Navbar />
        <Searchbar />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;
