import React from "react";
import "./Error404.css"

function ErrorPage(props) { 
  return (
    < ErrorPage {...props}
    size='lg'
    aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="title">ERROR 404</h4>
        </div>
        <div className="modal-body">
          some image here
        </div>
        <div className="modal-footer">
          <button className="error-button">Close</button>
        </div>
      </div>
    </div>
    </ErrorPage>
  )
}