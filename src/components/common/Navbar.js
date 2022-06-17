import Header from './Header';

import { Link } from 'react-router-dom';
import React from 'react';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      userInput: '',
    };
  }
  clearSearch = () => {
    this.setState({
      searchResults: [],
    });
  };

  render() {
    return (
      <nav>
        <Header clearSearch={this.clearSearch} />
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
