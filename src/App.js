import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/about';
import Home from './components/pages/home';
import Footer from './components/common/footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      userInput: '',
      noUserInput: 'No Search Results Yet! Please submit a search above!',
    };
  }
  // landing page will have the noUserInput text displayed below the search bar

  inputHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  clearInputHandler = () => {
    this.setState({
      searchResults: [],
      noUserInput: 'No Search Results Yet! Please submit a search above!',
    });
  };

  handleApi = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${userInput}&key=${process.env.REACT_APP_API_KEY}`
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
          <Navbar clearInputhandler={this.clearInputHandler} />
        </div>
        <div className="wrapper">
          <Routes>
            <Route
              path="/"
              element={<Home videos={this.state.searchResults} />}
            />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
