import Header from './Header';

import { Link } from 'react-router-dom';
import React from 'react';

class Navbar extends React.Component {
  render() {
    const { clearSearch } = this.props;
    return (
      <nav>
        <Header clearSearch={clearSearch} />
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
