import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

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
    const {  searchHandler, inputHandler, searchResults, userInput } =
      this.props;

    let tubes = searchResults.map((video) => {
      return (
        <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
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
            handleApi={this.handleApi}
          />
        </div>
        {tubes}
      </div>
    );
  }
}

export default Home;
