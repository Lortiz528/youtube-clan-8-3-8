
import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "./Error404.css"
import  Modal  from "react-modal"

function ErrorPage ()  {
 const [isOpen, setIsOpen] =useState(true);

 const navigate = useNavigate();
  const handleOnClick = useCallback(
  () => navigate("/", {replace:true}), [navigate], () => setIsOpen(false)
 );
 Modal.setAppElement('#root')

  return (
    <>
    <Modal
    isOpen={isOpen}
    contentLabel='ErrorPage'
    className="modal-content"
    style={{
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
    }}
    
    
    
    >
      
      <div className="modal-body">
   <h4 className="title"> 😱  Oh no, Seems like you fell into the Ether! 😱</h4>
          <br></br> 
           <img className="page404" src="https://fads.org.in/assets/public/img/404.gif" alt="404" ></img>
        </div>
<button type="button" className="error-button" onClick={handleOnClick}> Hurry, Go Back Home!</button>
    </Modal>
    </>


export default ErrorPage;
