import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import About from './components/About';
import Home from './components/pages/home';
import Header from './components/common/header';
import Footer from './components/common/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="NavBAR">
          <Header />
          <Navbar />
        </div>
        <div className="wrapper">
          <main>
            <Searchbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/src/components/pages/about.js" element={<About />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
