import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { Routes, Route } from 'react-router-dom';

import About from './components/pages/About';
import Home from './components/pages/Home';
import Footer from './components/common/Footer';

import Video from './components/pages/Video';

export default function App () {

   
    return (
      <div className="App">
      
     
          <Navbar />
        
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos/:id" element={<Video />} />
          </Routes>
        </div>
       
        <Footer />
      </div>
    );
  }

