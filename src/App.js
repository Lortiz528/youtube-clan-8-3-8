import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Footer from './components/common/Footer';
import Video from './components/pages/Video';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      userInput: '',
    };
  }

  inputHandler = (event) => {
    event.preventDefault();
    this.setState({
      userInput: event.target.value,
    });
  };

  searchHandler = (event) => {
    event.preventDefault();
    if (this.state.userInput) {
      this.handleApi(this.state.userInput);
      this.setState({
        userInput: '',
      });
    }
  };

  clearSearch=()=>{
    this.setState({
      searchResults:[]
    })
  }

  handleApi = (userInput) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          searchResults: json.items,
        });
      });
  };


  render() {
    return (
      <div className="App">
        <div className="NavBAR">
          <Navbar clearSearch={this.clearSearch}/>
        </div>
        <div className="wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleApi={this.handleApi}
                  searchHandler={this.searchHandler}
                  searchResults={this.state.searchResults}
                  userInput={this.state.userInput}
                  inputHandler={this.inputHandler}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/videos/:id" element={<Video />} />
          </Routes>

          {!this.state.searchResults.length ? (
            <h4>No Search Results Yet!, Please submit a search above!</h4>
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
