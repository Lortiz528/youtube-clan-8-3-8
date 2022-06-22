import React from 'react';

/**
 * Allows user to input a comment on the video page. Displays list of comments made on the page
 */

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      comment: '',
      comments: [],
    };
  }


  /**
   * Updates state with user name and their comment, adds the name/comment values to list of comments for the video
   * @param {*} event 
   */
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    let { comments, userName, comment } = this.state;
    let newComment = `${userName} --  ${comment}`;
    this.setState({
      comments: [...comments, newComment],
      userName: '',
      comment: '',
    });
    // event.target.reset()
  };

/**
 * updates the username state with user input
 * @param {*} event 
 */

  name = (event) => {
    const { value } = event.target;
    this.setState({ userName: value });
  };

  /**
 * updates the comment state with user input
 * @param {*} event 
 */
  commenting = (event) => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  render() {
    let { userName, comment, comments } = this.state;

    return (
      <section className="notes">
        <h3 className="comment-title">Comment</h3>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label className="user-label"> Name </label>
          <input
            className="user-input"
            placeholder="Name..."
            id="text"
            name="value"
            type="text"
            value={userName}
            onChange={this.name}
          />
          <br />
          <label className="user-label"> Comment </label>
          <input
            className="user-input"
            placeholder="..."
            id="comment-box"
            name="value"
            type="text"
            value={comment}
            onChange={this.commenting}
          />
          <br />
          <button className="formbtn" type="submit">
            Submit
          </button>
          <br />
          <br />
          <br />
        </form>
        <hr></hr>
        <div className="comment-results">
          <p>
            {comments.map((comment, ind) => (
              <h5 key={ind}>{comment}</h5>
            ))}
          </p>
        </div>
      </section>
    );
  }
}
export default Form;
