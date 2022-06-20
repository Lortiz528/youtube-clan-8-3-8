import Header from './Header';
import { Link } from 'react-router-dom';
import VideoCallIcon from "@mui/icons-material/VideoCall"
import AppsIcon from "@mui/icons-material/Apps"
import  NotificationsIcon  from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import React from 'react';
import "./navbar.css"

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      userInput: '',
    };
  }
  clearSearch = () => {
    this.setState({
      searchResults: [],
    });
  };

  render() {
    return (
      <nav>
        <Header clearSearch={this.clearSearch} />
       
        <div className='special-icons'>
      <VideoCallIcon className='iconic'/>
      <AppsIcon className='iconic'/>
      <NotificationsIcon className='iconic'/>
      <Link to="/about"><Avatar 
      src='https://www.digitaltveurope.com/files/2019/12/Baby-Yoda-Soup.jpg' alt='Baby Yoda' /></Link>
      </div>
      </nav>
    );
  }
}

export default Navbar;
