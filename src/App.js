import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import About from './components/About';
import Test from './components/Test';
import Home from './components/pages/home';
import Header from './components/common/header';
import Footer from './components/common/footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleApi = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
    )
    .then((response) => response.json())
    .then((json) => {})
  };

  componentDidMount() {
    this.handleApi();
  }

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
              <Route path="/about" element={<About />} />
              <Route path="/test" element={<Test />} />
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
