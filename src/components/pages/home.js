import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

class Home extends React.Component {
  render() {
    const { searchHandler, inputHandler, searchResults, userInput } =
      this.props;

    let tubes = searchResults.map((video) => {
      return (
        <Link to={`/videos/${video.id.videoId}`}>
          <div>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.description}
            />
            <div>{video.snippet.title}</div>
          </div>
        </Link>
      );
    });

    return (
      <div>
        <div>
          <Searchbar
            searchHandler={searchHandler}
            inputHandler={inputHandler}
            userInput={userInput}
          />
        </div>
        {tubes}
      </div>
    );
  }
}

export default Home;
