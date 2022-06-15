import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import About from './components/About';
import Test from './components/Test';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br></br>
        <Searchbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    );
  }
}

export default App;
