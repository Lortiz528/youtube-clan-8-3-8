import React from "react";
import "./Error404.css"

const ErrorPage = props  => {
 if (!props.show) {
  return null
 }
 
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="title">Uh oh, You've found a page that doesn't exist</h4>
        </div>
        <div className="modal-body">
           <img className="page404" src="https://fads.org.in/assets/public/img/404.gif" alt="404" ></img>
        </div>
        <div className="modal-footer">
          <button className="error-button">Back to Home</button>
        </div>
      </div>
    </div>

  )
}

export default ErrorPage