import MenuIcon from '@mui/icons-material/MenuSharp';
import  VideoCallIcon  from '@mui/icons-material/VideoCall';
import AppsIcon from "@mui/icons-material/Apps"
import  NotificationsIcon  from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import "./NavBAR.css"

export default function Navbar() {
  return (
    <nav>
      <MenuIcon />
      <Link to="/">
        <img className="logo" src='https://www.pngkey.com/png/full/400-4001566_youtube-free-to-use-high-resolution-youtube-logo.png' alt="youtube" />
        </Link>
      
      
      {/* <Link to="/">
        <h3>Home</h3>
      </Link> */}
      <div className='special-icons'>
      <VideoCallIcon className='iconic'/>
      <AppsIcon className='iconic'/>
      <NotificationsIcon className='iconic'/>
      <Avatar 
      src='http://pm1.narvii.com/6543/3eff0b94bfa7ba9e5bb6460fe485cb60f135cc5d_00.jpg' alt='RICK' />
      </div>

    </nav>
  );
}
