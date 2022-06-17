import React from 'react';

class Searchbar extends React.Component {
  render() {
    const { searchHandler, inputHandler, userInput } = this.props;
    return (
      <div>
        <form onSubmit={(event) => searchHandler(event)}>
          <input
            onChange={inputHandler}
            value={userInput}
            type="text"
            placeholder="Search"
          ></input>
          <button id="submit-button" type="submit">
            Search
          </button>
        </form>
        <br></br>
      </div>
    );
  }
}

export default Searchbar;
