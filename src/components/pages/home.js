import React from 'react';
import Searchbar from './Searchbar';

class Home extends React.Component {
  

  

  render() {
   const {searchHandler, inputHandler, searchResults} = this.props;
    // let tubes = .map

    return (
      <div>
        <Searchbar searchHandler={searchHandler} inputHandler={inputHandler}/>
        {/* {tubes} */}
      </div>
    );
  }
}

export default Home;


