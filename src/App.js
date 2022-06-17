import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/about';
import Home from './components/pages/home';
import Footer from './components/common/footer';
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

  handleApi = (userInput) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${userInput}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          searchResults: json.items,
        });
      });
  };

 
  //       const videoData = json.items;
  //       let tubes = videoData.map((video) => {
  //         return {
  //           vidTitle: video.snippet.title,
  //           thumbnail: video.snippet.thumbnails.default.url,
  //           videoId: video.id.videoId,
  //         };
  //       });
  //       this.setState({ searchResults: tubes });
  //     });
  // };

  // componentDidMount() {
  //   this.handleApi();
  // }

  render() {
    return (
      <div className="App">
        <div className="NavBAR">
          <Navbar />
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
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/video/:id" element={<Video />} />
          </Routes>
          
          {this.state.searchResults.length === 0 ? (
            <h4>No Search Results Yet!, Please submit a search above!</h4>
          ) : null}
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default App;
