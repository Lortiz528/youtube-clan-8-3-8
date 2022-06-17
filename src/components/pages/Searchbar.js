import React from 'react';

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    };
  }

 

  render() {
    const { searchHandler, inputHandler } = this.props;
    return (
      <div>
        <form onSubmit={(event)=>searchHandler(event)}>
          <input
            onChange={this.inputHandler}
            value={this.state.userInput}
            type="text"
            placeholder="Search"
          ></input>
          <button>Search</button>
        </form>
        <br></br>
      </div>
    );
  }
}

export default Searchbar;
