import React from "react"

class Form extends React.Component {
    constructor() {
      super()
      this.state = {
        userName: '',
        comment: '',
        comments: [],
      }
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
      console.log(event)
      let { comments, userName, comment } = this.state
      let newComment = `${userName}:  ${comment}`
      this.setState({ comments: [...comments, newComment] })
      event.target.reset()
    }
  
    name = (event) => {
      const { value } = event.target
      this.setState({ userName: value })
    }
    commenting = (event) => {
      const { value } = event.target
      this.setState({ comment: value })
    }
  
    render() {
      let { commentName, comment, comments } = this.state
    
  
      return (
        <section className='notes'>
          <h3 className="comment-title" >Comment</h3>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <label className="user-label">  Name  </label>
            <input
              className="user-input"
              placeholder="Name..."
              id='text'
              name='value'
              type='text'
              value={commentName}
              onChange={this.name}
            />
            <br />
            <label className="user-label"> Comment </label>
            <input
              className="user-input"
              placeholder="..."
              id='comment-box'
              name='value'
              type='text'
              value={comment}
              onChange={this.commenting}
            />
            <br />
            <button className="formbtn" type='submit'>Submit</button>
            <br />
            <br />
            <br />
          </form>
          <hr></hr>
          <div className="comment-results">
            <p>
              {comments.map((comment,ind) => (
                <h5 key={ind}>{comment}</h5>
              ))}
            </p>
          </div>
        </section>
      )
    }
  }
  export default Form
  
