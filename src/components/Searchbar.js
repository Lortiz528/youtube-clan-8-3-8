import React from 'react';

class Searchbar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search"></input>
        <button>Search</button>
      </div>
    );
  }
}

export default Searchbar;