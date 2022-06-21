import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import './home.css';

/**
 * Class component Home page
 * @returns Searchbar div as well as video thumbnail results
 */

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      userInput: '',
    };
  }

  /**
   * updates the state of userinput to match what is typed into search bar
   * @param {*} event
   */

  inputHandler = (event) => {
    event.preventDefault();
    this.setState({
      userInput: event.target.value,
    });
  };

  /**
   * fetches the API with what is inputted by the user, then clears the input field and its state
   * @param {*} event
   */
  searchHandler = (event) => {
    event.preventDefault();
    if (this.state.userInput) {
      this.handleApi(this.state.userInput);
      this.setState({
        userInput: '',
      });
    }
  };

  /**
   *fetches the API with users input. set to show 10 results
   * @param {string} userInput- string entered by user in the search bar
   */

  handleApi = (userInput) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          searchResults: json.items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { searchResults } = this.state;

    let tubes = searchResults.map((video) => {
      return (
        <div className="video-card" key={video.id.videoId}>
          <Link to={`/videos/${video.id.videoId}`}>
            <div className="results">
              <img
                className="thumbnail"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description}
              />
              <div className="video-text">
                <h4>{video.snippet.title}</h4>
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
          <div className="no-results">
            <h4>No Search Results Yet!, Please submit a search above!</h4>
          </div>
        ) : null}
        {tubes}
      </div>
    );
  }
}

export default Home;
