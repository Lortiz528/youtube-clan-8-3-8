import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

import './home.css';

class Home extends React.Component {
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
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`,
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          searchResults: json.items,
        });
      });
  };

  render() {
    const { searchResults } = this.state;

    let tubes = searchResults.map((video) => {
      return (
        <div className='video-card' key={video.id.videoId}>
        <Link to={`/videos/${video.id.videoId}`}>
          <div className='results'>
            <img
              className='thumbnail'
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.thumbnails.high.url}
            />
             {/* <div className='video-info'>
              <Avatar className='video-avatar' alt={video.snippet.channelTitle}/>
              </div> */}
        <div className='video-text'>
          <h4>{video.snippet.title}</h4>
          {/* <p>{video.snippet.description}</p> */}
        </div>
        </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="home-page">
      <div>
        <Searchbar
          searchHandler={this.searchHandler}
          inputHandler={this.inputHandler}
          userInput={this.state.userInput}
          handleApi={this.handleApi}
        />
      </div>
      {!this.state.searchResults.length ? (

        <div className='no-results'>

          <h4>No Search Results Yet!, Please submit a search above!</h4>
        </div>
      ) : null}
      {tubes}
    </div>
  );
}
}

export default Home;
