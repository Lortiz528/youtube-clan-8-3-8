import { Link } from "react-router-dom"
import React from "react";
import "./Error404.css"


const ErrorPage = props  => {
 
 
//   if (!props.show) {
//   return null
//  }
 
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="title"> Uh oh, Seems like you fell into the Ether</h4>
        </div>
        <div className="modal-body">
           <img className="page404" src="https://fads.org.in/assets/public/img/404.gif" alt="404" ></img>
        </div>
        <div className="modal-footer">
        <Link to="/">
          <button  className="error-button">Hurry Go Back to the Homepage!</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default ErrorPage