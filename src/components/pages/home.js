import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Searchbar from './Searchbar';
import VideoList from './VideoList';

class Home extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       searchBar: "",
//       videos: [],
//     }
//   }
//   handleSearch = (event) => {
//     const {value} = event.target;
//     this.setState({searchBar: value})
//   }
// handleSubmit = (event) => {
//   event.preventDefault();
//   fetch('data.json')

//   .then((response) => response.json())

//   .then((obj) => {
//   this.setState({video: [...obj.items]})
// });
// this.setState({searchBar: " "})
// }


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
