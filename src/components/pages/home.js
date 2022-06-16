import React from 'react';
import Searchbar from './Searchbar';
import VideoList from './VideoList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        <section>
          <VideoList />
        </section>
      </div>
    );
  }
}

export default Home;
