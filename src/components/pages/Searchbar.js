import React from 'react';

class Searchbar extends React.Component {
  render() {
    const { searchHandler, inputHandler, userInput } = this.props;
    return (
      <div>
        <form onSubmit={(event) => searchHandler(event)}>
        <div className='input-container'> 
          <input 
            onChange={inputHandler}
            value={userInput}
            type="text"
            placeholder="Search"
          ></input>
          <button className='search-button' id="submit-button" type="submit"  >
            <img className='search-icon' src='https://static.thenounproject.com/png/3134345-200.png' ></img>
          </button>
          </div>
        </form>
        <br></br>
      </div>
    );
  }
}

export default Searchbar;
