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
      let newComment = `${userName} says, "${comment}"`
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
          <h3>1-on-1 Notes</h3>
          <form onSubmit={this.handleSubmit}>
            <label>  Name:  </label>
            <input
              id='text'
              name='value'
              type='text'
              value={commentName}
              onChange={this.name}
            />
            <br />
            <br />
            <label> Message: </label>
            <input
              id='text'
              name='value'
              type='text'
              value={comment}
              onChange={this.commenting}
            />
            <br />
            <br />
            <button type='submit'>Add Note</button>
          </form>
          <div>
            <ul>
              {comments.map((comment,ind) => (
                <li key={ind}>{comment}</li>
              ))}
            </ul>
          </div>
        </section>
      )
    }
  }
  export default Form
  